const favouriteNumber = 4;

class Rabbit {
    constructor(name, health, hunger) {
        this.name = name;
        this.health = health;
        this.hunger = hunger;
        this.strength = 25;
    }
    increaseHealth() {
        this.health++;
    }
    decreaseHunger(){
        this.hunger--;
    }
    train() {
        this.strength += 5;
    }
}

const freddy = new Rabbit("Freddy", 100, 100)
console.log(freddy.name);
freddy.decreaseHunger()
console.log(freddy.hunger)


module.exports = {
    Rabbit,
    freddy
    // favouriteNumber
}