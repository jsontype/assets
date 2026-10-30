'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {style === 1 &&

                <a onClick={() => setOpen(true)} className="video-popup">
                    <span className="icon">
                        <i className="fas fa-play" />
                    </span>
                    <img src="/assets/img/element/bn1-circle.png" alt="img" className="hero-circle" />
                </a>
            }
            {style === 2 &&
                <a onClick={() => setOpen(true)} className="video-popup step-textcircle">
                    <span className="icon d-center radius100">
                        <i className="fas fa-play" />
                    </span>
                    <img src="/assets/img/element/step-textcircle.png" alt="img" className="step-circle" />
                </a>
            }
            {style === 3 &&
                <a onClick={() => setOpen(true)} className="video-popup position-relative">
                <span className="icons themebg radius100 d-center">
                    <i className="fas fa-play" />
                </span>
                <img src="/assets/img/element/watch-ciricle01.png" alt="img" className="circle" />
            </a>
            }
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}