"use strict"

class Account {

  constructor() {
    this.statement = 'date || credit || debit || balance'
  }
  printStatement() {
    return this.statement;
  }

  deposit(amount, optionalDate) {
    let deposit = new Interaction(amount, optionalDate)
    this.statement += `\n${deposit.transacInfo()}`
  }
}
