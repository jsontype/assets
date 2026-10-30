import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import {
  fb,
  insta,
  maximize,
  soundcloud,
  text,
  twitter,
  vimeo,
  youtube,
} from "../svgImage";
import { aTagClick, dataImage } from "../utilits";
import ModalBox from "./ModalBox";
import Popup from "./Popup";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    dataImage();
    aTagClick();
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  // popup
  const [video, setVideo] = useState(false);
  const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  const showPopup = (name, src) => {
    setVideo(true);
    setVideoContent({ name, src });
  };
  // Model Box
  const [modal, setModal] = useState(0);
  return (
    <div className="aali_tm_section help" id="portfolio">
      {video && <Popup close={setVideo} content={videoContent} />}
      <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="light"
          >
            <span>Selected works</span>
            <h3>Check my portfolio</h3>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a onClick={handleFilterKeyChange("*")} className="current">
                  All
                </a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("vimeo")}>Vimeo</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("youtube")}>Youtube</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("soundcloud")}>Soundcloud</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("image")}>Image</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("detail")}>Detail</a>
              </li>
            </ul>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              <li className="filter-item vimeo">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/1.jpg" />
                  </div>
                  <div className="overlay" />
                  {vimeo}
                  <div className="details">
                    <span>Vimeo</span>
                    <h3>New Laptop</h3>
                  </div>
                  <a
                    className="aali_tm_full_link popup-vimeo"
                    href="#"
                    onClick={() => showPopup("vimeo", "337293658")}
                  />
                </div>
              </li>
              <li className="filter-item youtube">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/2.jpg" />
                  </div>
                  <div className="overlay" />
                  {youtube}
                  <div className="details">
                    <span>Youtube</span>
                    <h3>Best Phone</h3>
                  </div>
                  <a
                    className="aali_tm_full_link popup-youtube"
                    href="#"
                    onClick={() => showPopup("youtube", "7e90gBu4pas")}
                  />
                </div>
              </li>
              <li className="filter-item soundcloud">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/3.jpg" />
                  </div>
                  <div className="overlay" />
                  {soundcloud}
                  <div className="details">
                    <span>Soundcloud</span>
                    <h3>Smart Headphone</h3>
                  </div>
                  <a
                    className="aali_tm_full_link soundcloude_link mfp-iframe audio"
                    href="#"
                    onClick={() => showPopup("soundcloud", "471954807")}
                  />
                </div>
              </li>
              <li className="filter-item detail">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/4.jpg" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Detail</span>
                    <h3>Hippie Sabotage</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <div className={modal === 1 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/4.jpg"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Detail</span>
                          <h3>Hippie Sabotage</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              We live in a world where we need to move quickly
                              and iterate on our ideas as flexibly as possible.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when {`you're`} trying
                              to figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              will represent the target product.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Client</span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">Detail</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>March 07, 2021</span>
                              </li>
                              <li>
                                <span className="first">Share</span>
                                <ul className="share">
                                  <li>
                                    <a href="#">{fb}</a>
                                  </li>
                                  <li>
                                    <a href="#">{twitter}</a>
                                  </li>
                                  <li>
                                    <a href="#">{insta}</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item image">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/5.jpg" />
                  </div>
                  <div className="overlay" />
                  {maximize}
                  <div className="details">
                    <span>Image</span>
                    <h3>Mockup Camera</h3>
                  </div>
                  <a
                    className="aali_tm_full_link zoom"
                    href="#"
                    onClick={() => showPopup("image", "img/portfolio/5.jpg")}
                  />
                </div>
              </li>
              <li className="filter-item detail">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/portfolio/6.jpg" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Detail</span>
                    <h3>Good Present</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(2)}
                  />
                  <div className={modal === 2 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/6.jpg"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Detail</span>
                          <h3>Good Present</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              We live in a world where we need to move quickly
                              and iterate on our ideas as flexibly as possible.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when {`you're`} trying
                              to figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              will represent the target product.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Client</span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">Detail</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>March 07, 2021</span>
                              </li>
                              <li>
                                <span className="first">Share</span>
                                <ul className="share">
                                  <li>
                                    <a href="#">{fb}</a>
                                  </li>
                                  <li>
                                    <a href="#">{twitter}</a>
                                  </li>
                                  <li>
                                    <a href="#">{insta}</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
