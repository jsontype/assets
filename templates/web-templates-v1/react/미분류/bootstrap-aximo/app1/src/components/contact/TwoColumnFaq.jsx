import Star2Img from "../../assets/images/v1/star2.png";
import QuestionImg from "../../assets/images/icon/question.svg";
const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "What services does agency offer?",
			text: "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding.",
		},
		{
			id: crypto.randomUUID(),
			title: "What is your design process like?",
			text: "Explaining the design agency's process from initial concept to final delivery helps clients understand what to expect.",
		},
		{
			id: crypto.randomUUID(),
			title: "How much does design work cost?",
			text: "The cost of our design services varies depending on the scope of the project. We provide customized quotes after discussing requirements.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "What's your design process like?",
			text: "Our design process typically involves discovery, concept development, design, revisions based on feedback, and finalization.",
		},
		{
			id: crypto.randomUUID(),
			title: "How do you handle user feedback?",
			text: "We value client feedback and work closely with you to make sure user happy with the final design. We offer a specific number of revisions.",
		},
		{
			id: crypto.randomUUID(),
			title: "Can we see samples of your work?",
			text: "Yes, we're proud to showcase a portfolio of our previous projects. You can find examples of our work on our website or view our portfolio.",
		},
	],
};
function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						These FAQs help
						<span className="aximo-title-animation">
							clients learn about us
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{faqData.faq1.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{faqData.faq2.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwoColumnFaq;
