console.log("first program")
console.log("hello")
const num1=8;
const num2=7;
//add two numbers
const sum=num1 +num2;
console.log('the sum of'+num1+ 'and'+num2+ 'is' +sum)
const prompt = require('prompt-sync')();
console.log("starting")
const name = prompt('enter your name: ');
console.log('hello, ${name}');
const number =parseInt(prompt("enter a number: "));
if (number>0){
    console.log("the number is positive");

}
else if(number==0){
    console.log("the number is zero");

}
else{
    console.log("the number is negative");
    
}