/*global Transaction, Statement*/
/* exported Account */

"use strict"

class Account {

  constructor() {
    this.transactions = []
  }

  printStatement() {
    return Statement.prototype.print(this.transactions);
  }

  deposit(amount, optionalDate) {
    this.transact(amount, optionalDate)
  }

  withdraw(amount, optionalDate) {
    this.transact(-amount, optionalDate)
  }

  transact(amount, optionalDate) {
    let transaction = new Transaction(amount, optionalDate)
    this.transactions.push(transaction)
  }

}
