import CountUp from "react-countup";
function Counter() {
	return (
		<div className="aximo-counter-section dark-bg">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-counter-title">
					<p>Our results speak for our ability to succeed</p>
				</div>
				<div className="aximo-counter-wrap3">
					<div className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={13} duration={3} redraw={true} enableScrollSpy />
							</span>
							+
						</h2>
						<p>Years of experience</p>
					</div>
					<div className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={85} duration={3} redraw={true} enableScrollSpy />
							</span>
							%
						</h2>
						<p>Average Conversion Rate</p>
					</div>
					<div className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={60} duration={3} redraw={true} enableScrollSpy />
							</span>
							m
						</h2>
						<p>Traffic Generated</p>
					</div>
					<div className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
							</span>
							%
						</h2>
						<p>Client satisfaction score</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Counter;
