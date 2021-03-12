/*global Account*/

"use strict"

describe ('Account', () => {
  let account, earlyDate, testDate;
  beforeEach( () => {
    earlyDate = new Date('2020-05-19')
    testDate = new Date('2021-05-19')
    account = new Account
    jasmine.clock().install();
    jasmine.clock().mockDate(testDate)
  })

  describe('printStatement', () => {
    describe("when you haven't added any money yet", () => {
      it('prints just the headers', () => {
        expect(account.printStatement()).toEqual('date || credit || debit || balance')
      })
    })
    describe('when you make multiple deposits', () => {
      beforeEach( () => {
        account.deposit(100, earlyDate);
        account.deposit(200, testDate);
      })
      it('prints newer transactions first', () => {
        expect(account.printStatement().indexOf("19/05/2021")).toBeLessThan(account.printStatement().indexOf("19/05/2020"))
      })
      it('increases the balance by the correct amount', () => {
        let expectation = 'date || credit || debit || balance\n19/05/2021 || 200.00 || || 300.00\n19/05/2020 || 100.00 || || 100.00'
        expect(account.printStatement()).toEqual(expectation)
      })
    })
    describe('when you make multiple withdrawals', () => {
      beforeEach( () => {
        account.withdraw(100, earlyDate);
        account.withdraw(200, testDate);
      })
      it('prints newer transactions first', () => {
        expect(account.printStatement().indexOf("19/05/2021")).toBeLessThan(account.printStatement().indexOf("19/05/2020"))
      })
      it('decreases the balance by the correct amount', () => {
        let expectation = 'date || credit || debit || balance\n19/05/2021 || || 200.00 || -300.00\n19/05/2020 || || 100.00 || -100.00'
        expect(account.printStatement()).toEqual(expectation)
      })
    })
    describe('when you deposit and withdraw', () => {
      beforeEach( () => {
        account.deposit(200, earlyDate);
        account.withdraw(100, testDate);
      })
      it('prints newer transactions first', () => {
        expect(account.printStatement().indexOf("19/05/2021")).toBeLessThan(account.printStatement().indexOf("19/05/2020"))
      })
      it('increases and decreases the balance by the correct amount', () => {
        let expectation = 'date || credit || debit || balance\n19/05/2021 || || 100.00 || 100.00\n19/05/2020 || 200.00 || || 200.00'
        expect(account.printStatement()).toEqual(expectation)
      })
    })
  })

  describe('deposit()', () => {
    it("adds a line to the statement with a credit and today's date and increases the balance", () => {
      account.deposit(100);
      expect(account.printStatement()).toEqual(`date || credit || debit || balance\n19/05/2021 || 100.00 || || 100.00`)
    })
    describe('when passed a date as well as an amount', () => {
      it('has that date in the statement', () => {
        account.deposit(100, testDate)
        expect(account.printStatement()).toEqual('date || credit || debit || balance\n19/05/2021 || 100.00 || || 100.00')
      })
    })
  })

  describe('withdraw()', () => {
    it("adds a line to the statement with a debit and today's date and decreases the balance", () => {
      account.withdraw(100);
      expect(account.printStatement()).toEqual(`date || credit || debit || balance\n19/05/2021 || || 100.00 || -100.00`)
    })
    describe('when passed a date as well as an amount', () => {
      it('has that date in the statement', () => {
        account.withdraw(100, testDate)
        expect(account.printStatement()).toEqual('date || credit || debit || balance\n19/05/2021 || || 100.00 || -100.00')
      })
    })
  })
  afterEach( () => {
    jasmine.clock().uninstall();
  })

})
