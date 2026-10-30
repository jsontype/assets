import Portfolio1Img from "../../../assets/images/portfolio/p_1.png";
import Portfolio2Img from "../../../assets/images/portfolio/p_2.png";
import Portfolio3Img from "../../../assets/images/portfolio/p_3.png";
import Portfolio4Img from "../../../assets/images/portfolio/p_4.png";
import Portfolio5Img from "../../../assets/images/portfolio/p_5.png";
import Portfolio6Img from "../../../assets/images/portfolio/p_6.png";
import Portfolio7Img from "../../../assets/images/portfolio/p_7.png";
import Portfolio8Img from "../../../assets/images/portfolio/p_8.png";
import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
	{
		id: crypto.randomUUID(),
		title: "Product Design",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Portfolio1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description: "Creating or refreshing a companys logo and developing a cohesive visual identity.",
		img: Portfolio2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "App UI/UX Design",
		description: "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
		img: Portfolio3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Packaging Design",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Environmental Design",
		description:
			"Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
		img: Portfolio5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Environmental Design",
		description:
			"Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
		img: Portfolio6Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Advertising Campaigns",
		description:
			"Developing creative concepts for print, digital, and video advertising campaigns, including ad design and copywriting",
		img: Portfolio7Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio8Img,
	},
];
function PortfolioList() {
	return (
		<div className="section aximo-project-page aximo-section-padding5">
			<div className="container">
				<div className="row">
					{portfolioListData.map((portfolio) => (
						<PortfolioCard key={portfolio.id} portfolio={portfolio} />
					))}
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;
