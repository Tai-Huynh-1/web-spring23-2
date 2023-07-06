import React from "react";
import useFetch from "../hooks/useFetch";

// function fetchData(url) {
// 	return axios
// 		.get(url)
// 		.then((res) => {
// 			const { data } = res;
// 			setPosts(data);
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
	const url = "https://jsonplaceholder.typicode.com/posts";

	const { posts, loading, error } = useFetch(url);

	console.log("posts", posts);

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
				{posts?.map((post) => {
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
