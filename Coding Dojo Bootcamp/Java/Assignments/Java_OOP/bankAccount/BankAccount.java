import java.util.Random;
import java.util.ArrayList;

public class BankAccount {

    private String accountNumber;
	private double checkingBalance = 0;
	private double savingsBalance = 0;

    public static int accountCreated = 0;
	public static double totalBalance = 0;

    public BankAccount() {
		this.accountNumber = createAccountNumber();
        accountCreated++;
    }

    public String createAccountNumber() {
		String accountNumber = "";
		for(int i=0; i<10; i++) {
			int random = (int) (Math.random()*10);
			accountNumber += random;
		}
		return accountNumber;
	}

    public double getBalance(String accountType) {
		if (accountType == "checking") {
			return this.getCheckingBalance();
		}
		else if (accountType == "savings") {
			return this.getSavingsBalance();
		}
		else return 0;
	}

    public BankAccount deposit(String accountType, double amount) {
		if (accountType == "checking") {
			this.checkingBalance += amount;
		}
		else if (accountType == "savings") {
			this.savingsBalance += amount;
		}
		else return this;
		totalBalance += amount;
		return this;
	}

    public BankAccount withdraw(String accountType, double amount) {
		if (accountType == "checking") {
			if (this.checkingBalance < amount) {
				System.out.println("You do not have enough funds.");
				return this;
			}
			else {
				this.checkingBalance -= amount;
			}
		}
		else if (accountType == "savings") {
			if (this.savingsBalance < amount) {
				System.out.println("You do not have enough funds.");
				return this;
			}
			else {
				this.savingsBalance -= amount;

			}
		}
		else return this;
		totalBalance -= amount;
		return this;
	}

    public double totalAmount() {
		return totalBalance;
	}

    public String getAccountNumber() {
		return accountNumber;
	}
	private void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public double getCheckingBalance() {
		return checkingBalance;
	}
	private void setCheckingBalance(double checkingBalance) {
		this.checkingBalance = checkingBalance;
	}
	public double getSavingsBalance() {
		return savingsBalance;
	}
	private void setSavingsBalance(double savingsBalance) {
		this.savingsBalance = savingsBalance;
	}
}