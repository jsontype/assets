import Data from "@data/sections/about-3.json";
import Link from "next/link";

const AboutThreeSection = () => {
    return (
        <>
            {/* about three */}
            <section>
                <div className="container mil-p-0-30">
                    <div className="mil-background-grid mil-softened"></div>
                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-90">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />
                                <ul className="mil-icon-list mil-mb-60">
                                    {Data.items.map((item, key) => (
                                    <li className="mil-hover mil-up" key={`about-three-list-item-${key}`}><Link href={item.link}><img src="/img/icons/11.svg" alt="icon" />{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-illustration mil-up mil-mb-90">
                                <div className="mil-image-frame">
                                    <img src={Data.image.url} alt={Data.image.alt} className="mil-scale" data-value-1="1" data-value-2="1.3" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* about three end */}
        </>
    );
};

export default AboutThreeSection;