import BargerMenuImg from "../../../assets/images/v4/barger-menu.svg";
function HeaderButton({ setShowSideMenu, showSideMenu }) {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-lg-inline-flex">
			<button
				className="aximo-default-btn aximo-header-btn outline-btn pill barger-menu"
				onClick={() => setShowSideMenu(!showSideMenu)}
			>
				<img src={BargerMenuImg} alt="BargerMenuImg" />
				Menu
			</button>
		</div>
	);
}

export default HeaderButton;
