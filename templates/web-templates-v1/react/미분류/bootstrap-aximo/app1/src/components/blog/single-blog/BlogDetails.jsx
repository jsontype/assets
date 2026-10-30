import { LazyLoadImage } from "react-lazy-load-image-component";
import Blog3PreviewImg from "../../../assets/images/blog/blog3-preview.webp";
import Blog3Img from "../../../assets/images/blog/blog3.png";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import PostMeta from "./PostMeta";
import PostTags from "./PostTags";
function BlogDetails() {
	return (
		<>
			<div className="post-thumbnail">
				<LazyLoadImage
					src={Blog3Img}
					width={850}
					height={500}
					alt="Single blog image"
					effect="blur"
					placeholderSrc={Blog3PreviewImg}
				/>
			</div>
			<div className="single-post-content-wrap">
				<PostMeta />
				<div className="entry-content">
					<h3>Learn these five high-income skills to build your one-person business and get rich</h3>
					<p>
						By definition, most high-value skill stacks can’t be taught in schools. If the masses could
						easily access them, they wouldn’t be high-value skills anymore. You would become replaceable.
						And value comes from scarcity. Here’s the skill stack to thrive as a one-person business.
					</p>

					<span>#1: Learn to Tweet your way into a boardroom</span>
					<p>
						As a first-generation immigrant, money and networks weren’t given to me. So instead of going
						through the front door, I tried a back door approach.
					</p>

					<span>#2: Web Development and Design</span>
					<p>
						Proficiency in web development and design allows you to create and maintain websites for
						clients. As more businesses and individuals seek an online presence.
					</p>

					<blockquote>
						"Mastering high-income skills can empower you to build a one-person business and create the path
						to financial."
					</blockquote>

					<span>#3: Copywriting and Content Creation</span>
					<p>
						Strong copywriting and content creation skills are essential for creating persuasive, engaging,
						and valuable content for websites, blogs, marketing materials, and social media.
					</p>

					<span>#4: Digital Product Creation</span>
					<p>
						Creating digital products like e-books, online courses, webinars, or software can generate
						substantial income. This skill involves not only product creation but also marketing and selling
						these digital assets to your target audience.
					</p>

					<span>#5: Sales and Persuasion</span>
					<p>
						Mastering the art of sales and persuasion can help you sell products or services, whether they
						are your own or those of other businesses. Understanding consumer.
					</p>
					<p>
						While these skills can help you build a one-person business and increase your income potential,
						it's changing market trends. Additionally, starting and growing a business often involves more
						than just one skill, so consider a holistic approach to building your business and wealth.
					</p>
					<PostTags />
					<CommentList />
					<CommentForm />
				</div>
			</div>
		</>
	);
}

export default BlogDetails;
