"use strict"
/*
any to Number ; any to String ; any to boolean, 
*/

let age = true;
let ageInNumber = Number(age);
// console.table([typeof ageInNumber, ageInNumber]);

//null->0; 33aab->NAN ; 33-> 33; undefined->nan; true->1 ; false->0

let name = undefined;
let intName = String(name);
// console.table([typeof intName, intName])
//dinesh->dinesh ; null->'null'; undefined->undefined

let isLoggedIn = "121212qqq";
let booleanIsLoggendIn = Boolean(isLoggedIn);
console.log(booleanIsLoggendIn);
//1->true ; 0->false ; " "->false ; 121212qqq" ->true 

