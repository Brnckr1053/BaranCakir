package com.codingdojo.zookeeper;

public class Gorilla extends Mammal {
	public void throwSomething() {
		energyLevel -= 5;
		System.out.println("The gorilla has thrown something!");
		displayEnergy();
	}
	public void eatBananas() {
		energyLevel += 10;
		System.out.println("Banana makes happy Gorilla when eaten by Gorilla");
		displayEnergy();
	}
	public void climb() {
		energyLevel -= 10;
		System.out.println("The gorilla climbs a nearby tree, it takes Gorilla's energy");
		displayEnergy();
	}
}
