"use client";

import Data from "@data/sections/cores.json";
import Link from "next/link";

import { useEffect } from "react";
import { Accordion } from "@common/utilits";

const CoresSection = () => {
  useEffect(() => {
    Accordion();
  }, []);

  return (
    <>
        {/* cores */}
        <section className="mil-dark-bg mil-relative mil-o-hidden">
            <img src={Data.bg_image} className="mil-bg-img mil-scale" alt="image" style={{"objectPosition": "top"}} data-value-1="1" data-value-2="1.2" />
            <div className="mil-overlay" />

            <div className="container mil-p-120-90">
                <div className="mil-background-grid" />

                <div className="row justify-content-between">
                    <div className="col-lg-5">

                        <div className="mil-mb-90">
                            <span className="mil-suptitle mil-upper mil-light mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-upper mil-light mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-light-soft mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />
                            <Link href={Data.button.link} className="mil-link mil-light mil-upper mil-up">
                                {Data.button.label} 
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>

                    </div>
                    <div className="col-lg-6 mil-mt-suptitle-offset">
                        {Data.items.map((item, key) => (
                        <div className="mil-accordion-group mil-up" key={`cores-item-${key}`}>
                            <div className="mil-accordion-menu">

                                <div className="mil-symbol mil-light mil-thin mil-h3">
                                    <div className="mil-plus">+</div>
                                    <div className="mil-minus">-</div>
                                </div>

                                <h6 className="mil-upper mil-light">{item.title}</h6>

                            </div>
                            <div className="mil-accordion-content">
                                <p className="mil-light-soft mil-mb-30">{item.text}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        {/* cores end */}
    </>
  );
};
export default CoresSection;