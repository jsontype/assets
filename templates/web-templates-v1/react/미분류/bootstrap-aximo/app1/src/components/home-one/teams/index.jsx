import Star2Img from "../../../assets/images/v1/star2.png";
import TeamCard from "./TeamCard";

function Teams({ teams }) {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						We have a team of
						<span className="aximo-title-animation">
							creative people
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{teams.map((team) => (
						<TeamCard key={team.id} team={team} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Teams;
