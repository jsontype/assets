import RatingImg from "../../../assets/images/v6/rating.png";
function TestimonialCard({ testimonial: { title, text, rating, author } }) {
	return (
		<div className="col-xl-4 col-md-6">
			<div className="aximo-testimonial-wrap5">
				<div className="aximo-testimonial-data5">
					<ul>
						{[...Array(rating)].map(() => (
							<li key={crypto.randomUUID()}>
								<img src={RatingImg} alt="rating" />
							</li>
						))}
					</ul>
					<h3>{title}</h3>
					<p>{`“${text}”`}</p>
					<h6>
						{author.name} <span>{author.designation}</span>
					</h6>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
