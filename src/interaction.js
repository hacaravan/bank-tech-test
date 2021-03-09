"use strict"

class Interaction {

  constructor(amount, optionalDate) {
    this.date = dateToString(optionalDate) || this.todayString();
    if(amount < 0) {
      this.debit = - amount
    } else {
      this.credit = amount;
    }
  }

  transacInfo(balance) {
    return `${this.date} || ${this.credit.toFixed(2)} || || ${balance.toFixed(2)}`
  }

  todayString() {
    return dateToString(new Date)
  }
}
