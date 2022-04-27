const Transaction = require('./transaction');
const Statement = require('./statement');

class BankAccount {
  constructor() {
    this.transactions = [];
  }

  deposit(amount) {
    this.#addTransaction(amount);
  }

  withdraw(amount) {
    if (this.#balance() - amount < 0) throw ('You tried to withdraw more money than your balance');
    this.#addTransaction(amount * -1);
    return amount;
  }

  generateStatement() {
    const statement = new Statement(this.#balance());
    this.transactions.forEach((transaction) => statement.writeLine(transaction));
    statement.print();
  }

  #addTransaction(amount) {
    const transaction = new Transaction(amount);
    this.transactions.unshift(transaction);
  }

  #balance() {
    return this.transactions.reduce((balance, transaction) => balance + transaction.amount, 0);
  }
}

module.exports = BankAccount;
