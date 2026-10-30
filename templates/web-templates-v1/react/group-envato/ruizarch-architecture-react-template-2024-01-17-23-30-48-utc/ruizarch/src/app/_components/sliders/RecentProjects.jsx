"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/recent-projects';
import Link from "next/link";

const RecentProjectsSlider = () => {
  return (
    <>
    {/* recent projects slider */}
    <section>
        <div className="container mil-p-120-30">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-60">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                        <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                        <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />

                        <div className="row align-items-center">
                            <div className="col-lg-5">

                                <div className="mil-avatar-frame mil-up mil-mb-30">
                                    <div className="mil-avatar mil-mb-30">
                                        <img src={Data.avatar.image} alt={Data.avatar.name} />
                                    </div>
                                    <h5 className="mil-upper mil-mb-10">{Data.avatar.name}</h5>
                                    <p className="mil-text-sm mil-dark-soft">{Data.avatar.subname}</p>
                                </div>

                            </div>
                            <div className="col-lg-7">

                                <ul className="mil-icon-list mil-mb-30">
                                    {Data.links.map((item, key) => (
                                    <li key={`recent-projects-links-item-${key}`} className="mil-hover mil-up"><Link href={item.link}><img src="/img/icons/11.svg" alt="icon" />{item.title}</Link></li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        <Swiper
                            {...SliderProps.milIllustrationSlider}
                            className="swiper-container mil-illustration-slider"
                        >
                                {Data.items.map((item, key) => (
                                <SwiperSlide className="swiper-slide" key={`illustration-slider-item-${key}`}>
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src={item.image} alt={item.alt} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                ))}
                        </Swiper>
                        <div className="mil-illustration-slider-nav mil-up">
                            <div className="mil-nav-buttons">
                                <div className="mil-slider-button mil-illustration-prev">Prev</div>
                                <div className="mil-slider-button mil-illustration-next">Next</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* recent projects slider end */}
    </>
  );
};
export default RecentProjectsSlider;
