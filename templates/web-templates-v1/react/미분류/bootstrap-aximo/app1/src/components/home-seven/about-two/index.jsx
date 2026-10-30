import CheckImg from "../../../assets/images/v7/check.png";
import ThumbImg from "../../../assets/images/v7/thumb2.png";
function AboutTwo() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<div className="aximo-content-thumb ">
							<img src={ThumbImg} alt="thumb" />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="aximo-default-content bricolage-font">
							<h2>Identifying the most appropriate media channels</h2>
							<p>
								We identify the most appropriate media channels to reach the target audience. We
								negotiate & purchase advertising space or time, optimizing placement for maximum impact
								and cost-effectiveness.
							</p>
							<div className="aximo-list-icon2">
								<ul>
									<li>
										<img src={CheckImg} alt="check mark" />
										<span>Creative Development: </span> We are responsible for creating attractive
										and eye-catching advertisements across various platforms.
									</li>
									<li>
										<img src={CheckImg} alt="check mark" />
										<span>Media Planning and Buying:</span> We negotiate and purchase advertising
										space or time, optimizing placement for maximum impact.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutTwo;
