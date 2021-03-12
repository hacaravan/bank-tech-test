/*global Account*/

"use strict"

describe("Account", () => {
  let testDate;
  beforeEach( () => {
    testDate = new Date('2021-05-19')
    jasmine.clock().install();
    jasmine.clock().mockDate(testDate)
  })
  it("User can deposit money in account and see these deposits in a statement", () => {
    let account = new Account
    account.deposit(100)
    account.deposit(200)
    let expectation = 'date || credit || debit || balance\n19/05/2021 || 200.00 || || 300.00\n19/05/2021 || 100.00 || || 100.00'
    expect(account.printStatement()).toEqual(expectation)
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })
})
