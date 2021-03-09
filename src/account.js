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
    this.statement += `\n${deposit.date} || ${deposit.credit.toFixed(2)} || || ${deposit.credit.toFixed(2)}`
  }
}
