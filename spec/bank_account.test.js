const BankAccount = require('../lib/bank_account');
const Statement = require('../lib/statement');

jest.mock('../lib/statement');

describe(BankAccount, () => {
  beforeEach(() => {
    this.bankAccount = new BankAccount();
  });

  describe('#deposit', () => {
    it('does not raise an error when depositing', () => {
      expect(() => {
        this.bankAccount.deposit(50);
      }).not.toThrow();
    });
  });

  describe('#withdraw', () => {
    it('can withdraw money from the account', () => {
      this.bankAccount.deposit(50);
      expect(this.bankAccount.withdraw(50)).toBe(50);
    });
    it('has an opening balance of 0', () => {
      expect(() => {
        this.bankAccount.withdraw(1);
      }).toThrow('You tried to withdraw more money than your balance');
    });
    it('withdrawing money deducts from the bank balance', () => {
      this.bankAccount.deposit(50);
      this.bankAccount.deposit(60);
      this.bankAccount.withdraw(110);
      expect(() => {
        this.bankAccount.withdraw(1);
      }).toThrow('You tried to withdraw more money than your balance');
    });
  });

  describe('#generateStatement', () => {
    it('calls the statement instance methods', () => {
      this.bankAccount.deposit(50);
      this.bankAccount.deposit(60);
      this.bankAccount.withdraw(110);

      this.bankAccount.generateStatement();
      const writeLineSpy = jest.spyOn(Statement.mock.instances[0], 'writeLine');
      const printSpy = jest.spyOn(Statement.mock.instances[0], 'print');

      expect(writeLineSpy).toHaveBeenCalledTimes(3);
      expect(printSpy).toHaveBeenCalledTimes(1);
    });
  });
});
