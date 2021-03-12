describe("Statement", () => {
  describe("print()", () => {
    describe("for an empty array", () => {
      it('prints just the headers', () => {
        expect(Statement.prototype.print([])).toEqual('date || credit || debit || balance')
      })
    })
    // describe('when you make multiple deposits', () => {
    //   beforeEach( () => {
    //     account.deposit(100, earlyDate);
    //     account.deposit(200, testDate);
    //   })
    //   it('prints newer transactions first', () => {
    //     expect(account.printStatement().indexOf("19/05/2021")).toBeLessThan(account.printStatement().indexOf("19/05/2020"))
    //   })
    //   it('increases the balance by the correct amount', () => {
    //     let expectation = 'date || credit || debit || balance\n19/05/2021 || 200.00 || || 300.00\n19/05/2020 || 100.00 || || 100.00'
    //     expect(account.printStatement()).toEqual(expectation)
    //   })
    // })
    // describe('when you make multiple withdrawals', () => {
    //   beforeEach( () => {
    //     account.withdraw(100, earlyDate);
    //     account.withdraw(200, testDate);
    //   })
    //   it('prints newer transactions first', () => {
    //     expect(account.printStatement().indexOf("19/05/2021")).toBeLessThan(account.printStatement().indexOf("19/05/2020"))
    //   })
    //   it('decreases the balance by the correct amount', () => {
    //     let expectation = 'date || credit || debit || balance\n19/05/2021 || || 200.00 || -300.00\n19/05/2020 || || 100.00 || -100.00'
    //     expect(account.printStatement()).toEqual(expectation)
    //   })
    // })
    // describe('when you deposit and withdraw', () => {
    //   beforeEach( () => {
    //     account.deposit(200, earlyDate);
    //     account.withdraw(100, testDate);
    //   })
    //   it('prints newer transactions first', () => {
    //     expect(account.printStatement().indexOf("19/05/2021")).toBeLessThan(account.printStatement().indexOf("19/05/2020"))
    //   })
    //   it('increases and decreases the balance by the correct amount', () => {
    //     let expectation = 'date || credit || debit || balance\n19/05/2021 || || 100.00 || 100.00\n19/05/2020 || 200.00 || || 200.00'
    //     expect(account.printStatement()).toEqual(expectation)
    //   })
    // })
  })
})
