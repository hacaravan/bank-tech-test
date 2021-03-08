"use strict"

describe('Interaction', () => {
  describe('when instantiated with a positive number', () => {
    it('has a credit of that amount', () => {
      let deposit = new Interaction(100)
      expect(deposit.credit).toEqual(100)
    })
    it("has today's date in a human format", () => {
      let today = new Date
      let day = today.getDate()
      let month = today.getMonth() + 1
      let year = today.getFullYear()
      let dd = (day < 10 ? "0" : "") + day
      let mm = (month < 10 ? "0" : "") + month
      let yyyy = String(year)
      let todayString = `${dd}/${mm}/${yyyy}`
      let deposit = new Interaction(100)
      expect(deposit.date).toEqual(todayString)
    })
  })
})
