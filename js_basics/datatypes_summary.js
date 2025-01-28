//primitive datatypes call by value.
// string,number,BigInt, boolean, null,undefined, symbol(to make a value unique)

//non-primtive datatypes ->refernce type
// arrays, objects, functions,

// diff by call by value and call by ref

// in call by value , actually we send a copy of the value, so 
// if we change it inside a function its values doesnt get change.

let studentName= "caki";
let functionName = function changeName(Name){
    Name="ritwik"
}
functionName(studentName);
console.log(studentName);
//call by value all primitve datatypes.stored in stack memory

let myObject1={name:"dinesh"};
let myObject2 = myObject1;
myObject2.name="ritesh"
console.log(myObject1.name);
//call by refernce all non primitive datatypes.
// //stored in heap memory , myObject will get a refernce to the
// address where object is stored

let BigInt = 78378368778343767n;
console.log(typeof BigInt);
// console.log(typeof functionName); ->object function

// typeof null -> object 
// typeof all non primitive datatypes are ->object;