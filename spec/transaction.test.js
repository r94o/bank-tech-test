const Transaction = require("../lib/transaction")

describe(Transaction, () => {

  befoeEach(() => {
    this.transaction = new Transaction(1, 123);
  })

  describe("#getDate", () => {
    it("returns the transaction date as a string", () => {
      jest.useFakeTimers()
          .setSystemTime(new Date('2022-03-01'));
  
      expect(this.transaction.getDate()).toBe("01/03/2022")
      jest.useRealTimers();
    })
  })
  
  describe("#getAmount", () => {
    it("returns the transaction amount as a string", () => {
      expect(this.transaction.getAmount()).toBe("123.00")
    })
  })

  describe("#getType", () => {
    it("returns the transaction type as a number", () => {
      expect(this.transaction.getType()).toBe(1)
    })
  })
})