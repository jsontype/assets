import Data from "@data/sections/calculator.json";
import Link from "next/link";

const CalculatorSection = () => {
    return (
        <>
            {/* calculator */}
            <section className="mil-soft-bg mil-relative">
                <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />

                <div className="container mil-p-120-90">
                    <div className="mil-background-grid mil-softened" />
                    
                    <div className="row justify-content-between">
                        <div className="col-lg-4">

                            <div className="mil-mb-60">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                            </div>

                        </div>
                        <div className="col-lg-7">

                            <form className="mil-mt-suptitle-offset mil-mb-30">
                                <div className="row">
                                    <div className="col-lg-6">

                                        <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                            <label className="mil-upper"><span>Remodeling place</span><span className="mil-required">*</span></label>
                                            <input type="text" placeholder="Home" />
                                        </div>

                                    </div>
                                    <div className="col-lg-6">

                                        <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                            <label className="mil-upper"><span>Area size</span><span className="mil-required">*</span></label>
                                            <input type="text" placeholder="м²" />
                                        </div>

                                    </div>
                                    <div className="col-lg-6">

                                        <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                            <label className="mil-upper"><span>Design style</span><span className="mil-required">*</span></label>
                                            <input type="text" placeholder="Modern" />
                                        </div>

                                    </div>
                                    <div className="col-lg-6">

                                        <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                            <label className="mil-upper"><span>Budget</span><span className="mil-required">*</span></label>
                                            <input type="text" placeholder="$" />
                                        </div>

                                    </div>
                                </div>
                                <div className="row align-items-end">
                                    <div className="col-lg-6">

                                        <div className="mil-up mil-mb-30">
                                            <button type="submit" className="mil-button mil-transparent-button">Calculate</button>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">

                                        <div className="mil-up mil-mb-30">
                                            <div className="mil-dark mil-mb-5">Your budget is:</div>
                                            <h4>USD$ 56.000 &nbsp;<span className="mil-text-sm mil-thin mil-dark-soft">/ No tax included</span></h4>
                                        </div>

                                    </div>
                                </div>
                            </form>
                            <div className="mil-up">
                                <div className="mil-divider-lg mil-mb-60"></div>
                            </div>
                            <div className="row align-items-end">
                                <div className="col-lg-6">

                                    <div className="mil-up mil-mb-30">
                                        <div className="mil-upper mil-dark mil-mb-10">Submit Your Ideas</div>
                                        <h4 className="mil-upper">Get Full Estimate Details</h4>
                                    </div>

                                </div>
                                <div className="col-lg-6 mil-mb-30">

                                    <div className="mil-adaptive-right mil-up">
                                        <Link href="/contact" className="mil-button">Get an Estimate</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* about end */}
        </>
    );
};

export default CalculatorSection;