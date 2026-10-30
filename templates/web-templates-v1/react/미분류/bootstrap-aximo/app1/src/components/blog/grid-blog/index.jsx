import Categories from "../Categories";
import RecentPosts from "../RecentPosts";
import Search from "../Search";
import Tags from "../Tags";

import Blog1Img from "../../../assets/images/blog/blog6.png";
import Blog2Img from "../../../assets/images/blog/blog7.png";
import Blog3Img from "../../../assets/images/blog/blog8.png";
import Blog4Img from "../../../assets/images/blog/blog9.png";
import Blog5Img from "../../../assets/images/blog/blog10.png";
import Blog6Img from "../../../assets/images/blog/blog11.png";
import GridBlogCard from "./GridBlogCard";

const gridBlogData = [
	{
		id: crypto.randomUUID(),
		title: "I've high-income skills to build your business",
		category: "Marketing",
		date: "June 18, 2024",
		img: Blog1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "I run a $10,000/month business with 0 employees",
		category: "Business",
		date: "June 18, 2024",
		img: Blog2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Different types loan and how to deal with",
		date: "June 18, 2024",
		img: Blog3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Business analytics is a practice essential",
		category: "Solutions",
		date: "June 12, 2024",
		img: Blog4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "A person business with fun and success",
		category: "Brand",
		date: "June 12, 2024",
		img: Blog5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Three guys have me for a seat in business",
		category: "Business",
		date: "June 22, 2024",
		img: Blog6Img,
	},
];
function GridBlog() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="row">
							{gridBlogData.map((blog) => (
								<GridBlogCard key={blog.id} blog={blog} />
							))}
						</div>
					</div>
					<div className="col-lg-4">
						<div className="right-sidebar">
							<Search />
							<Categories />
							<RecentPosts />
							<Tags />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GridBlog;
