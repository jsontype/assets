import Data from "@data/sections/features.json";

const FeaturesSection = () => {
  return (
    <>
        {/* features */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                    {Data.items.map((item, key) => (
                    <div className="col-lg-4" key={`features-item-${key}`}>

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <h4 className="mil-upper mil-mb-30">{item.title}</h4>
                            <p>{item.text}</p>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* features end */}
    </>
  );
};

export default FeaturesSection;