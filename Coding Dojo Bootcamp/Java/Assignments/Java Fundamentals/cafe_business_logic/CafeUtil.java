import java.util.ArrayList;

public class CafeUtil{


    public int getStreakGoal(int numWeeks) {

        int sum = 0;
        for (int i = 0; i < numWeeks; i++){
            sum += i;
        }
        return sum;
    }


    public double getOrderTotal(double[]prices){
        double total = 0;
        // for (int i=0; i<4; i++){
        //     total+=prices[i];
        // }
        total = prices[0] + prices[1] + prices[2] + prices[3] ;
        return total;
    }


    public void displayMenu(ArrayList<String>menuItems) {
        // String menuItem1 = menuItems.get(0); // to access an element in an ArrayList using an index
        // String menuItem2 = menuItems.get(1);
        // String menuItem3 = menuItems.get(2);
        // String menuItem4 = menuItems.get(3);
        // System.out.println(menuItem1 + menuItem2 + menuItem3 + menuItem4);
        
        for(int i=0;i<4;i++){
            System.out.println(menuItems.get(i));
        }
    }


    public void addCustomer(ArrayList<String>name){
        System.out.println("Please enter your name: ");
        String userName = System.console().readLine();
        System.out.println("Hello, "+ userName+"!");
        System.out.println("There are "+ name.size() +" people in front of you");
        name.add(userName);
        System.out.println(name);
    }
}