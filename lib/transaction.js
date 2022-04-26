class Transaction {
  constructor(type, amount) {
    this.date = new Date();
    this.type = type;
    this.amount = amount;
  }

  getDate() {
    return this.date.toLocaleDateString('en-GB');
  }

  getAmount() {
    return this.amount.toFixed(2);
  }

  getType() {
    return this.type;
  }
}

module.exports = Transaction;
