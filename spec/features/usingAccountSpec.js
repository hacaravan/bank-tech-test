/*global Account*/

"use strict"

describe("Account", () => {
  let testDate, account, expectation;

  beforeEach( () => {
    testDate = new Date('2021-05-19')
    jasmine.clock().install();
    jasmine.clock().mockDate(testDate)
    account = new Account
  })

  it("User can deposit money in account and see these deposits in a statement", () => {
    account.deposit(100)
    account.deposit(200)
    expectation = 'date || credit || debit || balance\n19/05/2021 || 200.00 || || 300.00\n19/05/2021 || 100.00 || || 100.00'
    expect(account.printStatement()).toEqual(expectation)
  })

  it("User can deposit and withdraw money and see these transactions in a statement", () => {
    account.deposit(200)
    account.withdraw(100)
    expectation = 'date || credit || debit || balance\n19/05/2021 || || 100.00 || 100.00\n19/05/2021 || 200.00 || || 200.00'
    expect(account.printStatement()).toEqual(expectation)
  })

  it("User can withdraw money from an account and see negative balance in a statement", () => {
    account.withdraw(200)
    account.withdraw(100)
    expectation = 'date || credit || debit || balance\n19/05/2021 || || 100.00 || -300.00\n19/05/2021 || || 200.00 || -200.00'
    expect(account.printStatement()).toEqual(expectation)
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })
})
