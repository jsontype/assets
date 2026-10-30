import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Design Skills</div>
          <div className="subtitle">Creative ability</div>
        </div>
        {/* skills items */}
        <div className="skills percent">
          <ul>
            <li>
              <div className="name">Web Layout</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Illustrations</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Graphic Design</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Language Skills</div>
          <div className="subtitle">Reading and writing</div>
        </div>
        {/* skills items */}
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">German</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Italian</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "55%" }}>
                  <span className="percent">55%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">French</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Coding Skills</div>
          <div className="subtitle">Developing on</div>
        </div>
        {/* skills items*/}
        <div className="skills circles">
          <ul>
            <li>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">WordPress</div>
              <div className="single-post-text">
                <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
              </div>
            </li>
            <li>
              <div className="progress p75">
                {" "}
                {/* p75 = 75% circle fill color */}
                <div className="percentage" />
                <span>75%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">PHP, MYSQL</div>
              <div className="single-post-text">
                <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
              </div>
            </li>
            <li>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage" />
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">JavaScript</div>
              <div className="single-post-text">
                <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
              </div>
            </li>
            <li>
              <div className="progress p80">
                {" "}
                {/* p80 = 80% circle fill color */}
                <div className="percentage" />
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Angular</div>
              <div className="single-post-text">
                <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
              </div>
            </li>
            <li>
              <div className="progress p95">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage" />
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">HTML, CSS</div>
              <div className="single-post-text">
                <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
              </div>
            </li>
            <li>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Python</div>
              <div className="single-post-text">
                <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
