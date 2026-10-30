import Data from "@data/sections/skills.json";

const SkillsSection = () => {
  return (
    <>
        {/* skills */}
        <section className="mil-soft-bg mil-relative">
            <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />

            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5">

                        <div className="mil-mb-90">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />
                        </div>

                    </div>
                    <div className="col-lg-6">
                        {Data.items.map((item, key) => (
                        <div className="mil-skill-frame mil-mb-30" key={`skills-item-${key}`}>
                            <div className="mil-skill-counter-frame">
                                <div className="mil-bold"><span className="mil-counter" data-number={item.value}>0</span>%</div>
                            </div>
                            <div className="mil-skill-track">
                                <div className="mil-skill-prog" data-value-1="0%" data-value-2={`${item.value}%`}></div>
                                <div className="mil-skill-text mil-bold mil-dark mil-upper">{item.label}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        {/* skills end */}
    </>
  );
};

export default SkillsSection;