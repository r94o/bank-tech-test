[![codecov](https://codecov.io/gh/r94o/bank-tech-test/branch/main/graph/badge.svg?token=2JQO3053GK)](https://codecov.io/gh/r94o/bank-tech-test)

## **Bank Tech Test**

**How to install**

    npm install

**How to run/use in the terminal**

    node
    const BankAccount = require('./lib/bank_account')
    const account = new BankAccount();
    
    Available Methods:
    
    account.deposit(<number>)
    account.withdraw(<number>)
    account.generateStatement()
    
**How to test**

    jest

**Screenshot**

![Screenshot](/images/screenshot.png)


**User Stories**

  
    As a customer,
    So I can store my money elsewhere
    I would like to deposit into my bank account
    
    As a customer,
    So I can use my money
    I would like to withdraw from my bank account
    
    As a customer,
    So I can keep track of how much money I have
    I would like to see a bank statement of my transactions


