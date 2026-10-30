import { Link } from "react-router-dom";
import ErrorImg from "/src/assets/images/about/404.png";
import ArrowRightImg from "/src/assets/images/icon/arrow-right.svg";
import Star2Img from "/src/assets/images/v1/star2.png";
export default function ErrorPage() {
	return (
		<div className="section">
			<div className="container">
				<div className="aximo-errors-wrap">
					<div className="aximo-errors-thumb">
						<img src={ErrorImg} alt="Error" />
					</div>
					<div className="aximo-errors-title">
						<h2>
							We can’t find the page
							<span className="aximo-title-animation">
								you are looking for
								<span className="aximo-title-icon">
									<img src={Star2Img} alt="" />
								</span>
							</span>
						</h2>
					</div>
					<Link className="aximo-errors-btn" to="/">
						Return to homepage
						<span>
							<img src={ArrowRightImg} alt="arrow" />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
