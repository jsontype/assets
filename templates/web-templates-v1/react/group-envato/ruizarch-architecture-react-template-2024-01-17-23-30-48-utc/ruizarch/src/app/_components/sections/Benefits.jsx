import Data from "@data/sections/benefits.json";
import Link from "next/link";

const BenefitsSection = () => {
  return (
    <>
        {/* benefits */}
        <section>
            <div className="container mil-p-120-90">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-4">

                        <div className="mil-mb-90">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                        </div>

                    </div>
                    <div className="col-xl-7">

                        <div className="row">
                            {Data.items.map((item, key) => (
                            <div className="col-md-6 col-lg-6" key={`benefits-item-${key}`}>

                                <Link href={item.link} className="mil-service-card mil-up mil-mb-30">
                                    <div className="mil-center">
                                        <div className="mil-icon mil-icon-lg mil-mb-30">
                                            <img src={item.icon} alt={item.title} />
                                        </div>
                                        <h4 className="mil-upper mil-mb-20">{item.title}</h4>
                                        <div className="mil-divider-sm mil-mb-20" />
                                        <p className="mil-service-text">{item.text}</p>
                                        <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                                            <img src="/img/icons/1.svg" alt="icon" />
                                        </div>
                                    </div>
                                </Link>

                            </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
        {/* benefits end */}
    </>
  );
};

export default BenefitsSection;