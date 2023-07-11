/**
 * A reusable button with default styles and the ability to extend and modify styles. Proxy pattern.
 * @param {*} param0 children, classname, secondary, and other props
 * @returns Button component
 */
const Button = ({ children, rounded = "md", secondary = false, ...otherProps }) => {
	const roundedEdge = rounded === "sm" ? "rounded-sm" : rounded === "lg" ? "rounded-lg" : "rounded-md";

	const backgroundColor = secondary ? "bg-orange-500" : "bg-indigo-500";

	const styles = `${backgroundColor} text-white ${roundedEdge} p-1`;

	return (
		<button type="button" {...otherProps} className={styles}>
			{children}
		</button>
	);
};

export default Button;
