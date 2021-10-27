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

    drinSake(){
        this.health += 10;
        console.log(`Updated health: ${this.health}`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinSake();
