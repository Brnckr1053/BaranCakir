class BankAccount:
    
    all_accounts = []
    
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        print(f"{amount} $ have deposited")
        return self

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        self.balance -= amount
        print(f"{amount} $ have taken")
        return self

    def display_account_info(self):
        print(f"Total money is {self.balance} $")
        return self

    def yield_interest(self):
        self.balance += self.balance * self.int_rate
        return self

    @classmethod
    def all_balances(cls):
        for account in cls.all_accounts:
            print(account.balance, account.int_rate)



first_national_dojo = BankAccount(0.05, 50)
bank_of_dojo = BankAccount(0.03, 450)

first_national_dojo.deposit(100).deposit(100).deposit(100).withdraw(400).yield_interest().display_account_info()

bank_of_dojo.deposit(820).deposit(90).withdraw(100).withdraw(100).withdraw(200).withdraw(20).yield_interest().display_account_info()

BankAccount.all_balances()