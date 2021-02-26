// Back to the weresquirrel.

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false; // Initialising that he was not been a wolf at day 1.
console.log(day1.wolf);

let descriptions = {
    work: "Went to work",
    "touched a tree": "Touched a tree"
};

let anObject = {
    left: 1,
    right: 2
};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);
console.log(Object.keys({x: 0, y: 1, z: 2}));

let objectA = {a:1, b: 2};
Object.assign(objectA, {b:3, c:4});
console.log(objectA);


/*

let create_an_object = {
    a: 10,
    b: 20
};

create_an_object.c = 30; // adds new property of an object.

Object methods:
Object.keys(pass an object);
Object.assign(pass an object, {new vales});
Object.values(pass an object);
*/

let journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "potty"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "penuts", "beer"],
        squirrel: true
    }
    /*and so on...... */
];
console.log(Object.values(journal));