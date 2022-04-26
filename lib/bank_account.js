const Transaction = require("./transaction");
const CREDIT = 1
const DEBIT = -1

class BankAccount {
  constructor() {
    this.transactions = []
  }

  deposit(amount) {
    this.transactions.push(new Transaction(CREDIT, amount));
  }

  withdraw(amount) {
    if (this.#isInOverdraft(amount)) throw("You tried to withdraw more money than your balance");
    this.transactions.push(new Transaction(DEBIT, amount));
    return amount;
  }

  #isInOverdraft(amount) {
    return (this.#currentBalance() - amount) < 0;
  }

  #currentBalance() {
    return this.transactions.reduce((balance, transaction) => {
      return balance + (transaction.getType() * transaction.getAmount())
    }, 0)
  }
}

module.exports = BankAccount;