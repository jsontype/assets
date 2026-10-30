import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon } }) {
	return (
		<div className="col-lg-6">
			<div className="aximo-iconbox-wrap">
				<div className="aximo-iconbox-icon">
					<i className={`${icon}`}></i>
				</div>
				<div className="aximo-iconbox-data">
					<h3>{title}</h3>
					<p>{description}</p>
					<Link to="/single-service" className="aximo-icon">
						<img src={ArrowRightImg} alt="arrow right" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
