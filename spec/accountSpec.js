"use strict"

describe ('Account', () => {
  let account;
  beforeEach( () => {
    account = new Account
  })
  describe('printStatement', () => {
    describe("when you haven't added any money yet", () => {
      it('prints just the headers', () => {
        expect(account.printStatement()).toEqual('date || credit || debit || balance')
      })
    })
  })

  describe('deposit', () => {
    it('adds a line to the statement with a credit and the date and increases the balance', () => {
      account.deposit(100);
      let todayString = dateToString(new Date)
      expect(account.printStatement()).toEqual(`date || credit || debit || balance\n${todayString} || 100.00 || || 100.00`)
    })
  })
})
