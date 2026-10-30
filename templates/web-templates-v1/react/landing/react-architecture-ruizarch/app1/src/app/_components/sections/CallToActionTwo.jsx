import Data from "@data/sections/call-to-action-2.json";
import Link from "next/link";

const CallToActionTwoSection = ( { bg } ) => {
  return (
    <>
        {/* call to action two */}
        <section className="mil-dark-bg mil-relative mil-o-hidden">
            <img src={Data.bg_image} className="mil-bg-img mil-scale" alt="image" style={{"objectPosition": "top"}} data-value-1="1" data-value-2="1.2" />

            <div className="mil-overlay" />
            
            <div className="container mil-p-120-120">
                <div className="mil-background-grid" />

                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="mil-center">
                            <span className="mil-suptitle mil-upper mil-light mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-upper mil-light mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <div className="mil-complex-actions">
                                <Link href={Data.button.link} className="mil-button mil-up">{Data.button.label}</Link>
                                <div className="mil-phone-box">
                                    <p className="mil-accent mil-mb-5">{Data.phone.label}</p>
                                    <h4 className="mil-light mil-thin">{Data.phone.value}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action two end */}
    </>
  );
};

export default CallToActionTwoSection;