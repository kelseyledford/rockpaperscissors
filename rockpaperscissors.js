//"You win/lose" notification, preferably under the logo
//2+ user game
//Get rid of little white line after text
//Change so that userChoice is determined by which of the pictures/divs the user chooses
//Account for letter switching misspellings


window.onload = function(){
	var userChoice;
	var computerChoice; 
	var userCount = 0;
	var compCount = 0;

	var logo = document.getElementById("logo");
	logo.onclick = function clickToChoose() {
		userChoice = prompt("Do you choose rock, paper, scissors, lizard or Spock?");
		userChoice = userChoice.toLowerCase();
		computerChoice = Math.random();
		if (computerChoice >= 0, computerChoice <= 0.2) {
			computerChoice="rock";
		} else if (computerChoice >= 0.21, computerChoice <= 0.4) {
			computerChoice="paper";
		} else if (computerChoice >= 0.41, computerChoice <= 0.6) {
			computerChoice="scissors";
		} else if (computerChoice >= 0.61, computerChoice <= 0.8) {
			computerChoice="lizard";
		} else {
			computerChoice="spock";
		};
		console.log(computerChoice);
		compare(userChoice, computerChoice);
		document.getElementById("yourScore").innerHTML="Your score:";
		document.getElementById("compScore").innerHTML="Computer score:";
		document.getElementById("usercount").innerHTML=userCount;
		document.getElementById("compcount").innerHTML=compCount;
	};

	var compare = function (choice1, choice2) {
		if (choice1 === "rock")
			if (choice2 === "paper"){
				document.getElementById("notify").innerHTML="Paper covers rock";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				compCount += 1;
			}
			else if (choice2 === "scissors") {
				document.getElementById("notify").innerHTML="Rock crushes scissors";
				document.getElementById("winlose").innerHTML="You win!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				userCount += 1;
			}
			else if (choice2 === "lizard") {
				document.getElementById("notify").innerHTML="Rock crushes lizard";
				document.getElementById("winlose").innerHTML="You win!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				userCount += 1;
			}
			else if (choice2 === "spock") {
				document.getElementById("notify").innerHTML="Spock vaporizes rock";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				compCount += 1;

			}
			else {
				document.getElementById("notify").innerHTML="Tie!";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
			}
		else if (choice1 === "paper")
			if (choice2 === "rock") {
				document.getElementById("notify").innerHTML="Paper covers rock";
				document.getElementById("winlose").innerHTML="You win!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				userCount += 1;
			}
			else if (choice2 === "scissors") {
				document.getElementById("notify").innerHTML="Scissors cuts paper";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				compCount += 1;
			}
			else if (choice2 === "lizard") {
				document.getElementById("notify").innerHTML="Lizard eats paper";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				compCount += 1;
			}
			else if (choice2 === "spock") {
				document.getElementById("notify").innerHTML="Paper disproves Spock";
				document.getElementById("winlose").innerHTML="You win!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				userCount += 1;
			}
			else {
				document.getElementById("notify").innerHTML="Tie!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
			}
		else if (choice1 ==="scissors" || choice1 === "sissors" || choice1 === "sisors")
			if (choice2 === "paper") {
				document.getElementById("notify").innerHTML="Scissors cuts paper";
				document.getElementById("winlose").innerHTML="You win!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				userCount += 1;
			}
			else if (choice2 === "rock") {
				document.getElementById("notify").innerHTML="Rock crushes scissors";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				compCount += 1;
			}
			else if (choice2 === "lizard") {
				document.getElementById("notify").innerHTML="Scissors decapitate lizard";
				document.getElementById("winlose").innerHTML="You win!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				userCount += 1;
			}
			else if (choice2 === "spock") {
				document.getElementById("notify").innerHTML="Spock smashes scissors";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				compCount += 1;
			}
			else {
				document.getElementById("notify").innerHTML="Tie!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
			}
		else if (choice1 ==="lizard" || choice1 === "lisard" || choice1 === "lizzard")
			if (choice2 === "paper") {
				document.getElementById("notify").innerHTML="Lizard eats paper";
				document.getElementById("winlose").innerHTML="You win!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				userCount += 1;
			}
			else if (choice2 === "rock") {
				document.getElementById("notify").innerHTML="Rock crushes lizard";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				compCount += 1;
			}
			else if (choice2 === "scissors") {
				document.getElementById("notify").innerHTML="Scissors decapitate lizard";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				compCount += 1;
			}
			else if (choice2 === "spock") {
				document.getElementById("notify").innerHTML="Lizard poisons Spock";
				document.getElementById("winlose").innerHTML="You win!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				userCount += 1;
			}
			else
				{document.getElementById("notify").innerHTML="Tie!";}
		else if (choice1 === "spock" || choice1 === "spoc" || choice1 === "spok")
			if (choice2 === "paper") {
				document.getElementById("notify").innerHTML="Paper disproves Spock";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				compCount += 1;
			}
			else if (choice2 === "rock") {
				document.getElementById("notify").innerHTML="Spock vaporizes rock";
				document.getElementById("winlose").innerHTML="You win!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				userCount += 1;
			}
			else if (choice2 === "lizard") {
				document.getElementById("notify").innerHTML="Lizard poisons Spock";
				document.getElementById("winlose").innerHTML="You lose!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				compCount += 1;
			}
			else if (choice2 === "scissors") {
				document.getElementById("notify").innerHTML="Spock smashes scissors";
				document.getElementById("winlose").innerHTML="You win!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
				userCount += 1;
			}
			else {
				document.getElementById("notify").innerHTML="Tie!";
				document.getElementById("line2").innerHTML="Click on the picture to play again!";
			}
		else { 
			document.getElementById("notify").innerHTML="Sorry, I didn't understand you.";
			document.getElementById("line2").innerHTML="Click on the picture to try again!";
		}
	};
}