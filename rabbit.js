const favouriteNumber = 4;


class Rabbit {
    constructor(name, health, hunger, message) {
        this.name = name;
        this.health = health;
        this.hunger = hunger;
        this.strength = 25;
        this.message = "name added to Rabbit";
        this.rabbitFood = ["carrot", "lettuce", "broccoli"]
        
   
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
    addFood() {
        let newFood = "celery"
        this.rabbitFood.push(newFood);
     
    }

}

const freddy = new Rabbit("Freddy", 100, 100)
console.log(freddy.name);
freddy.decreaseHunger();

freddy.addFood();
console.log(freddy.rabbitFood)
console.log(freddy.message)
console.log(freddy.hunger)



module.exports = {
    Rabbit,
    freddy
    // favouriteNumber
}