/* eslint-disable react/prop-types */
import NavItem from "./NavItem";
import { routes } from "./routes";
function Navbar({
	toggleMenu,
	handleMenu,
	handleGoBack,
	mobileSubMenu,
	handleSubMenu,
	mobileSubMenuSub,
	handleSubMenuSub,
	menuTitle,
}) {
	let depthLevel = 0;

	return (
		<nav className={`menu-block ${toggleMenu ? "active" : ""}`}>
			<div className={`mobile-menu-head ${mobileSubMenu && "active"}`}>
				<div className="go-back" onClick={handleGoBack}>
					<i className="fa fa-angle-left"></i>
				</div>
				<div className="current-menu-title">{menuTitle}</div>
				<div className="mobile-menu-close" onClick={handleMenu}>
					&times;
				</div>
			</div>
			<ul className="site-menu-main">
				{routes.map((route) => (
					<NavItem
						key={route.title}
						route={route}
						depthLevel={depthLevel}
						mobileSubMenu={mobileSubMenu}
						handleSubMenu={handleSubMenu}
						mobileSubMenuSub={mobileSubMenuSub}
						handleSubMenuSub={handleSubMenuSub}
					/>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
