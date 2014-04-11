//"You win/lose" notification, preferably under the logo
//If result is a tie, repeat the game
//Play again? choice
//2+ user game
//Fix image so that it is centered



window.onload = function(){
	var userChoice;

	var logo = document.getElementById("logo");
	logo.onclick = function clickToChoose() {
		userChoice = prompt("Do you choose rock, paper, scissors, lizard or Spock?");
		userChoice = userChoice.toLowerCase();
		compare(userChoice, computerChoice);
	};

	var computerChoice = Math.random();
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
	}

	console.log(computerChoice)

	var compare = function (choice1, choice2) {
		if (choice1 === "rock")
			if (choice2 === "paper")
				{document.getElementById("notify").innerHTML="Paper covers rock";}
			else if (choice2 === "scissors" || choice2 === "sissors" || choice2 === "sisors")
				{document.getElementById("notify").innerHTML="Rock crushes scissors";}
			else if (choice2 === "lizard" || choice2 === "lisard" || choice2 === "lizzard")
				{document.getElementById("notify").innerHTML="Rock crushes lizard";}
			else if (choice2 === "spock" || choice1 === "spoc" || choice1 === "spok")
				{document.getElementById("notify").innerHTML="Spock vaporizes rock";}
			else
				{document.getElementById("notify").innerHTML="Tie!";}
		else if (choice1 === "paper")
			if (choice2 === "rock")
				{document.getElementById("notify").innerHTML="Paper covers rock";}
			else if (choice2 === "scissors" || choice2 === "sissors" || choice2 === "sisors")
				{document.getElementById("notify").innerHTML="Scissors cuts paper";}
			else if (choice2 === "lizard" || choice2 === "lisard" || choice2 === "lizzard")
				{document.getElementById("notify").innerHTML="Lizard eats paper";}
			else if (choice2 === "spock" || choice1 === "spoc" || choice1 === "spok")
				{document.getElementById("notify").innerHTML="Paper disproves Spock";}
			else
				{document.getElementById("notify").innerHTML="Tie!";}
		else if (choice1 ==="scissors" || choice2 === "sissors" || choice2 === "sisors")
			if (choice2 === "paper")
				{document.getElementById("notify").innerHTML="Scissors cuts paper";}
			else if (choice2 === "rock")
				{document.getElementById("notify").innerHTML="Rock crushes scissors";}
			else if (choice2 === "lizard" || choice2 === "lisard" || choice2 === "lizzard")
				{document.getElementById("notify").innerHTML="Scissors decapitate lizard";}
			else if (choice2 === "spock" || choice1 === "spoc" || choice1 === "spok")
				{document.getElementById("notify").innerHTML="Spock smashes scissors";}
			else
				{document.getElementById("notify").innerHTML="Tie!";}
		else if (choice1 ==="lizard" || choice2 === "lisard" || choice2 === "lizzard")
			if (choice2 === "paper")
				{document.getElementById("notify").innerHTML="Lizard eats paper";}
			else if (choice2 === "rock")
				{document.getElementById("notify").innerHTML="Rock crushes lizard";}
			else if (choice2 === "scissors" || choice2 === "sissors" || choice2 === "sisors")
				{document.getElementById("notify").innerHTML="Scissors decapitate lizard";}
			else if (choice2 === "spock" || choice1 === "spoc" || choice1 === "spok")
				{document.getElementById("notify").innerHTML="Lizard poisons Spock";}
			else
				{document.getElementById("notify").innerHTML="Tie!";}
		else if (choice1 === "spock" || choice1 === "spoc" || choice1 === "spok")
			if (choice2 === "paper")
				{document.getElementById("notify").innerHTML="Paper disproves Spock";}
			else if (choice2 === "rock")
				{document.getElementById("notify").innerHTML="Spock vaporizes rock";}
			else if (choice2 === "lizard" || choice2 === "lisard" || choice2 === "lizzard")
				{document.getElementById("notify").innerHTML="Lizard poisons Spock";}
			else if (choice2 === "scissors" || choice2 === "sissors" || choice2 === "sisors")
				{document.getElementById("notify").innerHTML="Spock smashes scissors";}
			else
				{document.getElementById("notify").innerHTML="Tie!";}
		else 
			{document.getElementById("notify").innerHTML="Sorry, I didn't understand you.";}
	};
}