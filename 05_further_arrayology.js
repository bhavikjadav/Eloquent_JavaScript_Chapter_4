let todoList = [];

function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}

console.log([1, 2, 3, 4, 1].indexOf(1));
console.log([1, 2, 3, 2, 1].lastIndexOf(1));

console.log([0, 1, 2, 3, 4].slice(2));
console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].slice(2, 5));

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e", "f"], 2));
