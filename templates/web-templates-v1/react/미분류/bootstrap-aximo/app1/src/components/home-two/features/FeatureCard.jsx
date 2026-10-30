function FeatureCard({ feature: { title, description, img } }) {
	return (
		<div className="col-xl-4 col-md-6">
			<div className="aximo-iconbox-wrap2">
				<div className="aximo-iconbox-icon2">
					<img src={img} alt="Illustrator1Img" />
				</div>
				<div className="aximo-iconbox-data2">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default FeatureCard;
