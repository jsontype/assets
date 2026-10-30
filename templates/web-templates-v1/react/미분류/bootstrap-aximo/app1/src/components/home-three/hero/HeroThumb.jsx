import { LazyLoadImage } from "react-lazy-load-image-component";
import ThumbImg from "../../../assets/images/v3/hero-thumb.png";
import ShapeAynaImg from "../../../assets/images/v3/shape-ayna.png";
import ShapeMonitorImg from "../../../assets/images/v3/shape-monitor.png";
import StarShapeImg from "../../../assets/images/v3/star-shape.png";
function HeroThumb() {
	return (
		<div className="aximo-hero-thumb3-wrap">
			<div className="aximo-hero-thumb3">
				<LazyLoadImage src={ThumbImg} alt=" Thumb" effect="blur" />
				<div className="aximo-hero-thumb-shape2">
					<img src={ShapeMonitorImg} alt="ShapeMonitorImg" />
				</div>
				<div className="aximo-hero-thumb-shape3">
					<img src={ShapeAynaImg} alt="ShapeAynaImg" />
				</div>
			</div>
			<div className="aximo-hero-thumb-shape1">
				<img src={StarShapeImg} alt="StarShapeImg" />
			</div>
		</div>
	);
}

export default HeroThumb;
