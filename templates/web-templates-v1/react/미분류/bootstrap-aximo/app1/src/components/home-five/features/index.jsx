import Icon1 from "../../../assets/images/v5/icon1.svg";
import Icon2 from "../../../assets/images/v5/icon2.svg";
import Icon3 from "../../../assets/images/v5/icon3.svg";
const featuresData = [
	{
		id: crypto.randomUUID(),
		title: "Responsive Results",
		description:
			"We help businesses & individuals promote their products, services or brands through various digital channels and platforms.",
		img: Icon1,
	},
	{
		id: crypto.randomUUID(),
		title: "Data-Driven Approach",
		description:
			"Effective digital marketing relies heavily on data and analytics. We often have a strong emphasis on collecting and analyzing data.",
		img: Icon2,
	},
	{
		id: crypto.randomUUID(),
		title: "Customized Strategies",
		description:
			"We maximize the client's online presence and achieve their specific objectives. Customization is the key to effective and impactful.",
		img: Icon3,
	},
];
function Features() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title libre-font">
					<div className="row">
						<div className="col-lg-7">
							<h2>Our key feature for productivity gains</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature) => (
						<div key={feature.id} className="col-xl-4 col-lg-6">
							<div className="aximo-iconbox-wrap6">
								<div className="aximo-iconbox-icon6">
									<img src={feature.img} alt={feature.title} />
								</div>
								<div className="aximo-iconbox-data6">
									<h3>{feature.title}</h3>
									<p>{feature.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Features;
