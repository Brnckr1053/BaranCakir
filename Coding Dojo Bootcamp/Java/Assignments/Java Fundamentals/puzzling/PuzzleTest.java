public class PuzzleTest{
    public static void main(String[] args){
    PuzzleJava testApp = new PuzzleJava();
    
    testApp.getTenRolls();

    testApp.getRandomLetter();

    testApp.generatePassword();

    testApp.getNewPasswordSet();

    String[] testList = {"A", "Bike", "8", "@p23", "Goal."};
    testApp.shuffleArray(testList);

    }
}