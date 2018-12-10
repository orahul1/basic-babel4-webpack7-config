//use varibales
let first = 'rahul';
let last = 'raveendran';
let id = 2;

let name = `Your name is ${first} ${last}.`;
let url = `http://localhost:3000/api/messages/${id}`;

//simple arrow function
let arrowFn = () => {
  console.log('this');
}

//arrow function calling another function
let arrowFnWithAnotherFn = () => arrowFnTest();

//arrow function calling another function with parameter
let arrowFnWithAnotherFnWithParam = param =>  arrowFnTestParam(param);

function arrowFnTest(){
  return   console.log('well done !');
}

function arrowFnTestParam(param){
  if(param == 'dead'){
    console.log('dead');
  }else{
    console.log('not dead');
  }
}

//call back

let add = function(a,b){
  return a+ b;
}

let multiply = function(a,b){
  return a* b;
}

let calc = function(num1, num2, callback){
  return callback(num1, num2);
}

//promise 

//before promise

/* setTimeout(function () {
console.log('this run after 1s');
  setTimeout(function () {
    console.log('this run after 2s');    
  },1000);
},1000); */

//after promise

const wait = () => new Promise((resolve,reject) => {
  setTimeout(resolve, 1000);
})

wait().then(() => {
  console.log('Run after 1s');
  return wait();
})
.then(() => {
  console.log('Run after 2s');
})

arrowFn(); 
arrowFnWithAnotherFn();
arrowFnWithAnotherFnWithParam('dead');
console.log(calc(5,5,multiply));
console.log(name, url);
setTimeout('this');
wait();

