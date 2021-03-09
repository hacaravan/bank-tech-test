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
      it('prints newer transactions first', () => {
        let earlyDate = new Date('2020-05-19');
        account.deposit(100, earlyDate);
        account.deposit(200, testDate);
        expect(account.printStatement().indexOf("19/05/2021")).toBeLessThan(account.printStatement().indexOf("19/05/2020"))
      })
    })
  })

  describe('deposit', () => {
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
})
