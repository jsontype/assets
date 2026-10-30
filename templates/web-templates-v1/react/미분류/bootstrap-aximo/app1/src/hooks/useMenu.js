import { useState } from "react";
function useMenu() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [mobileSubMenu, setMobileSubMenu] = useState("");
	const [mobileSubMenuSub, setMobileSubMenuSub] = useState("");
	const [menuTitle, setMenuTitle] = useState("");

	const handleMenu = () => {
		setToggleMenu(false);
		setMobileSubMenu("");
		setMobileSubMenuSub("");
	};

	const handleSubMenu = (e, id) => {
		e.preventDefault();
		setMobileSubMenu(id);

		if (e.target.tagName === "A") {
			const content = e.target.firstChild.textContent;
			setMenuTitle(content);
		} else {
			const content = e.target.parentElement.textContent;
			setMenuTitle(content);
		}
	};

	const handleSubMenuSub = (e, id) => {
		e.preventDefault();
		setMobileSubMenuSub(id);
		if (e.target.tagName === "A") {
			const content = e.target.firstChild.textContent;
			setMenuTitle(content);
		} else {
			const content = e.target.parentElement.textContent;
			setMenuTitle(content);
		}
	};

	const handleGoBack = () => {
		if (mobileSubMenuSub) {
			setMobileSubMenuSub("");
			return;
		}
		if (mobileSubMenu) {
			setMobileSubMenu("");
			return;
		}
	};

	return {
		toggleMenu,
		setToggleMenu,
		mobileSubMenu,
		setMobileSubMenu,
		mobileSubMenuSub,
		setMobileSubMenuSub,
		handleSubMenu,
		handleSubMenuSub,
		handleGoBack,
		handleMenu,
		menuTitle,
		setMenuTitle,
	};
}

export default useMenu;
