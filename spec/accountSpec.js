"use strict"

describe ('Account', () => {
  describe('printStatement', () => {
    describe("when you haven't added any money yet", () => {
      it('prints just the headers', () => {
        let account = new Account;
        expect(account.printStatement()).toEqual('date || credit || debit || balance')
      })
    })
  })
})
