public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready! ";
        String displayTotalMessage = " Your total is $";
        String displayNewTotalMessage = " Your new total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double coffeePrice = 4.5;
        double lattePrice = 5.5;
        double cappuccinoPrice = 6.5;

        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
        System.out.println(generalGreeting + customer2);
        System.out.println(generalGreeting + customer3);
        System.out.println(generalGreeting + customer4);

        System.out.println( customer1 + readyMessage + displayTotalMessage + coffeePrice );

        if(isReadyOrder1) {
            System.out.println(customer2 + pendingMessage);
        }
        else if(isReadyOrder3) {
            System.out.println(customer2 + readyMessage + displayTotalMessage + cappuccinoPrice );
        }
        else {
            System.out.println("Have fun!");
        }


        if(isReadyOrder1) {
            System.out.println(customer3 + pendingMessage);
        }
        else if(isReadyOrder3) {
            System.out.println(customer3 + readyMessage + displayTotalMessage + 2*cappuccinoPrice );
        }
        else {
            System.out.println("Have fun!");
        }


        if(isReadyOrder1) {
            System.out.println(customer4 + pendingMessage);
        }
        else if(isReadyOrder2) {
            System.out.println(customer4 + readyMessage + displayTotalMessage + coffeePrice );
        }
        else {
            System.out.println(customer4 + readyMessage + displayNewTotalMessage + lattePrice);
        }


    	// ** Your customer interaction print statements will go here ** //
    }
}
