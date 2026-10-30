import Data from "@data/sections/counters.json";
import Link from "next/link";

const CountersSection = () => {
  return (
    <>
        {/* counters */}
        <section className="mil-dark-bg mil-relative mil-o-hidden">
            <img src={Data.bg_image} className="mil-bg-img mil-scale" alt="image" data-value-1="1" data-value-2="1.4" />

            <div className="mil-overlay" />
            
            <div className="container mil-p-120-0">
                <div className="mil-background-grid" />

                <div className="row justify-content-between align-items-end">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-light mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-light-soft mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />
                            
                            <Link href={Data.button.link} className="mil-link mil-light mil-upper mil-up">
                                {Data.button.label} 
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>

                    </div>
                    <div className="col-lg-6">

                        <div className="row mil-mb-60">
                            {Data.items.map((item, key) => (
                            <div className="col-lg-4" key={`counters-item-${key}`}>

                                <div className="mil-mb-30">
                                    <h2 className="mil-light mil-up mil-mb-15"><span className="mil-counter" data-number={item.value}>0</span></h2>
                                    <p className=" mil-bold mil-upper mil-up mil-accent">{item.label}</p>
                                </div>

                            </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
        {/* counters end */}
    </>
  );
};
export default CountersSection;