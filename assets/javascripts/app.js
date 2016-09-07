// var name = prompt('Welcome to our website! What is your name?');

// var result = confirm('Is ' + name + ' really your name?');

// console.log(name);
// console.log(result);

// function sayHello() {
//   alert('Hello World');
// }

// function headerHello() {
//   alert('Entered The Header!');
// }

// function headerExit() {
//   alert('left the main header');
// }

// var button = document.getElementById('hello');
// console.log(button);

// var mainHeader = document.getElementById('main_header');
// console.log(mainHeader.innerText);

// var headerInput = document.getElementById('header_input');
// console.log(headerInput);

// headerInput.addEventListener('keyup', function(event) {
//   console.log(event);
//   if(event.keyCode === 27) {
//     headerInput.value = '';
//     mainHeader.innerText = 'Hello World';
//   } else {
//     mainHeader.innerText = headerInput.value;
//   }
// });

// button.addEventListener('click', function() {
//   // alert('Hello World!');
//   mainHeader.innerText = 'Button Clicked!';
// });


// Calculator Code
// Returns array of elements that match that class
var calcButtons = document.getElementsByClassName('calc_button');
console.log(calcButtons);

// Add Click Event Listeners To Each Button
var result;
var firstNumber;
var lastNumber;
var operator;
var calls = [];
calls[0] = function(element) { 
  firstNumber = event.target.innerText; 
  console.log(firstNumber);
  calculation.innerText = firstNumber;
};
calls[1] = function(element) { 
  operator = event.target.innerText;
  console.log(operator);
  calculation.innerText = firstNumber + " " + operator;
};
calls[2] = function(element) { 
  lastNumber = event.target.innerText; 
  console.log(lastNumber);
  calculation.innerText = firstNumber + " " + operator + " " + lastNumber;
};

for(var i = 0; i < calcButtons.length; i++) {
  var button = calcButtons[i];
  button.addEventListener('click', calls[i], false);

    // Only allow the user to click on a number first
    // then make the click on a operator
    // only allow the user to click on a number
    // either auto calculate or only allow the = sign to be pressed
};












