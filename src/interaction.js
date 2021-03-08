"use strict"

class Interaction {
  constructor(amount) {
    this.credit = amount;
    let today = new Date
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let dd = (day < 10 ? "0" : "") + day
    let mm = (month < 10 ? "0" : "") + month
    let yyyy = String(year)
    let todayString = `${dd}/${mm}/${yyyy}`
    this.date = todayString
  }
}
