var user = {
    name: 'Alice',
    age: 30,
    greet: function () {
        console.log('Hello, my name is ' + this.name);
    }
};
user.greet(); // "Hello, my name is Alice"
function getProductDetails(product) {
    console.log("Product ID: ".concat(product.id));
    console.log("Price: ".concat(product.price));
    if (product.description) {
        console.log("Description: ".concat(product.description));
    }
}
var product = {
    id: '12345',
    price: 2000,
    description: 'very sweet'
};
getProductDetails(product);
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, " says Woof!"));
    };
    return Dog;
}());
var myDog = new Dog('Buddy');
myDog.sound(); // "Buddy says Woof!"
var square = {
    color: 'blue',
    sideLength: 10,
};
console.log(square); // { color: 'blue', sideLength: 10 }
