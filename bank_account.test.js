const BankAccount = require("./bank_account")

describe("Bank Account", () => {

  describe("#deposit", () => {
    it("does not raise an error when depositing", () => {
      const bankAccount = new BankAccount();
      expect(() => {
        bankAccount.deposit(50)
      }).not.toThrow();
    })
  })
})