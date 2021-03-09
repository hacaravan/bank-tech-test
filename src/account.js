"use strict"

class Account {

  constructor() {
    this.statements = []
    this.balance = 0
  }
  printStatement() {
    let statement = 'date || credit || debit || balance'
    this.statements.slice().reverse().forEach(line => {
      statement += `\n${line.transaction.transacInfo(line.balance)}`
    });
    return statement;
  }

  deposit(amount, optionalDate) {
    this.transact(amount, optionalDate)
  }

  withdraw(amount) {
    this.transact(-amount)
  }

  transact(amount, optionalDate) {
    let transaction = new Transaction(amount, optionalDate)
    this.balance += amount
    this.statements.push({transaction: transaction, balance: this.balance})
  }
}
