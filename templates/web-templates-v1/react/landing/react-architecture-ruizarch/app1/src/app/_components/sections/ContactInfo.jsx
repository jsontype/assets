import Data from "@data/sections/contact-info.json";
import Link from "next/link";

const ContactInfoSection = () => {
  return (
    <>
        {/* contact info */}
        <section>
            <div className="container mil-p-0-120">
                <div className="mil-background-grid mil-softened" />

                <div className="mil-contact-frame mil-up">
                    <div className="row justify-content-between align-items-center">
                        {Data.items.map((item, key) => (
                        <div className="col-lg-4 mil-mb-30" key={`contact-info-item-${key}`}>
                            <p className="mil-dark mil-up mil-mb-10">{item.label}</p>
                            <h4 className="mil-thin mil-up">{item.value}</h4>
                        </div>
                        ))}
                        <div className="col-lg-3 mil-mb-30">
                            <Link href={Data.button.link} className="mil-button mil-up mil-fw">{Data.button.label}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* contact info end */}
    </>
  );
};

export default ContactInfoSection;