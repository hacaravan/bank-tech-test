"use strict"

describe('Interaction', () => {
  describe('when instantiated with a positive number', () => {
    it('has a credit of that amount', () => {
      let deposit = new Interaction(100)
      expect(deposit.credit).toEqual(100)
    })
  })
})
