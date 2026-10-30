import Star2Img from "../../assets/images/v1/star2.png";
function FaqAccordion() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						<span className="aximo-title-animation">
							These FAQs help
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star" />
							</span>
						</span>
						clients learn about us
					</h2>
				</div>

				<div className="accordion aximo-accordion-wrap" id="aximo-accordion">
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
							>
								What services does your design agency offer?
							</button>
						</h3>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								Clients often seek to understand the range of design services an agency provides, such
								as graphic design, web design, branding, and more. We offer a wide range of design
								services, including graphic design, web design, branding, UI/UX design, and more.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header" id="headingOne">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
							>
								What industries or types of clients do you typically work with?
							</button>
						</h3>
						<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
							<div className="accordion-body">
								This question helps potential clients determine if the agency has experience in their
								specific industry or with similar projects. Our agency stands out due to our creative
								expertise, attention to detail, and commitment to delivering designs that not only look
								great.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
							>
								Can you provide examples of your previous work/portfolio?
							</button>
						</h3>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								Yes, we're proud to showcase a portfolio of our previous projects. You can find examples
								of our work on our website or request a tailored portfolio relevant to your needs.
								Clients often want to see examples of the agency's previous projects to assess the
								quality and style.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFour"
							>
								What is your design process like?
							</button>
						</h3>
						<div
							id="collapseFour"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								Explaining the design agency's process from initial concept to final delivery helps
								clients understand what to expect.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFive"
							>
								How do you handle revisions and feedback during a project?
							</button>
						</h3>
						<div
							id="collapseFive"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								Clients are interested in knowing how the agency manages feedback and makes revisions to
								ensure the final design meets their expectations. We value client feedback and work
								closely with you to make sure you're happy with the final design.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseSix"
							>
								Do you offer ongoing support after project completion?
							</button>
						</h3>
						<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
							<div className="accordion-body">
								Yes, we offer ongoing support, maintenance, and updates as needed, ensuring that your
								design assets and projects remain up to date and functional. Some clients may have
								urgent projects, so it's important to communicate if the agency can accommodate rush
								orders.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FaqAccordion;
