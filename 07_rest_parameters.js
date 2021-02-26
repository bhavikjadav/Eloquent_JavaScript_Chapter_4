function max(...numbers){
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) {
            result = number;
        }
    }
    return result;
}
console.log(max(1, 2, 4, 1, 2));
let numbers = [3, 10, 2];
console.log(max(...numbers));

let words = ["ever", "fully"]
console.log(["will", ...words, "understand"]);