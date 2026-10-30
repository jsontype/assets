import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
import Dropdown from "./Dropdown";
function NavItem({ route, depthLevel, mobileSubMenu, handleSubMenu, mobileSubMenuSub, handleSubMenuSub }) {
	function handleClick(e) {
		e.stopPropagation();

		if (depthLevel === 0) {
			handleSubMenu(e, route.title);
		}

		if (depthLevel === 1) {
			handleSubMenuSub(e, route.title);
		}
	}

	return route?.subRoutes ? (
		depthLevel === 0 ? (
			<li className="nav-item nav-item-has-children" data-id={route.title} onClick={handleClick}>
				<a href="#" className="nav-link-item">
					{route.title} <i className="fas fa-angle-down"></i>
				</a>
				<Dropdown
					route={route}
					subRoutes={route?.subRoutes}
					depthLevel={depthLevel}
					mobileSubMenu={mobileSubMenu}
					mobileSubMenuSub={mobileSubMenuSub}
					handleSubMenuSub={handleSubMenuSub}
				/>
			</li>
		) : (
			<li className="sub-menu--item nav-item-has-children" data-id={route.title} onClick={handleClick}>
				<a href="#">
					{route.title} <i className="fas fa-angle-down"></i>
				</a>
				<Dropdown
					route={route}
					subRoutes={route?.subRoutes}
					depthLevel={depthLevel}
					mobileSubMenu={mobileSubMenu}
					mobileSubMenuSub={mobileSubMenuSub}
					handleSubMenuSub={handleSubMenuSub}
				/>
			</li>
		)
	) : (
		<li className={`${depthLevel > 0 ? "sub-menu--item" : "nav-item"}`} data-id={route.href}>
			<Link to={`/${route.href}`} className={`${depthLevel > 0 ? "" : "nav-link-item"}`}>
				{route.title}
			</Link>
		</li>
	);
}

export default NavItem;
