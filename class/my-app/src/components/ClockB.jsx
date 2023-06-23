import React, { useCallback, useEffect, useState } from "react";
import { FormattedDate } from "./ClockA";

const ClockB = () => {
	const [date, setDate] = useState(new Date());
	const [counter, setCounter] = useState(0);

	// useCallback returns a memoized function
	const tick = useCallback(() => {
		setDate(new Date());
	}, []);

	useEffect(() => {
		console.log("component mounted & setting up timer");
		const timerId = setInterval(() => {
			tick();
		}, 1000);

		return () => {
			// perform any clean up
			console.log("component about to unmount");
			clearInterval(timerId);
		};
	}, [tick]);

	console.log("rendering clock B");
	return (
		<div>
			ClockB
			<h1>Hello, world!</h1>
			<FormattedDate date={date} />
			{/* <div>Counter: {this.state.counter}</div>
			<button onClick={this.incrementCounter}>Increment Counter</button> */}
		</div>
	);
};

export default ClockB;
