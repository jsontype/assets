import Data from "@data/sections/about-4.json";

const AboutFourSection = () => {
    return (
        <>
            {/* about four */}
            <section>
                <div className="container mil-p-120-30">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-90">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />

                                <ul className="mil-icon-list mil-mb-60">
                                    {Data.items.map((item, key) => (
                                    <li className="mil-up" key={`about-four-list-item-${key}`}><img src="/img/icons/11.svg" alt="icon" />{item}</li>
                                    ))}
                                </ul>

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
            {/* about four end */}
        </>
    );
};

export default AboutFourSection;