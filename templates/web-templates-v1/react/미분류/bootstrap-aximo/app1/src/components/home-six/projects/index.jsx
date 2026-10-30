import Shape2Img from "../../../assets/images/v6/shapes2.png";
import Project1Img from "../../../assets/images/v6/p_1.png";
import Project2Img from "../../../assets/images/v6/p_2.png";
import Project3Img from "../../../assets/images/v6/p_3.png";
import Project4Img from "../../../assets/images/v6/p_4.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Corporate Elegance",
		img: Project1Img,
		colSize: "6",
	},
	{
		id: crypto.randomUUID(),
		title: "Corporate Elegance",
		img: Project2Img,
		colSize: "6",
	},
	{
		id: crypto.randomUUID(),
		title: "Corporate Elegance",
		img: Project3Img,
		colSize: "8",
	},
	{
		id: crypto.randomUUID(),
		title: "Corporate Elegance",
		img: Project4Img,
		colSize: "4",
	},
];
function Projects() {
	return (
		<div className="section aximo-section-padding5 position-relative">
			<div className="container">
				<div className="aximo-section-title playfair center max-width-xl">
					<h2>Explore our latest interior design project</h2>
				</div>
				<div className="row">
					{projectsData.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
			<div className="aximo-p-shape">
				<img src={Shape2Img} alt="Shape" />
			</div>
		</div>
	);
}

export default Projects;
