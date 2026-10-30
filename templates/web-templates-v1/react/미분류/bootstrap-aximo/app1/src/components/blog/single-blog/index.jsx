import Categories from "../Categories";
import RecentPosts from "../RecentPosts";
import Search from "../Search";
import Tags from "../Tags";
import BlogDetails from "./BlogDetails";
function SingleBlog() {
	return (
		<div className="section post-details-page aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<BlogDetails />
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

export default SingleBlog;
