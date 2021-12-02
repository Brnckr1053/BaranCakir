import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return "Hello, " + name + " Lovely to see you.";
    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        Date date = new Date();
        return "Current date is: " + date;
    }
    
    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE
        // int name = conversation.indexOf();
        int isAlexisExist = conversation.indexOf("Alexis");
        int isAlfredExist = conversation.indexOf("Alfred");
        if(isAlexisExist >= 0) {
            return  "Right away, sir. She certainly isn't sophisticated enough for that.";
        }else if (isAlfredExist >= 0) {
            return "At your service. As you wish, naturally.";
        }else {
            return "Right. And with that I shall retire." ;
        }
    }


    
	// NINJA BONUS
	// See the specs to overload the guessGreeting method

    public String guestGreetings(String name)  {

        Calendar c = Calendar.getInstance();
        int hours = c.get(Calendar.HOUR_OF_DAY);
        System.out.println(hours);
        if(hours >= 1 && hours < 12){
            return "MORNING " + name + " Lovely to see you.";
        }else if(hours >= 12 && hours < 16){
            return "AFTERNOON " + name + " Lovely to see you.";
        }else if(hours >= 16 && hours < 21){
            return "EVENING " + name + " Lovely to see you.";
        }else if(hours >= 21 && hours <= 24){
            return "NIGHT " + name + " Lovely to see you.";
        }
        return null;
    }


    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}



