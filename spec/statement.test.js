const Statement = require('../lib/statement');

describe(Statement, () => {
  beforeEach(() => {
    const balance = 2500;
    this.statement = new Statement(balance);
    this.transaction1 = { date: new Date('2023-01-14'), isDebit: false, amount: 500 };
    this.transaction2 = { date: new Date('2023-01-10'), isDebit: true, amount: 40 };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#writeLine', () => {
    it('Writes a single debit to the statement', () => {
      const consoleLogSpy = jest.spyOn(console, 'log');

      this.statement.writeLine(this.transaction1);
      this.statement.print();

      expect(consoleLogSpy).toHaveBeenCalledWith(
        'date||credit||debit||balance\n14/01/2023||500.00||||2500.00',
      );
    });
    it('Writes a single credit to the statement', () => {
      const consoleLogSpy = jest.spyOn(console, 'log');

      this.statement.writeLine(this.transaction2);
      this.statement.print();

      expect(consoleLogSpy).toHaveBeenCalledWith(
        'date||credit||debit||balance\n10/01/2023||||40.00||2500.00',
      );
    });
    it('Writes a debit and a credit to the statement', () => {
      const consoleLogSpy = jest.spyOn(console, 'log');

      this.statement.writeLine(this.transaction1);
      this.statement.writeLine(this.transaction2);
      this.statement.print();

      expect(consoleLogSpy).toHaveBeenCalledWith(
        'date||credit||debit||balance\n14/01/2023||500.00||||2500.00\n10/01/2023||||40.00||2000.00',
      );
    });
  });
});
