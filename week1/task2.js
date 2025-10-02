const prompt = require('prompt-sync')();
const num1  = parseInt(prompt("enter num 1"))
const num2  = parseInt(prompt("enter num 2"))
const method =prompt("enter your method :")

switch(method) {
    case '+':console.log(`the sum of ${num1} and $(num2) is $(num1 + num2)`);break;
    case '-':console.log(`the difference of ${num1} and ${num2} is ${num1 - num2}`);break;
    case '*':console.log(`the multiplication of $(num1) and  ${num2} is ${num1 *num2}`);break;
    case '/':console.log(`the division ${num1}and ${num2} is ${num1 + num2}`);break;
    default: console.log(`please enter method *,+,-,/`);
}