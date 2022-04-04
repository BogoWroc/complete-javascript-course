'use strict';

const Car = function (name, currentSpeed) {
    this.name = name;
    this.speed = currentSpeed;
}

Car.prototype.accelerate = function (){
    this.speed+=10;
    console.log(`${this.name} accelerates ... current speed is ${this.speed}`);
}

Car.prototype.break = function (){
    this.speed -=5;
    console.log(`${this.name} breaks ... current speed is ${this.speed}`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes',95);

bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
bmw.break()
bmw.break()
bmw.break()
bmw.break()
bmw.break()
bmw.break()
bmw.break()
bmw.break()

mercedes.break()
mercedes.break()
mercedes.break()
mercedes.break()
mercedes.break()
mercedes.break()
mercedes.break()
mercedes.accelerate()
mercedes.accelerate()
mercedes.accelerate()
