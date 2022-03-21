'use strict';

function test() {
  const john = {
    name: 'Bob',
    sayHello: () => console.log(this.name),
  };
  john.sayHello();
}

const john = {
  name: 'Bob',
  sayHello: () => {
    console.log(this);
  },
};
john.sayHello();
