import Data from "@data/sections/contact.json";
import ContactForm from "@components/ContactForm";

const ContactSection = () => {
  return (
    <>
        {/* contact */}
        <section className="mil-soft-bg mil-relative">
            <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />

            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-60">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <div className="mil-divider-lg mil-up mil-mb-30" />

                            {Data.items.map((item, key) => (
                            <ul className="mil-list mil-dark mil-up mil-mb-30" key={`contact-item-${key}`}>
                                {item.list.map((list, list_key) => (
                                <li key={`contact-item-${key}-list-${list_key}`}>{list}</li>
                                ))}
                            </ul>
                            ))}
                        </div>

                    </div>
                    <div className="col-lg-7">
                        <ContactForm subtitleOffset={1} />
                    </div>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default ContactSection;