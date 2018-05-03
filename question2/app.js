// This is our base class
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}


// Here is a area method which calculates area of the rectangle.
Rectangle.prototype.area = function() {
    return this.width * this.height;
};

// Creating a new instance to access the Class.
var rect = new Rectangle(2, 4);


// Then call every property of the class.
console.log(rect.width);
console.log(rect.height);
console.log(rect.area());


// Then create a new class which is Square.
function Square(length) {
    this.width = this.height = length;
}

// Extends it from Rectangle Class.
Square.prototype = Object.create(Rectangle.prototype);

// Then create an instance to access Square subclass and sure Rectangle class.
var square = new Square(8);
console.log(square.area());



// Check the instanceof both instances to same Base Class. If it is true, that's okay.
console.log(square instanceof Rectangle);

console.log(rect instanceof Rectangle);