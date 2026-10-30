"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from "@data/sliders/hero-1.json";
import Link from "next/link";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const HeroOneSlider = () => {
  useEffect(() => {
    ScrollAnimation();
  }, []);

  return (
    <>
        {/* hero one slider */}
        <section className="mil-banner">
            <Swiper
                {...SliderProps.milBannerSlider}
                className="swiper-container mil-banner-slider mil-scale"
                data-value-1=".4" 
                data-value-2="1.4"
            >
                {Data.items.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`hero-one-slider-item-${key}`}>
                    <img src={item.image} className="mil-bg-img" alt={item.alt} style={{"objectPosition": "top"}} data-swiper-parallax-x="300" data-swiper-parallax-scale="1.3" />
                </SwiperSlide>
                ))}
            </Swiper>
            
            <div className="mil-overlay" />

            <div className="container">
                <div className="mil-background-grid mil-top-space" />

                <div className="mil-banner-content">
                    <div className="row justify-content-between align-items-end">
                        <div className="col-xl-7">

                            <div className="mil-mb-90">
                                <div className="mil-light-soft mil-mb-60" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h1 className="mil-upper mil-light mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <Link href={Data.button.link} className="mil-link mil-light mil-upper">
                                    {Data.button.label} 
                                    <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                                </Link>
                            </div>

                        </div>
                        <div className="col-xl-4">

                            <div className="mil-banner-slider-panel mil-mb-60">
                                <div className="mil-banner-pagination mil-mb-30" />
                                <div className="mil-nav-buttons mil-light mil-mb-30">
                                    <div className="mil-slider-button mil-banner-prev">Prev</div>
                                    <div className="mil-slider-button mil-banner-next">Next</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* hero one slider end */}
    </>
  );
};
export default HeroOneSlider;
