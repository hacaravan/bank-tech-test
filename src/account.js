"use strict"

class Account {

  constructor() {
    this.statements = []
  }
  printStatement() {
    let statement = 'date || credit || debit || balance'
    this.statements.slice().reverse().forEach(transaction => {
      statement += `\n${transaction.transacInfo()}`
    });
    return statement;
  }

  deposit(amount, optionalDate) {
    let deposit = new Interaction(amount, optionalDate)
    this.statements.push(deposit)
  }
}
