"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const HeroOne = () => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    return (
        <>
            {/* banner */}
            <section className="mil-banner">
                <img src={Data.bg_image} className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" alt="image" />
                
                <div className="mil-overlay" />
                <div className="container">
                    <div className="mil-background-grid mil-top-space" />
                    <div className="mil-banner-content">
                        <div className="row align-items-end">
                            <div className="col-xl-7">
                                <div className="mil-mb-90">
                                    <span className="mil-suptitle mil-light mil-upper mil-mb-60">{Data.subtitle}</span>
                                    <h1 className="mil-upper mil-light mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
                                    <Link href={Data.button.link} className="mil-link mil-light mil-upper">{Data.button.label} <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span></Link>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="row mil-mb-60">
                                    {Data.numbers.map((item, key) => (
                                    <div className="col-6" key={`hero-numbers-item-${key}`}>
                                        <div className="mil-counter-frame mil-light mil-mb-30">
                                            <h4 className="mil-accent mil-thin mil-mb-10"><span className="mil-counter" data-number={item.value}>0</span>{item.valueAfter}</h4>
                                            <p className="mil-light" dangerouslySetInnerHTML={{__html : item.label}} />
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default HeroOne;