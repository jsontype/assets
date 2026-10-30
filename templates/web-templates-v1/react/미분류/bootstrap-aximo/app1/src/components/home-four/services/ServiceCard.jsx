import { Link } from "react-router-dom";
function ServiceCard({ service: { title, description, iconClass } }) {
	return (
		<div className="col-xl-4 col-lg-6">
			<div className="aximo-iconbox-wrap4">
				<div className="aximo-iconbox-icon4">
					<i className={iconClass}></i>
				</div>
				<div className="aximo-iconbox-data4">
					<h3>{title}</h3>
					<p>{description}</p>
					<Link className="aximo-icon" to="/single-service">
						<svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M15.5 1.25L24.25 10M24.25 10L15.5 18.75M24.25 10L1.75 10"
								stroke="#191931"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
