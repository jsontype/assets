import { Link } from "react-router-dom";
import TitleShapImg from "../../../assets/images/v7/title-shape.png";
function HeroContent() {
	return (
		<div className="aximo-hero-content7">
			<h1>
				We present your brand creatively
				<span className="aximo-hero-shape-title2">
					<img className="aximo-hero-wave-shape" src={TitleShapImg} alt="Shape Title" />
				</span>
			</h1>
			<p>
				Our advertising agency specializes in creating captivating and visually stunning campaigns that leave a
				lasting impression on audiences to elevate your brand to new heights.
			</p>
			<div className="aximo-hero-btn-wrap m-0">
				<Link className="aximo-default-btn blue-btn2" to="/contact-us">
					<span className="aximo-label-up">Get In Touch</span>
					<span className="aximo-label-up">Get In Touch</span>
				</Link>
				<Link className="aximo-default-btn aximo-default-btn-outline outline-dark" to="/service">
					<span className="aximo-label-up">Explore Our Services</span>
					<span className="aximo-label-up">Explore Our Services</span>
				</Link>
			</div>
		</div>
	);
}

export default HeroContent;
