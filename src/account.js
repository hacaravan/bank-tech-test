"use strict"

class Account {

  constructor() {
    this.statement = 'date || credit || debit || balance'
  }
  printStatement() {
    return this.statement;
  }

  deposit(amount) {
    let deposit = new Interaction(amount)
    this.statement += `\n${deposit.transacInfo()}`
  }
}
