import { Link } from "react-router-dom";
function ServiceCard({ service: { title, description, img } }) {
	return (
		<div className="aximo-service-increase-row">
			<div className="aximo-service-increase-item">
				<img className="swipeimage" src={img} alt="thumb" />
				<div className="aximo-service-increase-title">
					<h3>{title}:</h3>
				</div>
				<div className="aximo-service-increase-body">
					<p>{description}</p>
				</div>
				<Link to="/single-service" className="aximo-service-increase-icon">
					<i className="icon-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
