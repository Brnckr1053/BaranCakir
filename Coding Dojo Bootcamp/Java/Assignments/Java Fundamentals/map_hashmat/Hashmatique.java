import java.util.HashMap;
import java.util.Set;

public class Hashmatique{
    public void trackList(){
        // Create a trackList of type HashMap
        HashMap<String, String> songs = new HashMap<>();
        // Add in at least 4 songs that are stored by title
        songs.put("Korkma!", "Sönmez bu şafaklarda tüten en son Ocak");
        songs.put("Lagacy", "This is my lagacy, lagaacy, eeeh, eeehh");
        songs.put("Yalan Dünya", "Ah Yalan Dünya, yalandan dünya..");
        songs.put("Old Town Road","Take my horse to the old town road, I am gonna ride till a...");
        // Pull out one of the songs by its track title
        System.out.println("The lyrics to Korkma! include: "+songs.get("Korkma!"));
        // Print out all the track names and lyrics in the format Track: Lyrics
        songs.forEach((k,v) -> System.out.println(k+": "+v));
    }
}