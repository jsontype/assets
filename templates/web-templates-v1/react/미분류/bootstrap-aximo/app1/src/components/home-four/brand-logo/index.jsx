import Brand1Img from "../../../assets/images/v4/b_1.png";
import Brand2Img from "../../../assets/images/v4/b_2.png";
import Brand3Img from "../../../assets/images/v4/b_3.png";
import Brand4Img from "../../../assets/images/v4/b_4.png";
import Brand5Img from "../../../assets/images/v4/b_5.png";
import Brand6Img from "../../../assets/images/v4/b_6.png";
import Brand7Img from "../../../assets/images/v4/b_7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [
	{
		id: crypto.randomUUID(),
		img: Brand1Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand2Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand3Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand4Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand5Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand6Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand7Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand1Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand2Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand3Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand4Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand5Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand6Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand7Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand1Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand2Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand3Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand4Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand5Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand6Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand7Img,
	},
];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		},
		1400: {
			slidesPerView: 6,
		},
	},
};
function BrandLogo() {
	return (
		<div className="aximo-brandlogo-section2 extra-side-margin">
			<div className="aximo-brandlogo-title">
				<p>We help hundreds of companies to grow</p>
			</div>
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-brandlogo-item">
									<img src={item.img} alt="brand logo" />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default BrandLogo;
