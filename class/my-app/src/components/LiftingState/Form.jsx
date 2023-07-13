import React, { useState } from "react";
import Input from "../common/Input";

/**
 * We have set up the component below to have a controlled input field. Now we need to display the text in the Display component. Look at the LiftingState component for more detail.
 *
 */
const Form = () => {
	const [text, setText] = useState("");

	const handleChange = (event) => {
		setText(event.target.value);
	};

	return (
		<div className="flex flex-col">
			<div>
				<h2>Display Text: {text}</h2>
			</div>
			<Input id="text" label="Text" type="text" value={text} onChange={handleChange} />
		</div>
	);
};

export default Form;
