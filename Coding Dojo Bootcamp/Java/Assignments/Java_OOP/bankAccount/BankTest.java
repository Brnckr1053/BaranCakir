public class BankTest {

	public static void main(String[] args) {

		BankAccount account1 = new BankAccount();
		BankAccount account2 = new BankAccount();
		account1.deposit("checking", 20);
		account1.deposit("savings", 150.55);
		System.out.println(account1.getAccountNumber());
		System.out.println("Checking account: $" + account1.getBalance("checking"));
		System.out.println("Savings account: $" + account1.getBalance("savings"));
		System.out.println(account1.totalBalance);
		System.out.println(account1.accountCreated);
		
		account2.deposit("checking", 60);
		account2.withdraw("savings", 86.27);
		System.out.println(account2.getAccountNumber());
		System.out.println("Checking account: $" + account2.getBalance("checking"));
		System.out.println("Savings account: $" + account2.getBalance("savings"));
		System.out.println(account2.totalBalance);
		System.out.println(account2.accountCreated);
	}

}