import Data from "@data/sections/vision.json";
import Link from "next/link";

const VisionSection = () => {
  return (
    <>
        {/* vision */}
        <section>
            <div className="container mil-p-0-120">
                <div className="mil-background-grid mil-softened" />

                <div className="mil-center mil-mb-120">
                    <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                    <h2 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                </div>

                <div className="row mil-mb-30">
                    {Data.items.map((item, key) => (
                    <div className="col-lg-4 mil-up" key={`vision-item-${key}`}>

                        <div className="mil-icon-box mil-center mil-mb-60">
                            <div className="mil-icon mil-icon-xl mil-icon-border mil-mb-30">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h4 className="mil-upper mil-mb-30">{item.title}</h4>
                            <p>{item.text}</p>
                        </div>

                    </div>
                    ))}
                </div>

                <div className="row justify-content-center mil-center">
                    <div className="mil-center mil-up">
                        <Link href={Data.button.link} className="mil-link mil-upper">{Data.button.label} <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                    </div>
                </div>
            </div>
        </section>
        {/* vision end */}
    </>
  );
};

export default VisionSection;