import React, { useCallback, useEffect, useState } from "react";

/**
 * TODO: This component is used to test useEffect and how it responds to state/prop changes. Complete all the TODO points below and test out the component yourself. See if you can understand and make sense of the useEffect behavior. Read the React documentation for more information.
 * Test the component's useEffect with no dependency array, with empty dep. array and with a dependency array with dependent variables inside of it.
 * @returns
 */
const TestEffectCounter = () => {
	// TODO: set up your counter state here
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter((currCounter) => currCounter + 1);
	};

	// here is an unmemoized function you can pass into the dependency array
	// const unmemoized = () => {
	// 	console.log("UNMEMOIZED FUNCTION");
	// };

	// constant variable you might use inside of useEffect dependency array, not all re-rendering/recreation of variable causes the callback to rerun
	// const color = "blue";

	// TODO: create a memoized version of the unmemoized function from above
	// and use it inside useEffect to see how it differs. Your memoized function should just console.log("I am memoized.")
	const memoized = useCallback(() => {
		console.log("MEMOIZED FUNCTION");
	}, []);

	// TODO: test useEffect with and without a dependency array
	// try using the dependency array but with the unmemoized function added

	useEffect(() => {
		// this console.log will get called when useEffect runs
		console.log("== component mounted, useEffect callback function gets invoked ==");
		// console.log(`My color is ${color}`);

		// test calling unmemoized/memoized function (dependency) here
		// unmemoized();
		memoized();

		// you can optionally add some code to return a callback function here as well
		// return () => {
		//     // add clean up code here
		// }
	}, [memoized]);

	// prevMemoized === newMemoized => prevMemoryAddress === newMemoryAddress => false
	// prevMemoized === newMemoized => prevMemoryAddress === newMemoryAddress => true
	// prevColor === newColor => 'blue' === 'blue' => true

	return (
		<div>
			<h1>TestEffectCounter</h1>

			{/* TODO: Render your counter inside the h2 tag */}
			<h2>{counter}</h2>

			{/* TODO: Create a button to increment the counter to see how useEffect responds */}
			<button onClick={handleClick}>Increment</button>
		</div>
	);
};

export default TestEffectCounter;
