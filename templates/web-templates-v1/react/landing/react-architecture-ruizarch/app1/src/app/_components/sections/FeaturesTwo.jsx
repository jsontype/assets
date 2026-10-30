import Data from "@data/sections/features-2.json";

const FeaturesTwoSection = () => {
  return (
    <>
        {/* features two */}
        <section className="mil-soft-bg mil-relative">
            <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />

            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                    {Data.items.map((item, key) => (
                    <div className="col-lg-4" key={`features-two-item-${key}`}>

                        <div className="div mil-mb-60">
                            <h3 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : item.title}} />
                            <div className="mil-divider-sm mil-up mil-mb-30" />
                            <p className="mil-shortened mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : item.text}} />
                            <ul className="mil-icon-list mil-mb-60">
                                {item.list.map((list_item, list_key) => (
                                <li className="mil-up" key={`features-two-item-${key}-list-${list_key}`}><img src="/img/icons/11.svg" alt="icon" />{list_item}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* features two end */}
    </>
  );
};

export default FeaturesTwoSection;