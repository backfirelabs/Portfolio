// Events
document.addEventListener('DOMContentLoaded', function() {
    // DOMContentLoaded event listener
    console.log('DOM content loaded');
});

document.getElementById('clickableButton').addEventListener('click', function() {
    // Event listener for button click
    console.log('Congratulations! You clicked the button!');
});

// Classes
class MyClass {
    constructor(param1, param2, param3, param4) {
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        this.param4 = param4;
    }

    myMethod() {
        return this.param1 + ' ' + this.param2 + ' ' + this.param3 + ' ' + this.param4;
    }
}

const myObject = new MyClass('Hello', 'How', 'Are', 'You?');
console.log(myObject.myMethod());

// Objects
const thebestObject = {
    myMethod: function() {
        return 'Method has been called successfully!';
    }
};

console.log(thebestObject.myMethod());
