import Data from "@data/sections/call-to-action.json";
import Link from "next/link";

const CallToActionSection = ( { bg } ) => {
  return (
    <>
        {/* call to action */}
        <section>
            <div className="container mil-p-0-120">
                <div className="row justify-content-between">
                    <div className="col-lg-4">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                        <h2 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                    </div>
                    <div className="col-lg-4 mil-mt-suptitle-offset">
                        <p className="mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                    </div>
                    <div className="col-lg-3 mil-mt-suptitle-offset">
                        <div className="mil-adaptive-right mil-up">
                            <Link href={Data.button.link} className="mil-button">{Data.button.label}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action end */}
    </>
  );
};

export default CallToActionSection;