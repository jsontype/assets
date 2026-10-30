/* eslint-disable react/prop-types */

import NavItem from "./NavItem";

const Dropdown = ({ route, subRoutes, depthLevel, mobileSubMenu, mobileSubMenuSub, handleSubMenuSub }) => {
	depthLevel = depthLevel + 1;

	return depthLevel === 1 ? (
		<ul className={`sub-menu ${mobileSubMenu === route.title ? "active" : ""}`}>
			{subRoutes.map((route) => (
				<NavItem
					key={route.title}
					route={route}
					depthLevel={depthLevel}
					handleSubMenuSub={handleSubMenuSub}
					mobileSubMenuSub={mobileSubMenuSub}
				/>
			))}
		</ul>
	) : (
		<ul className={`sub-menu shape-none ${mobileSubMenuSub === route.title ? "active" : ""}`}>
			{subRoutes.map((route) => (
				<NavItem
					key={route.title}
					route={route}
					depthLevel={depthLevel}
					handleSubMenuSub={handleSubMenuSub}
					mobileSubMenuSub={mobileSubMenuSub}
				/>
			))}
		</ul>
	);
};

export default Dropdown;
