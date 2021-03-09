"use strict"

class Account {

  constructor() {
    this.statements = []
    this.balance = 0
  }

  printStatement() {
    let statement = 'date || credit || debit || balance'
    this.statements.slice().reverse().forEach(line => {
      statement += this.format(line)
    });
    return statement;
  }

  deposit(amount, optionalDate) {
    this.transact(amount, optionalDate)
  }

  withdraw(amount, optionalDate) {
    this.transact(-amount, optionalDate)
  }

  transact(amount, optionalDate) {
    let transaction = new Transaction(amount, optionalDate)
    this.balance += amount
    this.statements.push({transaction: transaction, balance: this.balance})
  }

  format(line) {
    return `\n${line.transaction.transacInfo(line.balance)}`
  }
}
