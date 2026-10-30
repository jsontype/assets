import Logo from "../../../assets/images/logo/logo-white.svg";
import InstagramThumb from "../../../assets/images/v4/instagram-thumb3.png";
function HeaderSideMenu({ showSideMenu, setShowSideMenu }) {
	return (
		<div className="aximo-sidemenu-wraper">
			<div className={`aximo-sidemenu-column ${showSideMenu === true ? "active" : ""}`}>
				<div className="aximo-sidemenu-body">
					<div className="aximo-sidemenu-logo">
						<a href="">
							<img src={Logo} alt="Logo" />
						</a>
					</div>
					<p>
						We're dedicated to helping business grow and succeed. With years of industry experience and a
						passion for problem-solving, we offer top-level consulting service tailored to your unique
						needs.
					</p>
					<div className="aximo-sidemenu-thumb">
						<img src={InstagramThumb} alt="InstagramThumb" />
					</div>
					<div className="aximo-info-wrap">
						<div className="aximo-info">
							<ul>
								<li>Give us a call:</li>
								<li>
									<a href="">(123) 456-7890</a>
								</li>
							</ul>
						</div>
						<div className="aximo-info">
							<ul>
								<li>Send us an email:</li>
								<li>
									<a href="">info@mthemeus.com</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="aximo-social-icon aximo-social-icon3">
						<ul>
							<li>
								<a href="">
									<i className="icon-twitter"></i>
								</a>
							</li>
							<li>
								<a href="">
									<i className="icon-facebook"></i>
								</a>
							</li>
							<li>
								<a href="">
									<i className="icon-instagram"></i>
								</a>
							</li>
							<li>
								<a href="">
									<i className="icon-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
					<div className="aximo-copywright4 light">
						<p>© Copyright 2024, All Rights Reserved by Mthemeus</p>
					</div>
				</div>
				<span className="aximo-sidemenu-close" onClick={() => setShowSideMenu(!showSideMenu)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M6 18L18 6M6 6L18 18"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</span>
			</div>
			<div className={`offcanvas-overlay ${showSideMenu === true ? "active" : ""}`}></div>
		</div>
	);
}

export default HeaderSideMenu;
