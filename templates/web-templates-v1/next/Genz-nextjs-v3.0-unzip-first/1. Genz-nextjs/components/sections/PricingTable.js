import Link from "next/link";
const PricingTable = () => {
    return (
        <>
            <div className="text-center mt-30 mb-50">
                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">
                    The best work solution,
                    <br />
                    for the best price.
                </h2>
            </div>
            <div className="row mt-50 mb-30">
                <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                    <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                        <div className="card-pricing-top border-gray-800">
                            <h3 className="color-white mb-10">Free</h3>
                            <p className="text-lg color-gray-500 mb-15">Best for personal use</p>
                            <p className="text-base color-gray-500 mb-30">Get started without creadit card or payment method</p>
                            <Link className="btn btn-border-linear" href="#">
                                Try for free
                            </Link>
                            <Link className="btn btn-link-more" href="#">
                                Learn more
                            </Link>
                        </div>
                        <div className="card-pricing-bottom">
                            <h6 className="color-white mb-25">What you get:</h6>
                            <ul className="list-checked">
                                <li>Unlimited Storage</li>
                                <li>Unlimited Members</li>
                                <li>Two-Factor Authentication</li>
                                <li>Collaborative Docs</li>
                                <li>Unlimited Storage</li>
                                <li>Sprint Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                    <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                        <label className="lbl-success text-base color-gray-900">Popular</label>
                        <div className="card-pricing-top border-gray-800">
                            <h3 className="color-white mb-10">Business</h3>
                            <p className="text-lg color-gray-500 mb-15">Best for personal use</p>
                            <p className="text-base color-gray-500 mb-30">Get started without creadit card or payment method</p>
                            <Link className="btn btn-border-linear" href="#">
                                Get started
                            </Link>
                            <Link className="btn btn-link-more" href="#">
                                Learn more
                            </Link>
                        </div>
                        <div className="card-pricing-bottom">
                            <h6 className="color-white mb-25">What you get:</h6>
                            <ul className="list-checked">
                                <li>Unlimited Storage</li>
                                <li>Unlimited Members</li>
                                <li>Two-Factor Authentication</li>
                                <li>Collaborative Docs</li>
                                <li>Unlimited Storage</li>
                                <li>Sprint Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                    <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                        <label className="lbl-danger text-base color-gray-900">Premium</label>
                        <div className="card-pricing-top border-gray-800">
                            <h3 className="color-white mb-10">Enterprise</h3>
                            <p className="text-lg color-gray-500 mb-15">Best for personal use</p>
                            <p className="text-base color-gray-500 mb-30">Get started without creadit card or payment method</p>
                            <Link className="btn btn-border-linear" href="#">
                                Get started
                            </Link>
                            <Link className="btn btn-link-more" href="#">
                                Learn more
                            </Link>
                        </div>
                        <div className="card-pricing-bottom">
                            <h6 className="color-white mb-25">What you get:</h6>
                            <ul className="list-checked">
                                <li>Unlimited Storage</li>
                                <li>Unlimited Members</li>
                                <li>Two-Factor Authentication</li>
                                <li>Collaborative Docs</li>
                                <li>Unlimited Storage</li>
                                <li>Sprint Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PricingTable;
