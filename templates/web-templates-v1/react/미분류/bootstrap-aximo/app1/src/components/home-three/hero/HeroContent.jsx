import StarImg from "../../../assets/images/v3/star.svg";
function HeroContent() {
	return (
		<div className="aximo-hero-content3">
			<p>
				<span>#1 SEO agency for fast-growing companies</span>
			</p>
			<h1>Provides the best ranking experience</h1>
			<p>
				We work to improve your business visibility within search engines, boost organic traffic to your website
				and rank for the most valuable keywords.
			</p>
			<div className="aximo-hero-subscription">
				<form action="#">
					<input type="email" placeholder="Enter your email address" />
					<button id="aximo-hero-subscription-btn" type="submit">
						<span className="aximo-label-up">Get started</span>
						<span className="aximo-label-up">Get started</span>
					</button>
				</form>
			</div>
			<div className="aximo-hero-rating">
				<ul>
					<li>
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
					</li>
					<li>4.8/5 stars based on 1K client reviews</li>
				</ul>
			</div>
		</div>
	);
}

export default HeroContent;
