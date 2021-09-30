class BankAccount:
    
    
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        

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



class user:

    def __init__(self, name, email):
        self.account = {}
        self.name = name
        self.email = email

    def display_user_balance(self):
        for i, j in self.account.items():
            print(f"{i}: {j.display_account_info()}")
        return self

    def make_withdrawal(self, bank_name, amount):
        self.account[bank_name].withdraw(amount)
        print(f"{amount} $ have taken by {self.name}")
        
        return self

    def make_deposit(self, bank_name, amount):
        self.account[bank_name].deposit(amount)
        print(f"{amount} $ have deposited by {self.name}")
        
        return self

    def transfer_money(self, amount):
        print(f" Transferred {amount} $ from {self.name} to {user.name}")
        self.make_withdrawal(amount)
        user.make_deposit(amount)
        return self

    def have_an_account(self, bank_name):
        self.account[bank_name] = BankAccount(int_rate=0.10, balance=10)
        return self


pistachio = user("Pistachio", "pistachio@cat.com")
pistachio.have_an_account("First National Dojo")
pistachio.make_deposit("First National Dojo", 750)
pistachio.make_withdrawal("First National Dojo", 350)
pistachio.have_an_account("Bank of Dojo")
pistachio.make_withdrawal("Bank of Dojo", 100)
pistachio.make_deposit("Bank of Dojo", 1000)
pistachio.display_user_balance()