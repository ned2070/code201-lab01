// Declare variables//
let chosenMessage = String;

// Get input //
function getInput() {
  let userName = prompt("Please enter your name");
  console.log("Name:" + userName);

  let userRead = prompt("What do you read, " + userName + "?");
  console.log("Choice of reading material: " + userRead);

  let userMusic = prompt(
    "What do you listen to while your reading " +
      userRead +
      ", " +
      userName +
      "?"
  );
  console.log("Choice of music: " + userMusic);

  let userDrink = prompt(
    "What do you drink while your reading " +
      userRead +
      " and listening to " +
      userMusic +
      ", " +
      userName +
      "?"
  );
  console.log("Choice of drink: " + userDrink);

  // Select response //
  let lengthInput = userRead.length + userMusic.length + userDrink.length;

  if (lengthInput > 14) {
    chosenMessage = "sounds very civilised";
  } else {
    chosenMessage = "...we're not judging you";
  }

  // Show response //
  window.alert(
    "Drinking " +
      userDrink +
      " while listening to " +
      userMusic +
      " and reading " +
      userRead +
      " " +
      chosenMessage +
      ", " +
      userName +
      "."
  );
}
