class Transaction {
  constructor(amount) {
    this._date = new Date();
    this._isDebit = amount < 0;
    this._amount = amount;
  }

  get date() {
    return this._date;
  }

  get amount() {
    return this._amount;
  }

  get isDebit() {
    return this._isDebit;
  }
}

module.exports = Transaction;
