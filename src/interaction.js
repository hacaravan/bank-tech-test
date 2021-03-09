"use strict"

class Interaction {

  constructor(amount, optionalDate) {
    this.date = this.todayString();
    if(amount < 0) {
      this.debit = - amount
    } else {
      this.credit = amount;
      this.date = dateToString(optionalDate) || this.date
    }
  }

  transacInfo() {
    return `${this.date} || ${this.credit.toFixed(2)} || || ${this.credit.toFixed(2)}`
  }

  todayString() {
    return dateToString(new Date)
  }
}
