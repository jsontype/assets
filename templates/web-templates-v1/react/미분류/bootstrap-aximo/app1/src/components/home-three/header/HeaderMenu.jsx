import { Link } from "react-router-dom";
function HeaderMenu() {
	return (
		<div className="menu-block-wrapper">
			<div className="menu-overlay"></div>
			<nav className="menu-block" id="append-menu-header">
				<div className="mobile-menu-head">
					<div className="go-back">
						<i className="fa fa-angle-left"></i>
					</div>
					<div className="current-menu-title"></div>
					<div className="mobile-menu-close">&times;</div>
				</div>
				<ul className="site-menu-main">
					<li className="nav-item nav-item-has-children">
						<a href="#" className="nav-link-item drop-trigger">
							Demo <i className="fas fa-angle-down"></i>
						</a>
						<ul className="sub-menu" id="submenu-1">
							<li className="sub-menu--item">
								<Link to="/">
									<span className="menu-item-text">Design Agency</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/home-two">
									<span className="menu-item-text">Startup Agency</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/home-three">
									<span className="menu-item-text">SEO Agency</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/home-four">
									<span className="menu-item-text">Business Consultation</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/home-five">
									<span className="menu-item-text">Digital Marketing</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/home-six">
									<span className="menu-item-text">Interior Design Agency</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/home-seven">
									<span className="menu-item-text">Advertising agency</span>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to="/about-us" className="nav-link-item">
							About Us
						</Link>
					</li>
					<li className="nav-item nav-item-has-children">
						<a href="#" className="nav-link-item drop-trigger">
							Pages <i className="fas fa-angle-down"></i>
						</a>
						<ul className="sub-menu" id="submenu-2">
							<li className="sub-menu--item">
								<Link to="/about-us">
									<span className="menu-item-text">About Us</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/pricing">
									<span className="menu-item-text">Pricing</span>
								</Link>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									blog <i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-3">
									<li className="sub-menu--item">
										<Link to="/blog">
											<span className="menu-item-text">Our Blog</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/blog-grid">
											<span className="menu-item-text">Blog grid</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/single-blog">
											<span className="menu-item-text">blog details</span>
										</Link>
									</li>
								</ul>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									Service<i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-4">
									<li className="sub-menu--item">
										<Link to="/service">
											<span className="menu-item-text">service</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/single-service">
											<span className="menu-item-text">service details</span>
										</Link>
									</li>
								</ul>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									Team<i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-5">
									<li className="sub-menu--item">
										<Link to="/team">
											<span className="menu-item-text">team</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/single-team">
											<span className="menu-item-text">team details</span>
										</Link>
									</li>
								</ul>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									Portfolio<i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-6">
									<li className="sub-menu--item">
										<Link to="/portfolio-one">
											<span className="menu-item-text">Portfolio One Column</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/portfolio-two">
											<span className="menu-item-text">Portfolio Two Column</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/single-portfolio">
											<span className="menu-item-text">Single Portfolio</span>
										</Link>
									</li>
								</ul>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									Utility<i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-7">
									<li className="sub-menu--item">
										<Link to="/faq">
											<span className="menu-item-text">faq</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/errors-404">
											<span className="menu-item-text">Error 404</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/testimonial">
											<span className="menu-item-text">testimonial</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/coming-soon">
											<span className="menu-item-text">Coming Soon</span>
										</Link>
									</li>
								</ul>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									Account<i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-8">
									<li className="sub-menu--item">
										<Link to="/sign-up">
											<span className="menu-item-text">sign up</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/sign-in">
											<span className="menu-item-text">sign in</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/reset-password">
											<span className="menu-item-text">reset password</span>
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="nav-item nav-item-has-children">
						<a href="#" className="nav-link-item drop-trigger">
							Blog <i className="fas fa-angle-down"></i>
						</a>
						<ul className="sub-menu" id="submenu-9">
							<li className="sub-menu--item">
								<Link to="/blog">
									<span className="menu-item-text">blog</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/blog-grid">
									<span className="menu-item-text">Blog grid</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/single-blog">
									<span className="menu-item-text">blog Details</span>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to="/contact-us" className="nav-link-item">
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default HeaderMenu;
