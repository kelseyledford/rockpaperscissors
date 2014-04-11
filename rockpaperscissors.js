//"You win/lose" notification, preferably under the logo
//If result is a tie, repeat the game
//Play again? choice
//on click 
//2+ user game

var userChoice = prompt("Do you choose rock, paper, scissors, lizard or Spock?");
var userChoice = userChoice.toLowerCase();

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
			{document.write ("Paper covers rock");}
		else if (choice2 === "scissors" || choice2 === "sissors" || choice2 === "sisors")
			{document.write ("Rock crushes scissors");}
		else if (choice2 === "lizard" || choice2 === "lisard" || choice2 === "lizzard")
			{document.write ("Rock crushes lizard");}
		else if (choice2 === "spock" || choice1 === "spoc" || choice1 === "spok")
			{document.write ("Spock vaporizes rock");}
		else
			{document.write ("Tie!");}
	else if (choice1 === "paper")
		if (choice2 === "rock")
			{document.write ("Paper covers rock");}
		else if (choice2 === "scissors" || choice2 === "sissors" || choice2 === "sisors")
			{document.write ("Scissors cuts paper");}
		else if (choice2 === "lizard" || choice2 === "lisard" || choice2 === "lizzard")
			{document.write ("Lizard eats paper");}
		else if (choice2 === "spock" || choice1 === "spoc" || choice1 === "spok")
			{document.write ("Paper disproves Spock");}
		else
			{document.write ("Tie!");}
	else if (choice1 ==="scissors" || choice2 === "sissors" || choice2 === "sisors")
		if (choice2 === "paper")
			{document.write ("Scissors cuts paper");}
		else if (choice2 === "rock")
			{document.write ("Rock crushes scissors");}
		else if (choice2 === "lizard" || choice2 === "lisard" || choice2 === "lizzard")
			{document.write ("Scissors decapitate lizard");}
		else if (choice2 === "spock" || choice1 === "spoc" || choice1 === "spok")
			{document.write ("Spock smashes scissors");}
		else
			{document.write ("Tie!");}
	else if (choice1 ==="lizard" || choice2 === "lisard" || choice2 === "lizzard")
		if (choice2 === "paper")
			{document.write ("Lizard eats paper");}
		else if (choice2 === "rock")
			{document.write ("Rock crushes lizard");}
		else if (choice2 === "scissors" || choice2 === "sissors" || choice2 === "sisors")
			{document.write ("Scissors decapitate lizard");}
		else if (choice2 === "spock" || choice1 === "spoc" || choice1 === "spok")
			{document.write ("Lizard poisons Spock");}
		else
			{document.write ("Tie!");}
	else if (choice1 === "spock" || choice1 === "spoc" || choice1 === "spok")
		if (choice2 === "paper")
			{document.write ("Paper disproves Spock");}
		else if (choice2 === "rock")
			{document.write ("Spock vaporizes rock");}
		else if (choice2 === "lizard" || choice2 === "lisard" || choice2 === "lizzard")
			{document.write ("Lizard poisons Spock");}
		else if (choice2 === "scissors" || choice2 === "sissors" || choice2 === "sisors")
			{document.write ("Spock smashes scissors");}
		else
			{document.write ("Tie!");}
	else 
		{document.write ("Sorry, I didn't understand you.")}
};

compare(userChoice, computerChoice)