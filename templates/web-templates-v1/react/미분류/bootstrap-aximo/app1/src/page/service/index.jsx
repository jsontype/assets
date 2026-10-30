import BreadCrumb from "../../components/common/Breadcrumb";
import TwoColumnFaq from "../../components/contact/TwoColumnFaq";
import AutoSlider from "../../components/home-one/auto-slider";
import Services from "../../components/home-one/services";
import WhyChooseUs from "../../components/home-one/why-choose-us";

const services = [
	{
		id: crypto.randomUUID(),
		title: "UI/UX Design",
		description:
			"Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description:
			"Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Web Design",
		description:
			"Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Motion Graphics",
		description:
			"Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
		icon: "icon-design-thinking",
	},
	{
		id: crypto.randomUUID(),
		title: "Packaging Design",
		description:
			"Creating packaging solutions for products that not only protect them but also attract customers on store shelves.",
		icon: "icon-layers",
	},
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description:
			"Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
		icon: "icon-rating-stars-1",
	},
	{
		id: crypto.randomUUID(),
		title: "Illustration",
		description:
			"Producing custom illustrations for editorial content, books, websites, marketing materials, magazines and more.",
		icon: "icon-chef",
	},
	{
		id: crypto.randomUUID(),
		title: "Product Design",
		description:
			"Developing the look and feel of physical products, considering ergonomics, aesthetics, and functionality.",
		icon: "icon-target-1",
	},
];

function ServicePage() {
	return (
		<>
			<BreadCrumb title="Service" />
			<Services services={services} />
			<AutoSlider />
			<WhyChooseUs />
			<TwoColumnFaq />
		</>
	);
}

export default ServicePage;
