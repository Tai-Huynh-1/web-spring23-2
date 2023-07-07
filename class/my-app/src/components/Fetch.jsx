import React from "react";
import useFetch from "../hooks/useFetch";

// function fetchData(url) {
// 	return axios
// 		.get(url)
// 		.then((res) => {
// 			const { data } = res;
// 			setdata(data);
// 		})
// 		.catch((err) => {
// 			console.log("error", err);
// 		});
// }

/**
 * Go over async/await syntax for promises
 * @returns
 */
const Fetch = () => {
	const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

	console.log("data", data);

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
			<h1>Fetch</h1>
			<ul>
				{data?.map((post) => {
					return (
						<li key={post.id}>
							<h3>{post.id}</h3>
							<p>{post.body}</p>
						</li>
					);
				})}
				{/* {[
					<li>
						<h3>Hello</h3>
					</li>,
					<li>
						<h3>World</h3>
					</li>,
					<li>
						<h3>!!!!</h3>
					</li>,
				]} */}
			</ul>
		</div>
	);
};

export default Fetch;
