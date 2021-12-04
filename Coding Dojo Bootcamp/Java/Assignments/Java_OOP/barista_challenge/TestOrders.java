import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {
    
        
        Item item1 = new Item(" Cappucino", 3.50);
        Item item2 = new Item(" Mocha", 2.50);
        Item item3 = new Item(" Latte", 7.50);
        Item item4 = new Item(" Drip Coffee", 1.50);
    
        Order order1 = new Order();
        Order order2 = new Order();

        Order order3 = new Order(" Pikachu ");
        Order order4 = new Order(" Balbazar ");
        Order order5 = new Order(" Charmender ");
        
        order1.addItem(item1);
        order1.addItem(item4);
        order3.addItem(item1);
        order3.addItem(item4);
        order3.addItem(item2);
        
        System.out.println(order1.getStatusMessage());
        
        order1.setReady(true);
        System.out.println(order1.getStatusMessage());
            
        System.out.println(order1.getOrderTotal());


        order3.display();
        

    }
}
