interface Person {
  name: string;
  age: number;
  greet: () => void;
}

const user: Person = {
  name: 'Alice',
  age: 30,
  greet() {
    console.log('Hello, my name is ' + this.name);
  }
};


user.greet(); // "Hello, my name is Alice"


interface Product {
  id: string;
  price: number;
  description?: string; // 선택적 속성
}

function getProductDetails(product: Product): void {
  console.log(`Product ID: ${product.id}`);
  console.log(`Price: ${product.price}`);
  if (product.description) {
    console.log(`Description: ${product.description}`);
  }
}

const product: Product = {
  id: '12345',
  price: 2000,
  description: 'very sweet'
};

getProductDetails(product);


interface Animal {
  name: string;
  sound: () => void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name} says Woof!`);
  }
}

const myDog = new Dog('Buddy');
myDog.sound(); // "Buddy says Woof!"


interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const square: Square = {
  color: 'blue',
  sideLength: 10,
};

console.log(square); // { color: 'blue', sideLength: 10 }


