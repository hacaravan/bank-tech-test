/* exported dateToString */

"use strict"

function dateToString(date) {
  if(!date) { return }
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let dd = (day < 10 ? "0" : "") + day
  let mm = (month < 10 ? "0" : "") + month
  let yyyy = String(year)
  return `${dd}/${mm}/${yyyy}`
}
