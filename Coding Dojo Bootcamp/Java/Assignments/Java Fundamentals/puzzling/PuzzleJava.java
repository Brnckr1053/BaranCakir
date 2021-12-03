import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;


public class PuzzleJava {
    public void getTenRolls() {
        ArrayList<Integer> ranNumbs = new ArrayList<Integer>();
        for(int i = 0; i < 10; i++){
            int num = ThreadLocalRandom.current().nextInt(1, 20);
            ranNumbs.add(num);
        }
        System.out.println(ranNumbs);
    }

    public void getRandomLetter(){
        Random rand = new Random();
        StringBuilder randLet = new StringBuilder();
        String alphabets = "abcdefghijklmnopqrstuvwxyz";
        for(int i = 0; i < 25; i++){
            randLet.append(alphabets.charAt(rand.nextInt(alphabets.length())));
        }
        String letter = randLet.toString();
        System.out.println(letter);
    }


    public void generatePassword(){
        Random rand = new Random();
        StringBuilder randLet = new StringBuilder();
        String alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890./@:,;=_-";
        for(int i = 0; i < 8; i++){
            randLet.append(alphabets.charAt(rand.nextInt(alphabets.length())));
        }
        String letter = randLet.toString();
        System.out.println(letter);
    }


    public void getNewPasswordSet(){
        Random rand = new Random();
        StringBuilder randLet = new StringBuilder();
        ArrayList<String> pswrdList = new ArrayList<String>();
        String alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890./@:,;=_-";
        for(int i = 0; i < 8; i++){
            for(int j = 0; j < 8; j++){
                randLet.append(alphabets.charAt(rand.nextInt(alphabets.length())));
            }
            String letter = randLet.toString();
            pswrdList.add(letter);
            randLet.setLength(0);
        }
        System.out.println(pswrdList);
    }


    public void shuffleArray(String[] arr){
        ArrayList<String> newList = new ArrayList<String>();
        for(int i = 0; i < arr.length; i++){
            newList.add(arr[i]);
        }
        Collections.shuffle(newList);
        System.out.println(newList);
    }

}