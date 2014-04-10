var userChoice = prompt("Do you choose rock, paper, scissors, lizard or Spock?");
var compterChoice = Math.random();
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
		{alert ("The result is a tie!");}
	if (choice1 === "rock")
		if (choice2 === "paper")
			{alert ("Paper covers rock");}
		else if (choice2 === "scissors")
			{alert ("Rock crushes scissors");}
		else if (choice2 === "lizard")
			{alert ("Rock crushes lizard");}
		else
			{alert ("Spock vaporizes rock");}
	if (choice1 === "paper")
		if (choice2 === "rock")
			{alert ("Paper covers rock");}
		else if (choice2 === "scissors")
			{alert ("Scissors cuts paper");}
		else if (choice2 === "lizard")
			{alert ("Lizard eats paper");}
		else
			{alert ("Paper disproves Spock");}
	if (choice1 ==="scissors")
		if (choice2 === "paper")
			{alert ("Scissors cuts paper");}
		else if (choice2 === "rock")
			{alert ("Rock crushes scissors");}
		else if (choice2 === "lizard")
			{alert ("Scissors decapitate lizard");}
		else
			{alert ("Spock smashes scissors");}
	if (choice1 ==="lizard")
		if (choice2 === "paper")
			{alert ("Lizard eats paper");}
		else if (choice2 === "rock")
			{alert ("Rock crushes lizard");}
		else if (choice2 === "scissors")
			{alert ("Scissors decapitate lizard");}
		else
			{alert ("Lizard poisons Spock");}
	if (choice1 ==="spock")
		if (choice2 === "paper")
			{alert ("Paper disproves Spock");}
		else if (choice2 === "rock")
			{alert ("Spock vaporizes rock");}
		else if (choice2 === "lizard")
			{alert ("Lizard poisons Spock");}
		else
			{alert ("Spock smashes scissors");}
};

compare(userChoice, computerChoice)