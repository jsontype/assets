
import React, { Suspense } from "react";

import { notFound } from 'next/navigation';

import { getAllTeamIds, getTeamData } from "@library/team";

export async function generateMetadata({ params }) {
    const postData = await getSingleTeamData(params);

    return {
        title: postData.name + " | Our Team",
    }
}

async function TeamDetail( { params } ) {
  const postData = await getSingleTeamData(params);

  return (
    <>
      {/* team member */}
      <section className="mil-soft-bg mil-team-member-wrapper">
        <div className="container mil-p-0-120">
            <div className="mil-team-member-frame">
                <div className="mil-left-side">
                    <div className="mil-member-portrait">
                        <img src={postData.fullImage} alt={postData.name} />
                    </div>
                </div>
                <div className="mil-right-side">

                    <div className="mil-p-30-30">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">{postData.role}</span>
                        <h3 className="mil-upper mil-up mil-mb-30">{postData.name}</h3>

                        <ul className="mil-list mil-dark mil-up mil-mb-30">
                            {postData.info.map((item, key) => (
                            <li key={`team-membre-info-item-${key}`}>{item}</li>
                            ))}
                        </ul>

                        <ul className="mil-hori-list mil-dark mil-up mil-mb-30">
                            {postData.social.map((item, key) => (
                            <li key={`team-social-item-${key}`}><a href={item.link} target="_blank">{item.label}</a></li>
                            ))}
                        </ul>
                        <div className="mil-divider-lg mil-up mil-mb-30" />
                        <div className="mil-up mil-text mil-text-sm mil-mb-30" dangerouslySetInnerHTML={{__html: postData.description}} />
                        <h2 className="mil-font-2 mil-thin mil-up">{postData.signature}</h2>
                    </div>

                </div>
            </div>

        </div>
      </section>
      {/* team member end */}
    </>
  );
};
export default TeamDetail;

export async function generateStaticParams() {
    const paths = getAllTeamIds()

    return paths
}

async function getSingleTeamData(params) {
    const postData = await getTeamData(params.id)

    if ( !postData ) {
        notFound()
    } else {
        return postData
    }
}