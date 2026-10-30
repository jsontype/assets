"use client";
import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const GalleryIsotope = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <ul
        className="nav gallery-nav food-menu-tab mb-40"
        role="tablist"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <li>
          <button
            className={`nav-link ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-filter="*"
          >
            <i className="flaticon-cupcake" />
            <span>dessert</span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("vegetarian")}`}
            onClick={handleFilterKeyChange("vegetarian")}
            data-filter=".vegetarian"
          >
            <i className="flaticon-broccoli" />
            <span>vegetarian</span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("potatoes")}`}
            onClick={handleFilterKeyChange("potatoes")}
            data-filter=".potatoes"
          >
            <i className="flaticon-fried-potatoes" />
            <span>potatoes</span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("seafood")}`}
            onClick={handleFilterKeyChange("seafood")}
            data-filter=".seafood"
          >
            <i className="flaticon-crab" />
            <span>seafood</span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("drinks")}`}
            onClick={handleFilterKeyChange("drinks")}
            data-filter=".drinks"
          >
            <i className="flaticon-poinsettia" />
            <span>drinks</span>
          </button>
        </li>
      </ul>
      <div className="row gallery-active">
        <div className="col-lg-4 col-sm-6 item potatoes">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/gallery/gallery-three1.jpg" alt="Gallery" />
            <h3>Chicken burger</h3>
            <span className="category">Delicious food</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item vegetarian drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/gallery/gallery-three2.jpg" alt="Gallery" />
            <h3>yamee Chicken fry</h3>
            <span className="category">Delicious food</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item seafood">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/gallery/gallery-three3.jpg" alt="Gallery" />
            <h3>beef vegetable hot dog</h3>
            <span className="category">Delicious food</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item potatoes drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/gallery/gallery-three4.jpg" alt="Gallery" />
            <h3>hot dog with mustard</h3>
            <span className="category">Delicious food</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item vegetarian">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/gallery/gallery-three5.jpg" alt="Gallery" />
            <h3>traditional Italian pizza</h3>
            <span className="category">Delicious food</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/gallery/gallery-three6.jpg" alt="Gallery" />
            <h3>Chicken burger</h3>
            <span className="category">Delicious food</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item potatoes">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/gallery/gallery-three7.jpg" alt="Gallery" />
            <h3>Chicken burger</h3>
            <span className="category">Delicious food</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item vegetarian drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/gallery/gallery-three8.jpg" alt="Gallery" />
            <h3>Chicken burger</h3>
            <span className="category">Delicious food</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/gallery/gallery-three9.jpg" alt="Gallery" />
            <h3>Chicken burger</h3>
            <span className="category">Delicious food</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default GalleryIsotope;
