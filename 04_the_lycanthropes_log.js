let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
};

addEntry(["worlk", "touched tree", "pizza", "runing", "television"], false);
addEntry(["work", "ice cream", "potty"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
console.log(journal);