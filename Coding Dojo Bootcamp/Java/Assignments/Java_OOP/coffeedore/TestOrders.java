import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {

        CoffeeKiosk coffeeKiosk = new CoffeeKiosk();
    
        coffeeKiosk.addMenuItem("Banana", 2.00);
        coffeeKiosk.addMenuItem("Coffee", 1.50);
        coffeeKiosk.addMenuItem("Latte", 4.5);
        coffeeKiosk.addMenuItem("Cappucino", 3.0);
        coffeeKiosk.addMenuItem("Muffin", 4.0);
        
        
    
        coffeeKiosk.addMenuItemByInput();
        coffeeKiosk.newOrder();
    }
}