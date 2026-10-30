import Data from "@data/sections/services.json";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <>
        {/* services */}
        <section className="mil-soft-bg mil-relative">
            <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />
            
            <div className="container mil-p-120-90">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                    <div className="col-12">

                        <div className="mil-center mil-mb-90">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                        </div>

                    </div>

                    {Data.items.map((item, key) => (
                    <div key={`services-item-${key}`} className="col-lg-4">

                        <Link href={item.link} className="mil-service-card mil-up mil-mb-30">
                            <div className="mil-card-number">{item.num}</div>
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
        </section>
        {/* services end */}
    </>
  );
};

export default ServicesSection;