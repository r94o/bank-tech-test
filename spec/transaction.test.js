const Transaction = require('../lib/transaction');

describe(Transaction, () => {
  beforeEach(() => {
    this.transaction = new Transaction(123);
  });

  describe('#date', () => {
    it('returns the transaction date', () => {
      const mockDate = new Date('2022-03-01');
      jest.useFakeTimers()
        .setSystemTime(new Date('2022-03-01'));
      const transaction = new Transaction(123);
      expect(transaction.date).toEqual(mockDate);
      jest.useRealTimers();
    });
  });

  describe('#amount', () => {
    it('returns the transaction amount', () => {
      expect(this.transaction.amount).toBe(123);
    });
  });

  describe('#isDebit', () => {
    it('returns false when credit', () => {
      expect(this.transaction.isDebit).toBe(false);
    });
  });
});
