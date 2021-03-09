"use strict"

describe ('Account', () => {
  let account;
  let testDate
  beforeEach( () => {
    testDate = new Date('2021-05-19')
    account = new Account
  })
  describe('printStatement', () => {
    describe("when you haven't added any money yet", () => {
      it('prints just the headers', () => {
        expect(account.printStatement()).toEqual('date || credit || debit || balance')
      })
    })
    describe('when you deposit on different days', () => {
      let earlyDate;
      beforeEach( () => {
        earlyDate = new Date('2020-05-19');
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
  })

  describe('deposit()', () => {
    it("adds a line to the statement with a credit and today's date and increases the balance", () => {
      account.deposit(100);
      let todayString = dateToString(new Date)
      expect(account.printStatement()).toEqual(`date || credit || debit || balance\n${todayString} || 100.00 || || 100.00`)
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
      let todayString = dateToString(new Date)
      expect(account.printStatement()).toEqual(`date || credit || debit || balance\n${todayString} || || 100.00 || -100.00`)
    })
    describe('when passed a date as well as an amount', () => {
      it('has that date in the statement', () => {
        account.withdraw(100, testDate)
        expect(account.printStatement()).toEqual('date || credit || debit || balance\n19/05/2021 || || 100.00 || -100.00')
      })
    })
  })

})
