"use client";
import { wellfoodUtility } from "@/utility";
import useClickOutside from "@/utility/useClickOutside";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const Sidebar = () => {
  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div
        className="form-back-drop"
        onClick={() =>
          document
            .querySelector("body")
            .classList.remove("side-content-visible")
        }
      />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div
            className="cross-icon"
            onClick={() =>
              document
                .querySelector("body")
                .classList.remove("side-content-visible")
            }
          >
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document
                  .querySelector("body")
                  .classList.remove("side-content-visible");
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn style-two">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <Link href="contact">
              <i className="fab fa-twitter" />
            </Link>
            <Link href="contact">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="contact">
              <i className="fab fa-instagram" />
            </Link>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};

const SearchBtn = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  let domNode = useClickOutside(() => {
    setToggleSearch(false);
  });
  return (
    <div className="nav-search py-10" ref={domNode}>
      <button
        className="far fa-search"
        onClick={() => setToggleSearch(!toggleSearch)}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setToggleSearch(false);
        }}
        className={toggleSearch ? "" : "hide"}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required=""
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </div>
  );
};

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <header className="main-header white-menu menu-absolute d-block d-xl-none">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer ms-lg-5 ps-xxl-4 clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header py-10">
                    <div className="mobile-logo">
                      <Link href="/">
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse"
                      onClick={() => setToggle(!toggle)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      toggle ? "show" : ""
                    }`}
                  >
                    <ul className="navigation clearfix">
                      <li className="dropdown" style={activeLi("home")}>
                        <a href="#">Home</a>
                        <ul>
                          <li>
                            <Link href="/">Home Restauran</Link>
                          </li>
                          <li>
                            <Link href="index2">Home Pizza</Link>
                          </li>
                          <li>
                            <Link href="index3">Home Burger</Link>
                          </li>
                          <li>
                            <Link href="index4">Home Chiken</Link>
                          </li>
                          <li>
                            <Link href="index5">Juice &amp; Drinks</Link>
                          </li>
                          <li>
                            <Link href="index6">Home Grill</Link>
                          </li>
                        </ul>
                        <div
                          className="dropdown-btn"
                          onClick={() => activeMenuSet("home")}
                        >
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">Menu</a>
                        <ul style={activeLi("Menu")}>
                          <li>
                            <Link href="menu-restaurant">Menu Restaurant</Link>
                          </li>
                          <li>
                            <Link href="menu-pizza">Menu Pizza</Link>
                          </li>
                          <li>
                            <Link href="menu-grill">Menu Gril</Link>
                          </li>
                          <li>
                            <Link href="menu-burger">Menu Burger</Link>
                          </li>
                          <li>
                            <Link href="menu-sea-food">Menu Sea Food</Link>
                          </li>
                          <li>
                            <Link href="menu-chicken">Menu Chicken</Link>
                          </li>
                        </ul>
                        <div
                          className="dropdown-btn"
                          onClick={() => activeMenuSet("Menu")}
                        >
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">pages</a>
                        <ul style={activeLi("pages")}>
                          <li>
                            <Link href="about">About Us</Link>
                          </li>
                          <li>
                            <Link href="history">Our History</Link>
                          </li>
                          <li>
                            <Link href="faq">faqs</Link>
                          </li>
                          <li>
                            <Link href="chefs">Our chefs</Link>
                          </li>
                          <li>
                            <Link href="chef-details">chef Details</Link>
                          </li>
                          <li>
                            <Link href="gallery">Gallery</Link>
                          </li>
                        </ul>
                        <div
                          className="dropdown-btn"
                          onClick={() => activeMenuSet("pages")}
                        >
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">blog</a>
                        <ul style={activeLi("blog")}>
                          <li>
                            <Link href="blog">blog standard</Link>
                          </li>
                          <li>
                            <Link href="blog-details">blog details</Link>
                          </li>
                        </ul>
                        <div
                          className="dropdown-btn"
                          onClick={() => activeMenuSet("blog")}
                        >
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">shop</a>
                        <ul style={activeLi("shop")}>
                          <li>
                            <Link href="shop">Products</Link>
                          </li>
                          <li>
                            <Link href="product-details">Product Details</Link>
                          </li>
                          <li>
                            <Link href="product-details">Product Details</Link>
                          </li>
                          <li>
                            <Link href="cart">Shopping Cart</Link>
                          </li>
                          <li>
                            <Link href="checkout">Checkout Page</Link>
                          </li>
                        </ul>
                        <div
                          className="dropdown-btn"
                          onClick={() => activeMenuSet("shop")}
                        >
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li>
                        <Link href="contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              <div className="header-number">
                <i className="far fa-phone" />
                Call : <a href="callto:+88012345688">+880 123 456 88</a>
              </div>
              {/* Nav Search */}
              <SearchBtn />
              {/* Menu Button */}
              <div className="menu-btns">
                <button>
                  <i className="far fa-shopping-cart" /> <span>2</span>
                </button>
                <Link href="contact" className="theme-btn">
                  Book now <i className="far fa-arrow-alt-right" />
                </Link>
                {/* menu sidbar */}
                <div className="menu-sidebar">
                  <button
                    className="bg-transparent"
                    onClick={() =>
                      document
                        .querySelector("body")
                        .classList.add("side-content-visible")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
    </Fragment>
  );
};

const Header = () => {
  useEffect(() => {
    wellfoodUtility.fixedHeader();
  }, []);

  return (
    <Fragment>
      <header className="main-header white-menu menu-absolute d-none d-xl-block">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer ms-lg-5 ps-xxl-4 clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header py-10">
                    <div className="mobile-logo">
                      <Link href="/">
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="dropdown">
                        <a href="#">Home</a>
                        <ul>
                          <li>
                            <Link href="/">Home Restauran</Link>
                          </li>
                          <li>
                            <Link href="index2">Home Pizza</Link>
                          </li>
                          <li>
                            <Link href="index3">Home Burger</Link>
                          </li>
                          <li>
                            <Link href="index4">Home Chiken</Link>
                          </li>
                          <li>
                            <Link href="index5">Juice &amp; Drinks</Link>
                          </li>
                          <li>
                            <Link href="index6">Home Grill</Link>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">Menu</a>
                        <ul>
                          <li>
                            <Link href="menu-restaurant">Menu Restaurant</Link>
                          </li>
                          <li>
                            <Link href="menu-pizza">Menu Pizza</Link>
                          </li>
                          <li>
                            <Link href="menu-grill">Menu Gril</Link>
                          </li>
                          <li>
                            <Link href="menu-burger">Menu Burger</Link>
                          </li>
                          <li>
                            <Link href="menu-sea-food">Menu Sea Food</Link>
                          </li>
                          <li>
                            <Link href="menu-chicken">Menu Chicken</Link>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">pages</a>
                        <ul>
                          <li>
                            <Link href="about">About Us</Link>
                          </li>
                          <li>
                            <Link href="history">Our History</Link>
                          </li>
                          <li>
                            <Link href="faq">faqs</Link>
                          </li>
                          <li className="dropdown">
                            <a href="#">chefs</a>
                            <ul>
                              <li>
                                <Link href="chefs">Our chefs</Link>
                              </li>
                              <li>
                                <Link href="chef-details">chef Details</Link>
                              </li>
                            </ul>
                            <div className="dropdown-btn">
                              <span className="far fa-angle-down" />
                            </div>
                          </li>
                          <li>
                            <Link href="gallery">Gallery</Link>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">blog</a>
                        <ul>
                          <li>
                            <Link href="blog">blog standard</Link>
                          </li>
                          <li>
                            <Link href="blog-details">blog details</Link>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">shop</a>
                        <ul>
                          <li>
                            <Link href="shop">Products</Link>
                          </li>
                          <li>
                            <Link href="product-details">Product Details</Link>
                          </li>
                          <li>
                            <Link href="cart">Shopping Cart</Link>
                          </li>
                          <li>
                            <Link href="checkout">Checkout Page</Link>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li>
                        <Link href="contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              <div className="header-number">
                <i className="far fa-phone" />
                Call : <a href="callto:+88012345688">+880 123 456 88</a>
              </div>
              {/* Nav Search */}
              <SearchBtn />
              {/* Menu Button */}
              <div className="menu-btns">
                <button>
                  <i className="far fa-shopping-cart" /> <span>2</span>
                </button>
                <Link href="contact" className="theme-btn">
                  Book now <i className="far fa-arrow-alt-right" />
                </Link>
                {/* menu sidbar */}
                <div className="menu-sidebar">
                  <button
                    className="bg-transparent"
                    onClick={() =>
                      document
                        .querySelector("body")
                        .classList.add("side-content-visible")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <MobileMenu />
      <Sidebar />
    </Fragment>
  );
};
export default Header;
