import { Component } from "react";
import "./App.css";
import ClockA from "./components/ClockA";
import Palindrome from "./components/Palindrome";
import Homework1 from "./components/Homework1";
import PalindromeB from "./components/PalindromeB";
import ClockB from "./components/ClockB";
import TestEffect from "./components/TestEffect";
import TestEffectCounter from "./components/TestEffectCounter";
import Dice from "./components/Dice";
import Fetch from "./components/Fetch";
import Users from "./components/Users";
import LoginForm from "./components/LoginForm";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showClockA: false,
		};

		this.handleToggleClockA = this.handleToggleClockA.bind(this);
	}

	handleToggleClockA() {
		this.setState({
			showClockA: !this.state.showClockA,
		});
	}

	render() {
		// console.log("App rendering");
		// console.log("state", this.state.showClockA);

		return (
			<div>
				{/* <div>
					{this.state.showClockA ? <ClockA /> : null}
					<button onClick={this.handleToggleClockA}>Toggle ClockA</button>
				</div> */}

				<div>
					{/* <Palindrome /> */}
					{/* <PalindromeB /> */}
					{/* <ClockB /> */}
					{/* <TestEffectCounter /> */}
					{/* <Dice /> */}
					{/* <Fetch /> */}
					{/* <Users /> */}
					<LoginForm />
				</div>
			</div>
		);
	}
}

export default App;
