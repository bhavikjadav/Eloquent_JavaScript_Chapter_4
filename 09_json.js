/*
JSON = JavaScript Object Notation
What is JSON ?
==> JSON widely used as a data storage and communication format
    on the Web, even in languages other than JavaScript.

    {
        "squirrel": false,
        "events": ["work", "touched tree", "pizza", "running"]
    }
*/

let string = JSON.stringify({
    squirrel: false,
    events: ["weekend", "cycling", "potty"]
});
console.log(string);
console.log(JSON.parse(string).events); // Accessing events from string object.