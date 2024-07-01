
// Example
// for loop with alerts
function partOneA () {
  let highNumber = 4;
  // 1. Create a for loop.
  // Create a for loop with this syntax.
  // NOTE: You will need to memorize this syntax!
  for (let i = 0; i < highNumber; i++) {
    // 2. give the user an alert with the current number.
    alert(`The number is ${i}`);
  }
}

// Try It!
// Create a loop with a different high number
function partOneB () {
  let highNumber = 7;
  // 1. Create a for loop.
  for (let i = 4; i < highNumber; i++) {
  // 2. give the user an alert with the current number.
    alert(`${i} is the number.`);
  }
}

// Example
// A for loop over an array
function partTwoA () {
  messageParagraph.innerHTML = "Friends";

  // 1. Create an array of 5 friends
  let friends = ["Andy", "Betty", "Cathy", "Danna", "Edward"];

  // 2. Find the length of the array
  let highNumber = friends.length;

  // 3. Create a for loop.
  for (let i = 0; i < highNumber; i++) {
    // 4. give the user an alert with the current friend.
    alert(`The friend is ${friends[i]}`);
  }
}

// Try it!
// Try to loop over favorite flavors
// Or any other topic you like.
function partTwoB () {
  messageParagraph.innerHTML = "Flavors";

  // 1. Create an array of 5 flavors
  let flavors = ["Dutch Chocolate", "Pralines n' Cream", "Homemade Vanilla", "Cookies n' Cream", "Rocky Road"]; 

  // 2. Find the length of the array
  let highNumber = flavors.length;
  // 3. Create a for loop.
  for (let i = 0; i < highNumber; i++) {
  // 4. give the user and alert with the current friend.
    alert(`Surprise! The flavor is ${flavors[i]}`);

  }
}

// Example
// Instead of alerting, write to the innerHTML of the list
function partThreeA () {
  messageParagraph.innerHTML = "Friends";

  // 1. create an array of 5 friends
  let friends = ["Andy", "Betty", "Cathy", "Danna", "Edward"];
  // 2. find the length of the array
  let highNumber = friends.length;
  // 3. create a for loop
  for (let i = 0; i < highNumber; i++) {
    // 4. write the friend to the innerHTML of the list
    messageList.innerHTML += `<li>${friends[i]}</li>`;
  }
}

// Try it!
// Try to loop over favorite flavors
function partThreeB () {
  messageParagraph.innerHTML = "Flavors";

  // 1. create an array of 5 flavors
  let flavors = ["Dutch Chocolate", "Pralines n' Cream", "Homemade Vanilla", "Cookies n' Cream", "Rocky Road"]; 
  // 2. find the length of the array
  let highNumber = flavors.length;
  // 3. create a for loop
  for (let i = 0; i < highNumber; i++) {
 // 4. write the friend to the innerHTML of the list
    messageList.innerHTML += `<li>${flavors[i]}</li>`;
  }
 
}

// Example
// Now let's add friends to the list
// We can reset the innerHTML each time
// Then rebuild the list with the loop
// This will give us a fresh list each time
let friends = []; // NOTE: the friends array is outside the function. Why?
function partFourA () {
  let newFriend, highNumber;
  // 1. prompt for a new friend 
  newFriend = prompt("Add a friend to the list.");

  // 2. add the friend to the array with push()
  friends.push(newFriend);


  // 3. reset the list in the innerHTML
  messageList.innerHTML = "";
  // 4. set the message to "Friends"
  messageParagraph.innerHTML = "Friends";

  // 5. Get the exact length of the array
  highNumber = friends.length;

  // 6. write all the names back to the HTML list from the array, updated with our new friend.
  for (let i = 0; i < highNumber; i++) {
    messageList.innerHTML += `<li>${friends[i]}</li>`;
  }
}

// Try it!
// Try to add flavors to the list
let flavors = [];
function partFourB () {
  let newFlavor, highNumber;

  // 1. prompt for a flavor
  newFlavor = prompt(`Add your favorite flavor to the legendary list.`);
  // 2. add the flavor to the array with push()
  flavors.push(newFlavor);
  // 3. reset the list in the innerHTML
  messageList.innerHTML = "";
  // 4. set the message to "Flavors"
  messageParagraph.innerHTML = "Flavors";

  // 5. Get the exact length of the array
  highNumber = flavors.length;

  // 6. write all the flavors back to the HTML list from the array, updated with our new flavor.
  for (let i = 0; i < highNumber; i++) {
    messageList.innerHTML += `<li>${flavors[i]}</li>`;
  }
}

