import Data from "@data/sections/about-2.json";
import Link from "next/link";

const AboutTwoSection = () => {
    return (
        <>
            {/* about two */}
            <section>
                <div className="container mil-p-120-30">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-90">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />

                                <Link href={Data.button.link} className="mil-link mil-upper mil-up mil-mb-30">
                                    {Data.button.label} 
                                    <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
                                </Link>

                                <div className="row">
                                    {Data.items.map((item, key) => (
                                    <div className="col-6" key={`about-two-item-${key}`}>

                                        <div className="mil-counter-frame mil-up">
                                            <h4 className="mil-mb-5"><span className="mil-counter" data-number={item.value}>0</span>{item.valueAfter}</h4>
                                            <p className="mil-dark" dangerouslySetInnerHTML={{__html : item.label}} />
                                        </div>

                                    </div>
                                    ))}
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-illustration mil-up mil-mb-90">
                                <div className="mil-image-frame">
                                    <img src={Data.image.url} alt={Data.image.alt} className="mil-scale" data-value-1="1" data-value-2="1.3" />
                                </div>
                                <div className="mil-about-counter mil-center">
                                    <div className="mil-avatar mil-mb-30">
                                        <img src={Data.avatar.image} alt={Data.image.name} />
                                    </div>
                                    <h5 className="mil-upper mil-mb-10">{Data.avatar.name}</h5>
                                    <p className="mil-text-sm mil-dark-soft">{Data.avatar.subname}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* about two end */}
        </>
    );
};

export default AboutTwoSection;