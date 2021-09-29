class user:

    def __init__(self, name, email):
        self.account_balance = 0
        self.name = name
        self.email = email

    def display_user_balance(self):
        print(f"Total money is {self.account_balance} $ in {self.name}'s acoount")
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        print(f"{amount} $ have taken by {self.name}")
        self.display_user_balance()
        return self

    def make_deposit(self, amount):
        self.account_balance += amount
        print(f"{amount} $ have deposited by {self.name}")
        self.display_user_balance()
        return self

    def transfer_money(self, user, amount):
        print(f" Transferred {amount} $ from {self.name} to {user.name}")
        self.make_withdrawal(amount)
        user.make_deposit(amount)
        return self

guido = user("Guido van Rossum", "guido@abc.com") 
baran = user("Baran Cakir", "baran10cakir53@gmail.com") 
pistachio = user("Pistachio", "pistachio@cat.com")


print(baran.name)

print(" ")
guido.make_deposit(250)

print(" ")
pistachio.make_deposit(1500)
pistachio.make_withdrawal(500)

print(" ")
pistachio.display_user_balance


print(" ")
pistachio.transfer_money(baran, 250)

print(" ")
guido.make_deposit(100).make_deposit(200).make_deposit(300).make_withdrawal(50).display_user_balance()


