import { useState } from "react";
import ModalBox from "./ModalBox";

const Blog = () => {
  const [modal, setModal] = useState(0);
  const hidden = (value) => (value === modal ? "" : "news_hidden_details");
  return (
    <div className="aali_tm_section" id="blog">
      <div className="aali_tm_news">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>Latest Updates</span>
            <h3>From My Blog</h3>
            <p>
              We offer high quality products for competitive prices. Our main
              goal is customer satisfaction
            </p>
          </div>
          <div className="news_list">
            <ul>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/42-29.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/news/1.jpg" />
                    <a
                      className="aali_tm_full_link"
                      href="#"
                      onClick={() => setModal(1)}
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Web Design</a>
                    </span>
                    <h3 className="title">
                      <a href="#" onClick={() => setModal(1)}>
                        How to create simple personal website
                      </a>
                    </h3>
                    <span className="date">November 10, 2021</span>
                  </div>
                  <div className="button">
                    <div className="aali_tm_learn_more">
                      <a href="#" onClick={() => setModal(1)}>
                        Full Story
                      </a>
                    </div>
                  </div>
                  <div className={hidden(1)}>
                    <ModalBox close={setModal}>
                      <div className="news_popup_informations">
                        <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="aali image" />
                          <div className="main" data-img-url="img/news/1.jpg" />
                        </div>
                        <div className="details">
                          <span className="category">
                            <a href="#">Development</a>
                          </span>
                          <h3 className="title">
                            <a href="#">What is mobile app and web design</a>
                          </h3>
                          <span className="date">October 22, 2021</span>
                          <div />
                        </div>
                        <div className="text">
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
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-duration="1s">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/42-29.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/news/2.jpg" />
                    <a
                      className="aali_tm_full_link"
                      href="#"
                      onClick={() => setModal(1)}
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Development</a>
                    </span>
                    <h3 className="title">
                      <a href="#" onClick={() => setModal(2)}>
                        What is mobile app and web design
                      </a>
                    </h3>
                    <span className="date">October 22, 2021</span>
                  </div>
                  <div className="button">
                    <div className="aali_tm_learn_more">
                      <a href="#" onClick={() => setModal(2)}>
                        Full Story
                      </a>
                    </div>
                  </div>
                  <div className={hidden(2)}>
                    <ModalBox close={setModal}>
                      <div className="news_popup_informations">
                        <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="aali image" />
                          <div className="main" data-img-url="img/news/2.jpg" />
                        </div>
                        <div className="details">
                          <span className="category">
                            <a href="#">Web Design</a>
                          </span>
                          <h3 className="title">
                            <a href="#">
                              How to create simple personal website
                            </a>
                          </h3>
                          <span className="date">October 22, 2021</span>
                          <div />
                        </div>
                        <div className="text">
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
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
