import React from "react";
function Field({ label, children, htmlFor, error }) {
	const id = htmlFor || getChildId(children);
	return (
		<div className="flex flex-col items-start justify-start mt-2 p-0 w-full mr-2">
			{label && (
				<label htmlFor={id} className="mb-1">
					{label}
				</label>
			)}
			{children}
			{error && <div className="text-danger">{error.message}</div>}
		</div>
	);
}
function getChildId(children) {
	const child = React.Children.only(children);

	// eslint-disable-next-line no-unsafe-optional-chaining
	if ("id" in child?.props) {
		return child.props.id;
	}
}
export default Field;
