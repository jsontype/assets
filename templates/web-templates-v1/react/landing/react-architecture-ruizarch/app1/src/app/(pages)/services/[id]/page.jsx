
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import { notFound } from 'next/navigation';

import { getAllServicesIds, getServiceData } from "@library/services";

import PageBanner from "@components/PageBanner";
import ContactSection from "@components/sections/Contact";

const FullImageSlider = dynamic( () => import("@components/sliders/FullImage"), { ssr: false } );

import Link from "next/link";

export async function generateMetadata({ params }) {
    const postData = await getSingleServiceData(params);

    return {
        title: postData.title + " | Services",
    }
}

async function ServiceDetail( { params } ) {
  const postData = await getSingleServiceData(params);

  return (
    <>
      <PageBanner pageTitle={postData.title} breadTitle={postData.title} bgImage={"/img/photo/12.jpg"} />

      {/* service */}
      <section>
        <div className="container mil-p-120-60">
            <div className="mil-background-grid mil-softened"></div>
            <div className="row justify-content-between">
                <div className="col-lg-7">
                    {postData.description != undefined &&
                    <>
                        {postData.description.map((item, key) => (
                        <React.Fragment key={`service-description-${key}`}>
                            {item.layout == 1 &&
                            <>
                                <h2 className="mil-upper mil-up mil-mb-60">{item.title}</h2>
                                <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html: item.content}} />
                            </>
                            }
                            {item.layout == 2 &&
                            <>
                                <h2 className="mil-upper mil-up mil-mb-60">{item.title}</h2>
                                <div className="row justify-content-between">
                                    <div className="col-lg-6">
                                        <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: item.content}} />
                                    </div>
                                    <div className="col-lg-5">
                                        <ul className="mil-icon-list mil-mb-60">
                                            {item.list.map((list_item, list_key) => (
                                            <li className="mil-up" key={`service-description-${key}-list-${list_key}`}><img src="/img/icons/11.svg" alt="icon" />{list_item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                            }
                            {item.divider == true &&
                            <div className="mil-divider-lg mil-up mil-mb-60" />
                            }
                        </React.Fragment>
                        ))}
                    </>
                    }
                </div>
                <div className="col-lg-5">
                    <div className="mil-sidebar-frame mil-mb-60">
                        {postData.sidebar.title != undefined &&
                        <h2 className="mil-upper mil-up mil-mb-60">{postData.sidebar.title}</h2>
                        }

                        {postData.sidebar.items.map((item, key) => (
                        <React.Fragment key={`service-sidebar-${key}`}>
                            {item.layout == "list" &&
                            <>
                                <h6 className="mil-upper mil-up mil-mb-30">{item.title}</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    {item.content.map((list_item, list_key) => (
                                    <li key={`service-sidebar-${key}-values-${list_key}`}>{list_item}</li>
                                    ))}
                                </ul>
                            </>
                            }
                            {item.layout == "values" &&
                            <>
                                <div className="row">
                                    {item.content.map((list_item, list_key) => (
                                    <div className="col-6" key={`service-sidebar-${key}-values-${list_key}`}>

                                        <div className="mil-counter-frame mil-up mil-mb-30">
                                            <h5 className="mil-mb-5"><span className="mil-counter" data-number={list_item.value}>0</span>{list_item.afterValue}</h5>
                                            <p className="mil-dark" dangerouslySetInnerHTML={{__html: list_item.label}} />
                                        </div>

                                    </div>
                                    ))}
                                </div>
                            </>
                            }
                            {key+1 < postData.sidebar.items.length &&
                            <div className="mil-divider-lg mil-up mil-mb-30" />
                            }
                        </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <Suspense fallback={<div>Loading...</div>}>
        <FullImageSlider items={postData.gallery} />
      </Suspense>

      <section>
        <div className="container mil-p-120-60">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between">
                <div className="col-lg-7">

                    {postData.description2 != undefined &&
                    <>
                        {postData.description2.map((item, key) => (
                        <React.Fragment key={`service-description2-${key}`}>
                            {item.layout == 1 &&
                            <>
                                <h2 className="mil-upper mil-up mil-mb-60">{item.title}</h2>
                                <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html: item.content}} />
                            </>
                            }
                            {item.layout == 2 &&
                            <>
                                <h2 className="mil-upper mil-up mil-mb-60">{item.title}</h2>
                                <div className="row justify-content-between">
                                    <div className="col-lg-6">
                                        <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: item.content}} />
                                    </div>
                                    <div className="col-lg-5">
                                        <ul className="mil-icon-list mil-mb-60">
                                            {item.list.map((list_item, list_key) => (
                                            <li className="mil-up" key={`service-description2-${key}-list-${list_key}`}><img src="/img/icons/11.svg" alt="icon" />{list_item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                            }
                            {item.divider == true &&
                            <div className="mil-divider-lg mil-up mil-mb-60" />
                            }
                        </React.Fragment>
                        ))}
                    </>
                    }

                    {postData.faq != undefined &&
                    <>
                        <span className="mil-suptitle mil-upper mil-dark mil-up mil-mb-30">{postData.faq.subtitle}</span>
                        <h2 className="mil-upper mil-up mil-mb-60">{postData.faq.title}</h2>

                        <div className="mil-mb-60">
                            {postData.faq.items.map((item, key) => (
                            <div className="mil-accordion-group mil-dark mil-up" key={`faq-item-${key}`}>
                                <div className="mil-accordion-menu">

                                    <div className="mil-symbol mil-dark mil-thin mil-h3">
                                        <div className="mil-plus">+</div>
                                        <div className="mil-minus">-</div>
                                    </div>

                                    <h6 className="mil-upper">{item.label}</h6>

                                </div>
                                <div className="mil-accordion-content">
                                    <div className="mil-dark-soft" dangerouslySetInnerHTML={{__html: item.content}} />
                                </div>
                            </div>
                            ))}
                        </div>

                        <Link href={postData.faq.button.link} className="mil-button mil-up mil-mb-60">{postData.faq.button.label}</Link>
                    </>
                    }
                </div>
                <div className="col-lg-5">

                    <div className="mil-sidebar-frame mil-mb-60">

                        {postData.sidebar2.title != undefined &&
                        <h2 className="mil-upper mil-up mil-mb-60">{postData.sidebar.title}</h2>
                        }

                        {postData.sidebar2.items.map((item, key) => (
                        <React.Fragment key={`sidebar2-item-${key}`}>
                            {item.layout == "list" &&
                            <>
                                <h6 className="mil-upper mil-up mil-mb-30">{item.title}</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    {item.content.map((list_item, list_key) => (
                                    <li key={`sidebar2-item-${key}-values-${list_key}`}>{list_item}</li>
                                    ))}
                                </ul>
                            </>
                            }
                            {item.layout == "values" &&
                            <>
                                <div className="row">
                                    {item.content.map((list_item, list_key) => (
                                    <div className="col-6" key={`sidebar2-item-${key}-values-${list_key}`}>

                                        <div className="mil-counter-frame mil-up mil-mb-30">
                                            <h5 className="mil-mb-5"><span className="mil-counter" data-number={list_item.value}>0</span>{list_item.afterValue}</h5>
                                            <p className="mil-dark" dangerouslySetInnerHTML={{__html: list_item.label}} />
                                        </div>

                                    </div>
                                    ))}
                                </div>
                            </>
                            }
                            {key+1 < postData.sidebar2.items.length &&
                            <div className="mil-divider-lg mil-up mil-mb-30" />
                            }
                        </React.Fragment>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* service end */}
      
    <ContactSection />
      
    </>
  );
};
export default ServiceDetail;

export async function generateStaticParams() {
    const paths = getAllServicesIds()

    return paths
}

async function getSingleServiceData(params) {
    const postData = await getServiceData(params.id)

    if ( !postData ) {
        notFound()
    } else {
        return postData
    }
}