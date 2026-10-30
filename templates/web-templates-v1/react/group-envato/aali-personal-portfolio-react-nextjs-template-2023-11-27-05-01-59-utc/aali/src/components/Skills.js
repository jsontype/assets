import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });
  return (
    <div className="aali_tm_section" id="portfolio">
      <div className="aali_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="light"
              >
                <span>My Skills</span>
                <h3>
                  You Can Imagine
                  <br /> I Can Do
                </h3>
                <p>
                  I am working on a professional, visually sophisticated and
                  technologically proficient, responsive and multi-functional
                  creative personal resume portfolio template Aali
                </p>
              </div>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="dodo_progress">
                <div className="progress_inner skillsInner___" data-value={86}>
                  <span>
                    <span className="label">Website Design</span>
                    <span className="number">86%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={90}>
                  <span>
                    <span className="label">Mobile Application</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={66}>
                  <span>
                    <span className="label">Game Programming</span>
                    <span className="number">66%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span
          className="border moving_effect"
          data-direction="x"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Skills;
