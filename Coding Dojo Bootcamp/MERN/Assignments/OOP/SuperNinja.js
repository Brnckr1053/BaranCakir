class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }


    sayName(){
        console.log(`Ninja is ${this.name}`);
        return this
    }

    showStats(){
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this
    }

    drinkSake(){
        this.health += 10;
        console.log(`Updated health: ${this.health}`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
    super(name,health, speed, strength, wisdom)
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    showStats(){
        super.showStats();
        
    }
}




// example output
const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"



