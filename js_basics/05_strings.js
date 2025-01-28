/*backticks we have string interpolation and we have place holder 
to pass the variable */

const name = "dinesh";
const repoCount = 50;
// console.log(name+repoCount+"repos");

//modern
console.log(`username ${name} is having repoCount of ${repoCount} repos`);

//using javascript objects with keyword "new"
const gameName = new String("dinesh");

gameName.toUpperCase;
gameName.indexOf()

gameName.substring();
gameName.slice();
gameName.trim();

const url = new String("https://youtube.com/shorts/niwdf20hb308382")
url.replace('20','--');
console.log(url);
// Strings Are Immutable: Methods like replace(), toUpperCase(), etc., return new strings.

console.log(url.includes('tu')); //return true or false

split();

