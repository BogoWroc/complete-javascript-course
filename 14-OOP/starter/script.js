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

const EV = function (name, currentSpeed, charge) {
    Car.call(this, name, currentSpeed);
    this._charge = charge;
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.charge = function (chargeTo) {
    this._charge = chargeTo;
}

EV.prototype.accelerate = function (){
    this.speed +=20;
    this._charge -=1;
    console.log(`${this.name} going at ${this.speed} km/h, with a charge ${this._charge}%`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes',95);
const tesla = new EV('Tesla',120,50);

tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.charge(60)
tesla.accelerate()
tesla.accelerate()
tesla.break()
tesla.break()
tesla.break()


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

