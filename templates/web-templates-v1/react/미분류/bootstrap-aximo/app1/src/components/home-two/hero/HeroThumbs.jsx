import Thumb1Img from "../../../assets/images/v2/h-thumb1.png";
import Thumb2Img from "../../../assets/images/v2/h-thumb2.png";
import Thumb3Img from "../../../assets/images/v2/h-thumb3.png";
import Thumb4Img from "../../../assets/images/v2/h-thumb4.png";
import Thumb5Img from "../../../assets/images/v2/h-thumb5.png";
function HeroThumbs() {
	return (
		<div className="aximo-hero-thumb-wrap">
			<div className="aximo-hero-thumb-item">
				<img src={Thumb1Img} alt="Thumb images" />
			</div>
			<div className="aximo-hero-thumb-item">
				<img src={Thumb2Img} alt="Thumb images" />
			</div>
			<div className="aximo-hero-thumb-item">
				<img src={Thumb3Img} alt="Thumb images" />
			</div>
			<div className="aximo-hero-thumb-item">
				<img src={Thumb4Img} alt="Thumb images" />
			</div>
			<div className="aximo-hero-thumb-item">
				<img src={Thumb5Img} alt="Thumb images" />
			</div>
		</div>
	);
}

export default HeroThumbs;
