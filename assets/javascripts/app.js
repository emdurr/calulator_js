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
var clearButton = document.getElementsByClassName('clear_button');
// Add Click Event Listeners To Each Button
var result;
var firstNumber;
var lastNumber;
var operator;
var calculations = document.getElementById('calculations');


for(var i = 0; i < calcButtons.length; i++) {
  var button = calcButtons[i];
  button.addEventListener('click', function(event) {
    if(firstNumber === undefined) {
      if(event.target.classList.contains('num_button')) {
        firstNumber = parseInt(event.target.innerText);
        alert('You have chosen ' + firstNumber);
      } else {
        alert('You need to chose a valid integer.');
        }
    } else if(operator === undefined) {
      if(event.target.classList.contains('op_button')) {
        operator = (event.target.innerText);
        alert('You have chosen to use ' + operator);
      } else {
        alert('You need to choose a valid operator');
      }
      } else if(lastNumber === undefined) {
        if(event.target.classList.contains('num_button')) {
          lastNumber = parseInt(event.target.innerText);
          alert('You have chosen to evaluate ' + firstNumber + operator + lastNumber);
        } else {
          alert('You need to chose a valid integer.')
        }
    } else if(result === undefined) {
      if(event.target.classList.contains('result_button')) {
        switch(operator) {
          case '+':
            result = (firstNumber + lastNumber);
            alert('The result of your query is ' + result);
          break;
          case '-':
            result = (firstNumber - lastNumber);
            alert('The result of your query is ' + result);
          break;
          case '*':
            result = (firstNumber * lastNumber);
            alert('The result of your query is ' + result);
          break;
          case '/':
            result = (firstNumber / lastNumber);
            alert('The result of your query is ' + result);
          break;
        }
      } else {
        alert('You must press = to evaluate your query.');
      }
    }

  });


    // Only allow the user to click on a number first
    // then make the click on a operator
    // only allow the user to click on a number
    // either auto calculate or only allow the = sign to be pressed
};

for(var i = 0; i < clearButton.length; i++) {
    var button = clearButton[i];
    button.addEventListener('click', function(event) {
      firstNumber = undefined;
      operator = undefined;
      lastNumber = undefined;
      result = undefined;
  });
};












