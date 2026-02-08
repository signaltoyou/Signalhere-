 
function playDiceGame() {
    let roll1 = getRandomNumber();
    let roll2 = getRandomNumber();
    let rollSum = roll1 + roll2;

    document.getElementById("divroll1").textContent = "Roll 1 = " + roll1;
    document.getElementById("divroll2").textContent = "Roll 2 = " + roll2;
    document.getElementById("divsum").textContent = "Sum = " + rollSum;

    // WIN: doubles AND even numbers (2, 4, 6)
    if (roll1 === roll2 && roll1 % 2 === 0) {
      document.getElementById("divmessage").textContent = " You WIN!";
    }
    // LOSE: sum is 7 or 11
    else if (rollSum === 7 || rollSum === 11) {
      document.getElementById("divmessage").textContent = " You LOSE!";
    }
    // PUSH / TIE
    else {
      document.getElementById("divmessage").textContent = " Push (Tie)";
    }
  }

  // Generates a random number between 1 and 6
  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
   
  }