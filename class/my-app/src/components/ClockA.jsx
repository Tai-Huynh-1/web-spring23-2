import React from "react";

// functional components are originally called "stateless components" / "dumb components" or "presentational components" (before hooks were introduced)
export function FormattedDate(props) {
	console.log("functional component rendering");

	const { date } = props;
	const time = date.toLocaleTimeString();

	return <h2>It's {time}</h2>;
}

class ClockA extends React.Component {
	constructor(props) {
		super(props); // pass props into super constructor (React.Component)

		// maintain state of Clock component using "this.state = {}"
		this.state = {
			date: new Date(), // initialize the date state with new date object
			counter: 0,
		};

		this.incrementCounter = this.incrementCounter.bind(this);
	}

	componentDidMount() {
		console.log("componentDidMount");
		// set up interval and store the timerID so we can clear it when component unmounts
		this.timerID = setInterval(() => {
			this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		console.log("about to unmount");
		clearInterval(this.timerID); // clear the interval timer we set up in componentDidMount (a.k.a. cleanup)
	}

	/**
	 * Tick should create a new date object and update our component's date state
	 */
	tick() {
		// create new state object
		// update state with "this.setState()"s
		const newState = {
			// note this is a brand new object being created (diff memory address)
			date: new Date(),
		};
		this.setState(newState);
	}

	incrementCounter() {
		// pass a callback function to generate your state object to get access to most current state
		// you might need to do this if your new state is somehow dependent on the value of your old state
		this.setState((currState) => ({
			counter: currState.counter + 1,
		}));
	}

	// render method gets called when state changes
	// React reacts to states and props changes (object reference)
	render() {
		console.log("ClockA rendering");
		console.log("clock state", this.state);
		return (
			<div>
				<h1>Hello, world!</h1>
				<FormattedDate date={this.state.date} />
				<div>Counter: {this.state.counter}</div>
				<button onClick={this.incrementCounter}>Increment Counter</button>
			</div>
		);
	}
}

export default ClockA;
