function Accordion() {
	return (
		<div className="accordion aximo-accordion-wrap" id="aximo-accordion">
			<div className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
					>
						01/ Project idea
					</button>
				</h3>
				<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						The process starts with a detailed discussion with the client to understand their idea & goals.
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
						02/ Brainstorming
					</button>
				</h3>
				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						rainstorming is a group creativity technique in which members attempt to find a conclusion.
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
						03/ Launch
					</button>
				</h3>
				<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						The completed design assets or final product are delivered with necessary documentation.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Accordion;
