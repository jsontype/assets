import { useState } from "react";
import ModalVideo from "react-modal-video";
import PlayBtnImg from "../../../assets/images/v1/play-btn.svg";
import VideoBg from "../../../assets/images/v1/video-bg.png";

function Video() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="aximo-video-wrap">
			<img src={VideoBg} alt="VideoBg" />
			<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="Vx2aLNgGoAE"
				onClose={() => setOpen(false)}
			/>
			<button className="aximo-video-popup play-btn1 video-init" onClick={() => setOpen(true)}>
				<img src={PlayBtnImg} alt="PlayBtnImg" />
			</button>
		</div>
	);
}

export default Video;
