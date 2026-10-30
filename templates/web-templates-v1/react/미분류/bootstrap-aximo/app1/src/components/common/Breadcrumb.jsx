import { Link } from "react-router-dom";
function BreadCrumb({ title }) {
	return (
		<div className="aximo-breadcrumb">
			<div className="container">
				<h1 className="post__title">{title}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li aria-current="page"> {title}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
