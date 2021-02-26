/*
Important arrays operations:
push()
pop()
shift()
unshift()
padStart(number_of_digit, "followed_by_number or pattern like *, 0, +, - etc.")
trim() // removes extra spaces from the words.
split() // Covert whole sentence into separate list / arrays.
join() // It will joins words of list in a one string.
.length // To count the length of the string.
"string".repeat(3) // it will repeat string 3 timres.
*/


let kim = "kim";
kim.age = 88;
console.log(kim.age);

console.log("bhavik jadav".slice(4, 7));
console.log("python machine learning".indexOf("m"));

console.log("   bhavik  \n".trim());

console.log(String(6).padStart(3, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" "); // Convert sentence into list/array.
console.log(words);
console.log(words.join(". ")); // Join words's list with . character.

console.log("Bhavik ".repeat(5));

let string = "abc";
console.log(string.length);
console.log(string[1] + "havik");