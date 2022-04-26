class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance - amount < 0) throw ("You tried to withdraw more money than your balance");
    return amount;
  }

}

module.exports = BankAccount;