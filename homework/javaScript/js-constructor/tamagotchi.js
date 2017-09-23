console.log('tamagotchi file is loaded');


//your class declaration here
class Tamagotchi {
    constructor(name, creature) {
        this.name = name;
        this.creatureType = creature;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry() {
        this.foodInTummy--;
        console.log(`${this.name} says WAHH!!!`);
    }
    puke() {
        this.foodInTummy--;
        console.log(`Food left: ${this.foodInTummy}  WAHH!!!`);
    }
    yawn() {
        this.restedness--;
        console.log(`${this.name} has current restedness of: ${this.restedness}`);
    }

    start() {
        let self = this;
        this.hungerTimer = setInterval(() => { self.cry() }, 6000);
        this.yawnTimer = setInterval(() => { self.yawn() }, 10000);
        this.sickTimer = setInterval(() => { self.puke() }, 20000);
    }
    stop() {
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);
    }
}

//create new Tamagotchis
const tammy = new Tamagotchi("tammy", "Dragon");
const tommy = new Tamagotchi("tommy", "cat");

//test out your Tamagotchies below via console.logs

// tammy.cry();
// tammy.puke();
// tammy.yawn();
// tommy.cry();
// tommy.puke();
// tommy.yawn();