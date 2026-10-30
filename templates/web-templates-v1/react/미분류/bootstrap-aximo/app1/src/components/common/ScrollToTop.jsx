import { useEffect, useState } from "react";

export default function ScrollToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 700) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		showTopBtn && (
			<div className="aximo-go-top" onClick={goToTop}>
				<i className="fas fa-arrow-up"></i>
			</div>
		)
	);
}
