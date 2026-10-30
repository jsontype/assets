import Data from "@data/sections/ideas.json";
import Link from "next/link";

const IdeasSection = () => {
    return (
        <>
            {/* ideas */}
            <section>
                <div className="container mil-p-0-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6">

                            <div>
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <Link href={Data.button.link} className="mil-link mil-upper mil-up">
                                    {Data.button.label}
                                    <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
                                </Link>
                            </div>

                        </div>
                        <div className="col-lg-5 mil-mt-suptitle-offset">

                            <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.description}} />

                            <div className="row">
                                {Data.items.map((item, key) => (
                                <div className="col-sm-4" key={`ideas-item-${key}`}>

                                    <Link href={item.link} className="mil-icon-box mil-sm-center mil-mb-30">
                                        <div className="mil-icon mil-icon-accent-bg mil-up mil-mb-30">
                                            <img src={item.icon} alt="icon" />
                                        </div>
                                        <h6 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : item.label}} />
                                    </Link>

                                </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ideas end */}
        </>
    );
};
export default IdeasSection;