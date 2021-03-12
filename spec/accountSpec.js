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

  // it("deals with multiple", () => {
  //   account.deposit(100, earlyDate);
  //   account.deposit(100, earlyDate);
  //   account.deposit(100, earlyDate);
  //   account.deposit(100, earlyDate);
  //   account.deposit(100, earlyDate);
  //   account.deposit(200, testDate);
  //   account.deposit(200, testDate);
  //   account.deposit(200, testDate);
  //   account.deposit(200, testDate);
  //   account.deposit(200, testDate);
  //   expect(account.printStatement()).toEqual(1)
  // })

  describe('printStatement', () => {
    
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
