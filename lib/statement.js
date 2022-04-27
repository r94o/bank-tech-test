class Statement {
  constructor(balance) {
    this.statement = 'date||credit||debit||balance';
    this.balance = balance;
  }

  writeLine(transaction) {
    const formattedDate = transaction.date.toLocaleDateString('en-GB');
    const formattedAmount = transaction.amount.toFixed(2).replace('-', '');
    const formattedBalance = this.balance.toFixed(2);

    if (transaction.isDebit) {
      this.statement += `\n${formattedDate}||||${formattedAmount}||${formattedBalance}`;
    } else {
      this.statement += `\n${formattedDate}||${formattedAmount}||||${formattedBalance}`;
    }
    this.balance -= transaction.amount;
  }

  print() {
    console.log(this.statement);
  }
}

module.exports = Statement;
