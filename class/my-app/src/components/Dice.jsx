import React, { useMemo, useState } from "react";

/**
 * A function that generates and returns a number between 1 and 6.
 */
function generateDiceNumber() {
	return Math.floor(Math.random() * 6) + 1;
}

/**
 * TODO: Explain in detail (step-by-step) what happens when the user clicks on the Reroll button.
 * Write it below:
 * Step 1: User clicks on reroll
 * Step 2:
 * Step 3:
 * ... Add more steps as you need
 *
 */
const Dice = () => {
	const [counter, setCounter] = useState(0);
	const age = 10;

	const handleClick = () => {
		setCounter((currCounter) => currCounter + 1);
	};

	// const diceRolls = new Array(6).fill(null).map((el) => generateDiceNumber());

	const diceRolls = useMemo(() => new Array(6).fill(null).map((el) => generateDiceNumber()), [handleClick]);

	return (
		<div>
			<h1>Dice Roller</h1>

			<h2>{`You have rolled ${counter} times`}</h2>

			<h2>{JSON.stringify(diceRolls)}</h2>

			<button onClick={handleClick}>Reroll</button>
		</div>
	);
};

export default Dice;
