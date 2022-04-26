const Transaction = require("../lib/transaction")

describe(Transaction, () => {

  describe("#getDate", () => {
    it("returns the transaction date as a string", () => {
      jest.useFakeTimers()
          .setSystemTime(new Date('2022-03-01'));
  
      const transaction = new Transaction("Debit", 123);
      expect(transaction.getDate()).toBe("01/03/2022")
      jest.useRealTimers();
    })
  })
  
  describe("#getAmount", () => {
    it("returns the transaction amount as a string", () => {
      const transaction = new Transaction("Debit", 123);
      expect(transaction.getAmount()).toEqual("123.00")
    })
  })

  describe("#getType", () => {
    it("returns the transaction type as a string", () => {
      const transaction = new Transaction("Debit", 123);
      expect(transaction.getType()).toEqual("Debit")
    })
  })
})