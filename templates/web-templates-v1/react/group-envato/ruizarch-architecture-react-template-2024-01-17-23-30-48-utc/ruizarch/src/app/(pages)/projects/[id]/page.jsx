import React, { Suspense } from "react";
import { notFound } from 'next/navigation';
import dynamic from "next/dynamic";

import { getSortedProjectsData, getAllProjectsIds, getProjectData } from "@library/projects";

import PageBannerTwo from "@components/PageBannerTwo";
import BenefitsSection from "@components/sections/Benefits";
const FullImageSlider = dynamic( () => import("@components/sliders/FullImage"), { ssr: false } );

import Link from "next/link";

export async function generateMetadata({ params }) {
  const postData = await getSingleProjectData(params);
  
  return {
      title: postData.title + " | Projects",
  }
}

async function ProjectDetail ( { params } ) {
  const postData = await getSingleProjectData(params);
  const projects = await getAllProjects();

  //prev next navigation
  let prev = { "id": 0, "key": 0 }
  let next = { "id": 0, "key": 0 }
  let first = { "id": 0 }
  let last = { "id": 0 }

  projects.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  })

  projects.forEach(function(item, key){
    if ( key == prev.key ) { prev.id = item.id; }
    if ( key == next.key ) { next.id = item.id; }
    if ( key == 0 ) { first.id = item.id; }
    if ( key == projects.length-1 ) { last.id = item.id; }
  });

  if ( prev.key == -1 ) { prev.id = last.id; }
  if ( next.key == projects.length ) { next.id = first.id; }

  return (
    <>
      <PageBannerTwo subTitle={postData.intro.subtitle} title={postData.intro.title} bgImage={postData.intro.bgImage} />

      {/* description */}
      <section>
          <div className="container mil-p-120-90">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-between">
                  <div className="col-lg-4">

                      <div className="mil-mb-60">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: postData.description.heading.subtitle}} />
                          <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: postData.description.heading.title}} />
                      </div>

                  </div>
                  <div className="col-lg-7 mil-mt-suptitle-offset">
                      <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: postData.description.content}} />
                      
                      {postData.description.avatar != undefined &&
                      <div className="row">
                          <div className="col-lg-4">

                              <div className="mil-item-frame mil-up mil-mb-30">
                                  <div className="mil-about-counter mil-center">
                                      <div className="mil-avatar mil-mb-30">
                                          <img src={postData.description.avatar.image} alt={postData.description.avatar.name} />
                                      </div>
                                      <h5 className="mil-upper mil-mb-10">{postData.description.avatar.name}</h5>
                                      <p className="mil-text-sm mil-dark-soft">{postData.description.avatar.role}</p>
                                  </div>
                              </div>

                          </div>
                          <div className="col-lg-8">

                              <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: postData.description.avatar.text}} />
                              
                          </div>
                      </div>
                      }

                  </div>
              </div>
          </div>
      </section>
      {/* description end */}

      <div className="container">
          <div className="mil-divider-lg" />
      </div>

      {/* info */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened" />

              <div className="mil-mb-90">
                  <h2 className="mil-upper mil-up">{postData.details.title}</h2>
              </div>
              <div className="row mil-mb-30">
                  {postData.details.items.map((item, key) => (
                  <div className="col-lg-3" key={`project-details-item-${key}`}>

                      <h6 className="mil-upper mil-up mil-mb-30">{item.label}</h6>
                      <ul className="mil-list mil-dark mil-up mil-mb-60">
                          <li>{item.value}</li>
                      </ul>

                  </div>
                  ))}
              </div>
          </div>
      </section>
      {/* info end */}

      <Suspense fallback={<div>Loading...</div>}>
        <FullImageSlider items={postData.gallery} />
      </Suspense>
      
      <BenefitsSection />

      <div className="container">
          <div className="mil-divider-lg" />
      </div>

      {/* resume */}
      <section>
          <div className="container mil-p-120-90">
              <div className="row justify-content-between">
                  <div className="col-lg-6">

                      <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: postData.resume.title}} />
                      <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html: postData.resume.content}} />
                      
                      {postData.resume.signature != undefined &&
                      <div className="row align-items-center mil-up">
                          <div className="col-lg-4 mil-mb-30">
                              <h5 className="mil-upper mil-mb-10">{postData.resume.signature.name}</h5>
                              <p>{postData.resume.signature.role}</p>
                          </div>
                          <div className="col-lg-6 mil-mb-30">
                              <h2 className="mil-font-2 mil-thin">{postData.resume.signature.text}</h2>
                          </div>
                      </div>
                      }
                  </div>
                  <div className="col-lg-5 mil-mt-suptitle-offset">

                      <div className="mil-review-frame mil-mb-30" data-swiper-parallax-x="-200" data-swiper-parallax-opacity="0">
                          <div className="mil-reviev-head mil-up">
                              <div className="mil-left">
                                  <div className="mil-quote">
                                      <img src="/img/icons/12.svg" alt="icon" />
                                  </div>
                              </div>
                          </div>
                          <div className="mil-up">
                              <div className="mil-review-text">
                                  <h3 className="mil-font-2 mil-mb-30" dangerouslySetInnerHTML={{__html: postData.resume.quote.text}} />
                                  <p className="mil-text-sm">{postData.resume.quote.author}</p>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>
      {/* resume end */}

      <div className="container">
          <div className="mil-divider-lg" />
      </div>

      {/* next/prev project */}
      <section>
          <div className="container mil-p-120-60">
              <div className="row">
                  <div className="col-md-6 col-lg-6">
                      {prev.id != 0 &&
                      <div className="mil-prev-project mil-mb-60">
                          <h4 className="mil-upper mil-up mil-mb-30">Previous project</h4>
                          <Link href={`/projects/${prev.id}`} className="mil-link mil-left-link mil-upper mil-up">Previous work <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                      </div>
                      }
                  </div>
                  <div className="col-md-6 col-lg-6">
                      {next.id != 0 &&
                      <div className="mil-next-project mil-mb-60">
                          <h4 className="mil-upper mil-up mil-mb-30">Next project</h4>
                          <Link href={`/projects/${next.id}`} className="mil-link mil-upper mil-up">Next work <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                      </div>
                      }
                  </div>
              </div>
          </div>
      </section>
      {/* next/prev project end */}

    </>
  );
};
export default ProjectDetail;

export async function generateStaticParams() {
  const paths = getAllProjectsIds()

  return paths
}

async function getSingleProjectData(params) {
  const postData = await getProjectData(params.id)
  
  if ( !postData ) {
    notFound()
  } else {
    return postData
  }
}

async function getAllProjects() {
  const allProjects = await getSortedProjectsData()

  return allProjects
}