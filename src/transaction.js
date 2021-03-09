/*global dateToString*/
/* exported Transaction */

"use strict"

class Transaction {

  constructor(amount, optionalDate) {
    this.date = dateToString(optionalDate) || this.todayString();
    if(amount < 0) {
      this.debit = - amount
    } else {
      this.credit = amount;
    }
  }

  transacInfo() {
    let credit = "", debit = ""
    if (this.credit) {credit = " " + this.credit.toFixed(2)}
    if (this.debit) {debit = " " + this.debit.toFixed(2)}
    return `${this.date} ||${credit} ||${debit} ||`
  }

  todayString() {
    return dateToString(new Date)
  }
}
