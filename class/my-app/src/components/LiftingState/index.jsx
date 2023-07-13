import React from "react";
import Form from "./Form";
import Display from "./Display";

/**
 * TODO: Get the Display component used below to display the text coming from the the <Form /> component's input field. You may make any modification to achieve this goal except move the <Form /> and <Display /> components below to a different file.
 * The concept here is state lifting - read the React documentation and see if you can apply it here.
 */
const LiftingState = () => {
	return (
		<div>
			<h1>Lifting State</h1>

			{/* The Form component must stay here */}
			<Form />

			<br />

			{/* The Display components below must stay here */}
			<Display />
			<Display />
		</div>
	);
};

export default LiftingState;
