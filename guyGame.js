guyNumber = 0

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initGame() {
	const min= getRandomNumber(1, 50);
	const max = min + getRandomNumber(1, 50);

	//get random number of guys
	guyNumber = getRandomNumber(min, max);
	document.getElementById("instructions").textContent = `guess the number of guys by entering a number between ${min} and ${max}`;
	document.getElementById("gc").classList.toggle("gameContainer");
	document.getElementById('guyContainer').innerHTML = '';
	document.getElementById("result").textContent = "";

}

function processGuess() {


    //get the player's guess
    const numberGuessed = parseInt(document.getElementById("playerGuess").value);

    //start the message we'll send back to the player
    
    if (isNaN(numberGuessed))
    {
        document.getElementById("result").textContent = "no";
        return;
    }
    
    if (guyNumber===numberGuessed)
    {
        //player wins!
        document.getElementById("result").textContent = "you win";
	//show ducks
        const container = document.getElementById('guyContainer');
        container.innerHTML = '';

        for (let i = 0; i < guyNumber; i++) {
           const img = document.createElement('img');
           img.src = "Untitled.png";
           container.appendChild(img);
	}
    }
    else
    {
        //player guessed incorrectly

	if (guyNumber < numberGuessed) {
        	document.getElementById("result").textContent = "no, guess lower";
	}
	else {
		document.getElementById("result").textContent = "no, guess higher";
	}
    }
}
document.getElementById("playGame").addEventListener("click", initGame);
document.getElementById("submitGuess").addEventListener("click", processGuess);