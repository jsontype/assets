import Data from "@data/sections/recruit.json";
import Link from "next/link";

const RecruitSection = () => {
    return (
        <>
            {/* recruit */}
            <section>
                <div className="container mil-p-120-30">
                    <div className="mil-background-grid mil-softened"></div>
                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-90">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />
                                <Link href={Data.button.link} className="mil-button mil-upper mil-up">{Data.button.label} </Link>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-illustration mil-up mil-mb-90">
                                <div className="mil-image-frame">
                                    <img src={Data.image.url} alt={Data.image.alt} className="mil-scale" data-value-1="1" data-value-2="1.3" />
                                </div>
                                <div className="mil-about-counter mil-center">
                                    <div className="mil-avatar mil-mb-30">
                                        <img src={Data.avatar.image} alt={Data.avatar.name} />
                                    </div>
                                    <h5 className="mil-upper mil-mb-10">{Data.avatar.name}</h5>
                                    <p className="mil-text-sm mil-dark-soft">{Data.avatar.subname}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* recruit end */}
        </>
    );
};

export default RecruitSection;