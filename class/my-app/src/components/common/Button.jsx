/**
 * A reusable button with default styles and the ability to extend and modify styles. Proxy pattern.
 * @param {*} param0 children, classname, secondary, and other props
 * @returns Button component
 */
const Button = (props) => {
	const { children, rounded = "md", secondary = false, ...otherProps } = props;
	const roundedEdge = rounded === "sm" ? "rounded-sm" : rounded === "lg" ? "rounded-lg" : "rounded-md";

	const backgroundColor = secondary ? "bg-orange-500" : "bg-indigo-500";

	const styles = `${backgroundColor} text-white ${roundedEdge} p-1`;

	console.log("props", props);
	console.log("otherProps", otherProps);

	return (
		<button type="button" {...otherProps} className={styles}>
			{children}
		</button>
	);
};

export default Button;

//Rakesh: props {} - otherProps {onClick}
//Mohana: props {secondary} - otherProps {onClick}
//Rekha: props {children, secondary(true), onClick} - otherProps {onClick}
