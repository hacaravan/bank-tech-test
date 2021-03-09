"use strict"

class Interaction {

  constructor(amount) {
    if(amount < 0) {
      this.debit = - amount
    } else { this.credit = amount; }
    this.date = this.todayString();
  }

  transacInfo() {
    return `${this.date} || ${this.credit.toFixed(2)} || || ${this.credit.toFixed(2)}`
  }

  todayString() {
    return dateToString(new Date)
  }
}
