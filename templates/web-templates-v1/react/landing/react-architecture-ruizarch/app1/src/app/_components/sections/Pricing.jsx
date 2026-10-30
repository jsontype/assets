import Data from "@data/sections/pricing.json";
import Link from "next/link";

const PricingSection = () => {
    return (
        <>
        {/* prices */}
        <section>
            <div className="container mil-p-120-90">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row">
                    <div className="col-12">

                        <div className="mil-center mil-mb-90">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                        </div>

                    </div>

                    {Data.items.map((item, key) => (
                    <div className="col-lg-4" key={`pricing-item-${key}`}>

                        <div className="mil-price-card mil-up mil-mb-30">
                            <div className="mil-price-head mil-up mil-mb-15">
                                <div className="mil-upper mil-dark mil-mb-15">{item.title}</div>
                                <div className="mil-flex align-items-center mil-mb-30">
                                    <div className="mil-price mil-dark mil-bold">{item.price.value}</div>
                                    <div className="mil-dark mil-price-text mil-text-sm" dangerouslySetInnerHTML={{__html : item.price.after}} />
                                </div>
                            </div>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <div className="mil-price-body">
                                <ul className="mil-icon-list mil-mb-30">
                                    {item.list.map((list_item, list_key) => (
                                    <li key={`pricing-item-${key}-list-${list_key}`} className={list_item.active ? "mil-accent mil-up" : "mil-up"}><img src="/img/icons/11.svg" alt="icon" />{list_item.value}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mil-price-button mil-up">
                                <Link href={item.button.link} className="mil-button mil-fw">{item.button.label}</Link>
                            </div>
                        </div>

                    </div>
                    ))}

                </div>
            </div>
        </section>
        {/* prices end */}
        </>
    );
};

export default PricingSection;