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

  describe("#withdraw", () => {
    it("can withdraw money from the account", () => {
      const bankAccount = new BankAccount();
      bankAccount.deposit(50);
      expect(bankAccount.withdraw(50)).toBe(50)
    })
    it("has an opening balance of 0", () => {
      const bankAccount = new BankAccount();
      expect(() => {
        bankAccount.withdraw(1)
      }).toThrow("You tried to withdraw more money than your balance");
    })
  })

})