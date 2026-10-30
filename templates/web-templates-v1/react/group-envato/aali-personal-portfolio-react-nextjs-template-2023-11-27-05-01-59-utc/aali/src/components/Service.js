import { useEffect, useState } from "react";
import {
  camera,
  cameraDark,
  msg,
  pen,
  penDark,
  user,
  userDark,
  web,
  webDark,
} from "../svgImage";
import ModalBox from "./ModalBox";

const Service = ({ dark }) => {
  const [modal, setModal] = useState(0);
  const hidden = (value) => (value === modal ? "" : "service_hidden_details");
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);
  return (
    <div className="aali_tm_section" id="service">
      <div className="aali_tm_service">
        <div className="container">
          <div className="service_list">
            <ul>
              <li className="simple wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div
                    className="aali_tm_main_title"
                    data-text-align="left"
                    data-color="dark"
                  >
                    <span>What I Do</span>
                    <h3>My Services</h3>
                    <p>
                      We offer high quality products for competitive prices. Our
                      main goal is customer satisfaction, which we obtain
                      through market orientation of ongoing service and support.
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? cameraDark : camera}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="Service"
                    />
                  </span>
                  <div className="title">
                    <h3>Video Production</h3>
                    <span className="price">
                      Starts from <span>$49</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Aali is a leading web design agency with an award-winning
                      design team that creates innovative, effective websites{" "}
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/1.jpg"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(1)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/service/1.jpg"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Video Production</h3>
                        <span className="price">
                          Starts from <span>$49</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Aali is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          In today’s digital world, your website is the first
                          interaction consumers have with your business.{" "}
                          {`That's`}
                          why almost 95 percent of a user’s first impression
                          relates to web design. It’s also why web design
                          services can have an immense impact on your company’s
                          bottom line.
                        </p>
                        <p>
                          That’s why more companies are not only reevaluating
                          their website’s design but also partnering with Kura,
                          the web design agency that’s driven more than $2.4
                          billion in revenue for its clients. With over 50 web
                          design awards under our belt, {`we're`} confident we
                          can design a custom website that drives sales for your
                          unique business.
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? webDark : web}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Brand Identity</h3>
                    <span className="price">
                      Starts from <span>$59</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Aali is a leading web design agency with an award-winning
                      design team that creates innovative, effective websites{" "}
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(2)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/3.jpg"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(2)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="aali image" />
                        <div
                          className="main"
                          data-img-url="img/service/3.jpg"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Brand Identity</h3>
                        <span className="price">
                          Starts from <span>$59</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Aali is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          {`In today’s digital world, your website is the first
                            interaction consumers have with your business.
                            That's why almost 95 percent of a user’s first
                            impression relates to web design. It’s also why web
                            design services can have an immense impact on your
                            company’s bottom line.`}
                        </p>
                        <p>
                          {`That’s why more companies are not only reevaluating
                            their website’s design but also partnering with
                            Kura, the web design agency that’s driven more than
                            $2.4 billion in revenue for its clients. With over
                            50 web design awards under our belt, we're confident
                            we can design a custom website that drives sales for
                            your unique business.`}
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? penDark : pen}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Creative Writing</h3>
                    <span className="price">
                      Starts from <span>$69</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Aali is a leading web design agency with an award-winning
                      design team that creates innovative, effective websites{" "}
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/2.jpg"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(3)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="aali image" />
                        <div
                          className="main"
                          data-img-url="img/service/2.jpg"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Creative Writing</h3>
                        <span className="price">
                          Starts from <span>$69</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Aali is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          {`In today’s digital world, your website is the first
                            interaction consumers have with your business.
                            That's why almost 95 percent of a user’s first
                            impression relates to web design. It’s also why web
                            design services can have an immense impact on your
                            company’s bottom line.`}
                        </p>
                        <p>
                          {`That’s why more companies are not only reevaluating
                            their website’s design but also partnering with
                            Kura, the web design agency that’s driven more than
                            $2.4 billion in revenue for its clients. With over
                            50 web design awards under our belt, we're confident
                            we can design a custom website that drives sales for
                            your unique business.`}
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? userDark : user}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Digital Marketing</h3>
                    <span className="price">
                      Starts from <span>$79</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Aali is a leading web design agency with an award-winning
                      design team that creates innovative, effective websites{" "}
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(4)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/4.jpg"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(4)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="aali image" />
                        <div
                          className="main"
                          data-img-url="img/service/4.jpg"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Digital Marketing</h3>
                        <span className="price">
                          Starts from <span>$79</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Aali is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          {`In today’s digital world, your website is the first
                            interaction consumers have with your business.
                            That's why almost 95 percent of a user’s first
                            impression relates to web design. It’s also why web
                            design services can have an immense impact on your
                            company’s bottom line.`}
                        </p>
                        <p>
                          {`That’s why more companies are not only reevaluating
                            their website’s design but also partnering with
                            Kura, the web design agency that’s driven more than
                            $2.4 billion in revenue for its clients. With over
                            50 web design awards under our belt, we're confident
                            we can design a custom website that drives sales for
                            your unique business.`}
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li
                className="simple text wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="inner_text">
                      <h3>Do You Want Something Different?</h3>
                    </div>
                    <div className="aali_tm_button border">
                      <a className="anchor" href="#contact">
                        <span>Knock Me {msg}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span
          className="square_left moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span
          className="square_right moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Service;
