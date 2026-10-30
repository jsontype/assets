import Data from "@data/sections/services-2.json";
import Link from "next/link";

const ServicesTwoSection = () => {
  return (
    <>
        {/* services two */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                    <div className="col-12">
                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                        </div>
                    </div>
                    
                    {Data.items.map((item, key) => (
                    <div className="col-lg-4" key={`services-two-item-${key}`}>

                        <div className="mil-up mil-mb-60">
                            <h4 className="mil-upper mil-mb-30">{item.title}</h4>
                            <p className="mil-mb-30">{item.text}</p>
                            <Link href={item.link} className="mil-link mil-upper">
                                Know More <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* services two end */}
    </>
  );
};

export default ServicesTwoSection;