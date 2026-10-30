'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service1() {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>

            <section className="service-section pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                WHAT WE OFFER
                            </div>
                            <h2 className="stitle">
                                Most <span className="fw-400">experienced</span> services
                            </h2>
                        </div>
                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            View All Service
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    {/*Service Tabing section*/}
                    <div className="row g-xxl-6 g-4">
                        <div className="service-tabing-wrap Faqs-section">
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 1 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(1)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                01
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href="/service-details" className="white-clr whitehover">
                                                    Digitalization
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                We build intelligent next-generation solutions at the intersection of new
                                                business opportunities and technological
                                                innovations.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Legacy Modernization
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Solution Design
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Technology Enabling
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Mobile-First Systems
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab1.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 2 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(2)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                02
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href="/service-details" className="white-clr whitehover">
                                                    Modernization
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                We build intelligent next-generation solutions at the intersection of new
                                                business opportunities and technological
                                                innovations.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Legacy Modernization
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Solution Design
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Technology Enabling
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Mobile-First Systems
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab2.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 3 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(3)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                03
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href="/service-details" className="white-clr whitehover">
                                                    Accelerating Innovation
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                We build intelligent next-generation solutions at the intersection of new
                                                business opportunities and technological
                                                innovations.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Legacy Modernization
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Solution Design
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Technology Enabling
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Mobile-First Systems
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab3.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${isAccordion === 4 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(4)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                04
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href="/service-details" className="white-clr whitehover">
                                                    Business consulting
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                We build intelligent next-generation solutions at the intersection of new
                                                business opportunities and technological
                                                innovations.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Legacy Modernization
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Solution Design
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Technology Enabling
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Mobile-First Systems
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab4.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Service Tabing section*/}
                </div>
            </section>
        </>
    )
}
