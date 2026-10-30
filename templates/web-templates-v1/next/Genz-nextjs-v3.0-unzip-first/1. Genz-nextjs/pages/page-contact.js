import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"

export default function PageContact() {
    return (
        <>
            <Head>
                <title>
                    Genz - Contact
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-70">
                                    <h1 className="color-linear d-inline-block mb-30">Contact Us</h1>
                                    <p className="text-xl color-gray-500">We are AliThemes , a creative and dedicated group of individuals who love web development<br className="d-none d-lg-block" />almost as much as we love our customers. We are passionate team with the mission for<br className="d-none d-lg-block" />achieving the perfection in web design. All designs are made by love with pixel perfect design<br className="d-none d-lg-block" />and excellent coding quality. Speed, security and SEO friendly alway in our mind.</p>
                                </div>
                                <div className="text-center mt-30">
                                    <div className="d-inline-block support text-start">(48) 654-430-309<br />(01) 6532-430-309</div>
                                    <div className="d-inline-block location text-start">contact@genz.com<br />sales@genz.com</div>
                                    <div className="d-inline-block plane text-start">11567 E Broadview Dr<br />Colorado(CO), 80117</div>
                                </div>
                                <div className="box-map mt-70 mb-50">
                                    <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1666967642011!5m2!1svi!2s" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                                <div className="form-contact">
                                    <div className="text-center">
                                        <h3 className="color-linear d-inline-block mb-10">Drop Us a Line</h3>
                                        <p className="text-xs color-gray-500">Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div className="row mt-50">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Your name *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Email *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Phone number *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Subject *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control bg-gray-850 border-gray-800 color-gray-500" rows={5} placeholder="Message *" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="text-center mb-50"><Link href="#" className="btn btn-linear btn-load-more btn-radius-8 hover-up">
                                                Send Message
                                                <i className="fi-rr-arrow-small-right" /></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}