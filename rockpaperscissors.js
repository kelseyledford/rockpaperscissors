var userChoice = prompt("Do you choose rock, paper, scissors, lizard or Spock?");
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

var compare = function (choice1, choice2) {
	if (choice1 === choice2)
		{document.write ("The result is a tie!");}
	if (choice1 === "rock")
		if (choice2 === "paper")
			{document.write ("Paper covers rock");}
		else if (choice2 === "scissors")
			{document.write ("Rock crushes scissors");}
		else if (choice2 === "lizard")
			{document.write ("Rock crushes lizard");}
		else
			{document.write ("Spock vaporizes rock");}
	if (choice1 === "paper")
		if (choice2 === "rock")
			{document.write ("Paper covers rock");}
		else if (choice2 === "scissors")
			{document.write ("Scissors cuts paper");}
		else if (choice2 === "lizard")
			{document.write ("Lizard eats paper");}
		else
			{document.write ("Paper disproves Spock");}
	if (choice1 ==="scissors")
		if (choice2 === "paper")
			{document.write ("Scissors cuts paper");}
		else if (choice2 === "rock")
			{document.write ("Rock crushes scissors");}
		else if (choice2 === "lizard")
			{document.write ("Scissors decapitate lizard");}
		else
			{document.write ("Spock smashes scissors");}
	if (choice1 ==="lizard")
		if (choice2 === "paper")
			{document.write ("Lizard eats paper");}
		else if (choice2 === "rock")
			{document.write ("Rock crushes lizard");}
		else if (choice2 === "scissors")
			{document.write ("Scissors decapitate lizard");}
		else
			{document.write ("Lizard poisons Spock");}
	if (choice1 ==="spock")
		if (choice2 === "paper")
			{document.write ("Paper disproves Spock");}
		else if (choice2 === "rock")
			{document.write ("Spock vaporizes rock");}
		else if (choice2 === "lizard")
			{document.write ("Lizard poisons Spock");}
		else
			{document.write ("Spock smashes scissors");}
};

compare(userChoice, computerChoice)