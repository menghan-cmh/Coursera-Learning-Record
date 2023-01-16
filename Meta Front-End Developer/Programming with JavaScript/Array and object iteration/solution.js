// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (prop of dairy) {
        console.log(prop);
    }
}
logDairy();

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}

birdCan();

// Task 3
// console.log(bird);
function animalCan() {
    birdCan();
    for (prop in animal) {
        console.log(`${prop}: ${animal[prop]}`);
    }
}

animalCan();