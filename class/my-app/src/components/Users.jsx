import React from "react";
import useFetch from "../hooks/useFetch";

const Users = () => {
	const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

	if (loading)
		return (
			<div>
				<h2>LOADING...</h2>
			</div>
		);

	if (error)
		return (
			<div>
				<h2>An error occurred: {error?.message}</h2>
			</div>
		);

	return (
		<div>
			<h1>Users</h1>

			<ul>
				{data?.map(({ id, name }) => (
					<li key={id}>
						<p>{name}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Users;
