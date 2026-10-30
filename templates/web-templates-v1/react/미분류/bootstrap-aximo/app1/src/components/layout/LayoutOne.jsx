import { Outlet } from "react-router-dom";
import Footer from "../home-one/footer";
import Header from "../home-one/header";
function LayoutOne() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutOne;
