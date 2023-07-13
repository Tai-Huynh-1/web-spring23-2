import React from "react";

/**
 * TODO: Get this Display component to display the text coming from the <Form /> component's input field.
 *
 */
const Display = (props) => {
	const { text } = props;

	return (
		<div className="border-2 border-black">
			<h1>Display Component</h1>
			<h2>Text from input: {text}</h2>
		</div>
	);
};

export default Display;
