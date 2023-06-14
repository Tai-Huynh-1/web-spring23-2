import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// virtual DOM (vDOM) and reconciliation process
// diffing
// re-rendering
// snapshots

const root = ReactDOM.createRoot(document.getElementById("root"));

class Clock extends React.Component {
	constructor(props) {
		super(props); // pass props into super constructor (React.Component)

		// maintain state of Clock component using "this.state = {}"
		this.state = {
			date: new Date(), // initialize the date state with new date object
		};
	}

	componentDidMount() {
		// set up interval and store the timerID so we can clear it when component unmounts
		this.timerID = setInterval(() => {
			this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID); // clear the interval timer we set up in componentDidMount (a.k.a. cleanup)
	}

	/**
	 * Tick should create a new date object and update our component's date state
	 */
	tick() {
		// create new state object
		// update state with "this.setState()"
		const newState = {
			// note this is a brand new object being created (diff memory address)
			date: new Date(),
		};
		this.setState(newState);
	}

	// render method gets called when state changes
	// React reacts to states and props changes (object reference)
	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It's {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}

// function tick() {
// 	// keep calling root.render() because once JSX element has been generated, it cannot be modified
// 	root.render(<Clock />);
// }

root.render(<Clock />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
