"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from "@data/sliders/hero-2.json";
import Link from "next/link";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const HeroTwoSlider = () => {
  useEffect(() => {
    ScrollAnimation();
  }, []);

  return (
    <>
        {/* hero two slider */}
        <section className="mil-banner">
            <Swiper
                {...SliderProps.milBannerSlider2}
                className="swiper-container mil-banner-slider-2"
            >
                {Data.items.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`hero-two-slider-item-${key}`}>
                    <img src={item.image} className="mil-bg-img" alt={item.alt} data-swiper-parallax-x="300" data-swiper-parallax-scale="1.3" />
                    <div className="mil-overlay" />
                    <div className="container">
                        <div className="mil-background-grid mil-top-space" />
                        <div className="mil-banner-content" data-swiper-parallax-y="300" data-swiper-parallax-opacity="0">

                            <div className="mil-mb-90">
                                <span className="mil-suptitle mil-light mil-upper mil-mb-60" dangerouslySetInnerHTML={{__html : item.subtitle}} />
                                <h1 className="mil-upper mil-light mil-mb-60" dangerouslySetInnerHTML={{__html : item.title}} />
                                <Link href={item.link} className="mil-link mil-light mil-upper">
                                    View A Project 
                                    <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>

            <div className="mil-nav-position">
                <div className="container">
                    <div className="mil-banner-slider-panel">
                        <div className="mil-banner-pagination mil-mb-30" />
                        <div className="mil-nav-buttons mil-light mil-mb-30">
                            <div className="mil-slider-button mil-banner-prev">Prev</div>
                            <div className="mil-slider-button mil-banner-next">Next</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* hero two slider end */}
    </>
  );
};
export default HeroTwoSlider;
