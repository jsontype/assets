import { Outlet } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import Preloader from "../common/Preloader";
import ScrollToTop from "../common/ScrollToTop";
function Layout() {
	useScrollTop();
	return (
		<>
			<Preloader />
			<Outlet />
			<ScrollToTop />
		</>
	);
}

export default Layout;
