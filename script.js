let name ="Nancy";
const age=19;
var isStudent =true;
let city;
let empty = null;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof empty);

//  greeting  by conditionals
let yourName = prompt("Enter your name:");
let yourAge =(prompt("Enter your age:"));
if(yourAge < 18){
    alert(`Hey ${yourName}, you're a teen!`);
}else if (yourAge>= 18 && yourAge <= 60){
    alert(`welcome ${yourName},you're an adult!`);
}else{
    alert(`Hello ${yourName},you are a senior citizen!`);
}

// for loop 1 to 10;
for(let i=1; i<=10; i++){
    console.log("For:",i);
}

//while loop  2 to 20;
let j= 2;
while(j<= 20) {
    console.log("While:",j);
    j++;
} 

// do-while loop 10 to 1;
let k= 10;
do{
    console.log("Do while:",k);
    k--;
}while (k>=1)


    // function to add;
function add (a,b){
    return a+b;
}
console.log("Sum:",add(12,8));

// Function expression to square a number;
const square = function (n){
    return n*n
};
console.log("Square:",square(4));

// Arrow function to greet;
const greet =(name) =>{
    return `Hello, ${name}!`;
};
console.log(greet("Arun"));


// Callback function to double number;
function processNumber (num,callback){
    callback(num);
}
processNumber(5,function(n){
    console.log("Double:",n*2);
});


// bonus calculator ;
let num1= parseFloat(prompt("Enter first number:"));
let num2=parseFloat(prompt("Enter second number:"));
let operator= prompt("Enter operation (+,-,*,/:");

let result;
switch(operator){
    case "+":
        result =num1+num2;
        break;
        case "-":
         result =num1-num2;
         break;
         case "*":
         result =num1*num2;
         break;
         case "/":
         result =num1/num2;
         break;
         default:
            alert("Invalid operation");
            break;   
}
alert(`Result: ${result}`);


// Hoisting demo
console.log(a);
var a=10;
try {
    console.log(b);
    let b= 20;
} catch (e){
    console.log("Error with let hoisting:", e.message);
}

