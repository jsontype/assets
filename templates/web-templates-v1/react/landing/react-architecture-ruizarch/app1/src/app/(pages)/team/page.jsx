import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedTeamData } from "@library/team";

import PageBanner from "@components/PageBanner";
import RecruitSection from "@components/sections/Recruit";

const TeamMasonry = dynamic( () => import("@components/TeamMasonry"), { ssr: false } );

export const metadata = {
  title: {
		default: "Team",
	},
  description: AppData.settings.siteDescription,
}

async function Team() {
  const team = await getAllTeam();
  
  return (
    <>
      <PageBanner pageTitle={"Leadership"} breadTitle={"Team"} bgImage={"/img/photo/12.jpg"} />
         
      {/* team */}
      <section>
        <div className="container mil-p-120-60">
            <div className="mil-background-grid mil-softened" />

            <div className="mil-center">
                <p className="mil-text-lg mil-up mil-mb-90">It is a long established fact that a reader will be distracted <br/>by the readable content.</p>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <TeamMasonry team={team} categories={AppData.team.categories} />
            </Suspense>
        </div>
      </section>
      {/* team end */}

      <RecruitSection />
    </>
  );
};
export default Team;

async function getAllTeam() {
  const allTeam = getSortedTeamData();
  return allTeam;
}