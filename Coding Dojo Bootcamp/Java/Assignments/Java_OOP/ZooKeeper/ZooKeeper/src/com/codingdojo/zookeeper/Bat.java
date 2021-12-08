package com.codingdojo.zookeeper;

public class Bat extends Mammal {
	public Bat() {
		this.energyLevel = 300;
		}
		
		public void fly() {
			energyLevel -= 50;
			System.out.println("Fly!");
			displayEnergy();
		}
		public void eatHumans() {
			energyLevel += 25;
			System.out.println("Well. Nevermind!");
			displayEnergy();
		}
		public void attackTown() {
			energyLevel -= 100;
			System.out.println("General! You are under attack!");
			displayEnergy();
		}
}
