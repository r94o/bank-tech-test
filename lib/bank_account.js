class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.#isInOverdraft(amount)) throw("You tried to withdraw more money than your balance");
    this.balance -= amount;
    return amount;
  }

  #isInOverdraft(amount) {
    return (this.balance - amount) < 0;
  }

}

module.exports = BankAccount;