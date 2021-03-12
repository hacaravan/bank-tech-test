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

  it("User can deposit and withdraw money on different days and see these transactions listed newest first", () => {
    account.deposit(200)
    testDate = new Date('2021-05-20')
    jasmine.clock().mockDate(testDate)
    account.withdraw(100)
    testDate = new Date('2021-05-21')
    jasmine.clock().mockDate(testDate)
    account.deposit(300)
    expectation = 'date || credit || debit || balance\n21/05/2021 || 300.00 || || 400.00\n20/05/2021 || || 100.00 || 100.00\n19/05/2021 || 200.00 || || 200.00'
    expect(account.printStatement()).toEqual(expectation)
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })
})
