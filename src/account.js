"use strict"

class Account {

  constructor() {
    this.statements = []
    this.balance = 0
  }
  printStatement() {
    let statement = 'date || credit || debit || balance'
    this.statements.slice().reverse().forEach(transaction => {
      statement += `\n${transaction.deposit.transacInfo(transaction.balance)}`
    });
    return statement;
  }

  deposit(amount, optionalDate) {
    let deposit = new Interaction(amount, optionalDate)
    this.balance += amount
    this.statements.push({deposit: deposit, balance: this.balance})
  }
}
