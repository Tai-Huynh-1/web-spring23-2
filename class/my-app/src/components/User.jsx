import React from "react";

/**
 * NOTE: This component's name is User (singular, not plural)
 * TODO: You need to build a component like the Users.jsx component you built earlier this week,
 * but it will only fetch user data for a singular person. The url to fetch a single user's data is
 * https://jsonplaceholder.typicode.com/users/1 - the "1" at the end indicate what user id the api will return.
 * You need to make the number at the end dynamic (based on the user's input)
 * You can paste that API endpoint into the browser to see the shape of the data being returned.
 *
 * Your component will have an input text field that asks the user what user id they want to fetch.
 *
 * Your component will then fetch the user with that id
 * By default the id can be 0. and your component should check if the id is 0, don't attempt to make an API call
 * to fetch the data.
 *
 * @returns
 */
const User = () => {
	// TODO: handle state management here, account for loading, data, and error state

	// TODO: Write handlers or any other logic you need to make the component work here

	// TODO: conditionally render based on loading, error or successful fetch
	return (
		<div>
			<h1>User By Id</h1>

			<br />

			<label>
				User Id to Fetch:
				<input type="text" />
			</label>

			<div>
				<h2>User Data</h2>
				{/* TODO: Display that user's data below such as user id, name, username, email */}
			</div>
		</div>
	);
};

export default User;
