<!DOCTYPE html>
<html lang="en">

<?php $title='Xpovio - Digital Agency Creative Portfolio Template '?>
<?php include './partials/head.php'?>

<body class="home-light">
   <!--[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
      <![endif]-->
   <div class="my-app">
     <!-- Preloader Start -->
      <?php include './partials/preloader.php'?>

      <!-- Cursor Area Start -->
      <?php include './partials/cursor.php'?>
      <!-- ==== header start ==== -->
      <header class="header">
         <div class="primary-navbar secondary--navbar">
            <div class="container">
               <div class="row">
                  <div class="col-12">
                     <nav class="navbar p-0">
                        <div class="navbar__logo">
                           <a href="index.php" aria-label="go to home">
                              <img src="assets/images/logo-light.png" alt="Image">
                           </a>
                        </div>
                        <div class="navbar__options">
                           <button class="open-offcanvas-nav d-flex" aria-label="toggle mobile menu"
                              title="open offcanvas menu"></button>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <!-- ==== / header end ==== -->
      <!-- ==== offcanvas nav start ==== -->
      <div class="offcanvas-nav">
         <div class="offcanvas-menu">
            <nav class="offcanvas-menu__wrapper">
               <div class="offcanvas-menu__header nav-fade">
                  <div class="logo">
                     <a href="index.php">
                        <img src="assets/images/logo.png" alt="" title="">
                     </a>
                  </div>
                  <a href="javascript:void(0)" aria-label="close offcanvas menu" class="close-offcanvas-menu">
                     <i class="fa-light fa-xmark-large"></i>
                  </a>
               </div>
               <div class="offcanvas-menu__list">
                  <div class="navbar__menu">
                     <ul >
                        <li class="navbar__item navbar__item--has-children nav-fade">
                           <a href="javascript:void(0)" aria-label="dropdown menu" class="navbar__dropdown-label">Home</a>
                           <ul class="navbar__sub-menu">
                              <li>
                                 <a href="index.php">Creative Agency</a>
                              </li>
                              <li>
                                 <a href="index-light.php">Creative Agency Light</a>
                              </li>
                              <li>
                                 <a href="index-two.php">Digital Agency</a>
                              </li>
                              <li>
                                 <a href="index-two-light.php">Digital Agency Light</a>
                              </li>
                              <li>
                                 <a href="index-three.php">It Solution</a>
                              </li>
                              <li>
                                 <a href="index-three-light.php">It Solution Light</a>
                              </li>
                              <li>
                                 <a href="index-four.php">Personal Portfolio</a>
                              </li>
                              <li>
                                 <a href="index-four-light.php">Personal Portfolio Light</a>
                              </li>
                              <li>
                                 <a href="index-five.php">Interactive Portfolio</a>
                              </li>
                              <li>
                                 <a href="index-five-light.php">Interactive Portfolio Light</a>
                              </li>
                           </ul>
                        </li>
                        <li class="navbar__item nav-fade">
                           <a href="about-us.php">About Us</a>
                        </li>
                        <li class="navbar__item navbar__item--has-children nav-fade">
                           <a href="javascript:void(0)" aria-label="dropdown menu" class="navbar__dropdown-label">Services</a>
                           <ul class="navbar__sub-menu">
                              <li>
                                 <a href="our-services.php">Our Services</a>
                              </li>
                              <li>
                                 <a href="service-single.php">Service Details</a>
                              </li>
                           </ul>
                        </li>
                        <li class="navbar__item navbar__item--has-children nav-fade">
                           <a href="javascript:void(0)" aria-label="dropdown menu" class="navbar__dropdown-label">Projects</a>
                           <ul class="navbar__sub-menu">
                              <li>
                                 <a href="our-projects.php">Our Projects</a>
                              </li>
                              <li>
                                 <a href="project-single.php">Project Details</a>
                              </li>
                           </ul>
                        </li>
                        <li class="navbar__item navbar__item--has-children nav-fade">
                           <a href="javascript:void(0)" aria-label="dropdown menu" class="navbar__dropdown-label">Pages</a>
                           <ul class="navbar__sub-menu">
                              <li>
                                 <a href="faq.php">FAQ</a>
                              </li>
                              <li>
                                 <a href="404.php">Error</a>
                              </li>
                              <li>
                                 <a href="our-story.php">Our Story</a>
                              </li>
                              <li>
                                 <a href="portfolio.php">Portfolio</a>
                              </li>
                              <li class="navbar__item navbar__item--has-children">
                                 <a href="javascript:void(0)" aria-label="dropdown menu"
                                    class="navbar__dropdown-label navbar__dropdown-label-sub">Team</a>
                                 <ul class="navbar__sub-menu navbar__sub-menu__nested">
                                    <li>
                                       <a href="our-teams.php">Our Teams</a>
                                    </li>
                                    <li>
                                       <a href="team-single.php">Team Details</a>
                                    </li>
                                 </ul>
                              </li>
                              <li>
                                 <a href="client-feedback.php">Testimonials</a>
                              </li>
                              <li>
                                 <a href="contact-us.php">Contact Us</a>
                              </li>
                           </ul>
                        </li>
                        <li class="navbar__item navbar__item--has-children nav-fade">
                           <a href="javascript:void(0)" aria-label="dropdown menu" class="navbar__dropdown-label">Blog</a>
                           <ul class="navbar__sub-menu">
                              <li>
                                 <a href="blog.php">Blog</a>
                              </li>
                              <li>
                                 <a href="blog-single.php">Blog Details</a>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="offcanvas-menu__options nav-fade">
                  <div class="offcanvas__mobile-options d-flex">
                     <a href="contact-us.php" class="btn btn--secondary">Let's Talk</a>
                  </div>
               </div>
               <div class="offcanvas-menu__social social nav-fade">
                  <a href="https://www.facebook.com/" target="_blank" aria-label="share us on facebook">
                     <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.twitter.com/" target="_blank" aria-label="share us on twitter">
                     <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://www.pinterest.com/" target="_blank" aria-label="share us on pinterest">
                     <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" aria-label="share us on instagram">
                     <i class="fa-brands fa-instagram"></i>
                  </a>
               </div>
            </nav>
         </div>
      </div>
      <!-- ==== / offcanvas nav end ==== -->
      <div id="smooth-wrapper">
         <div id="smooth-content">
            <!-- ==== main start ==== -->
            <main>
               <!-- ==== banner start ==== -->
               <section class="banner">
                  <div class="container">
                     <div class="row">
                        <div class="col-12">
                           <div class="banner__content">
                              <h1 class="text-uppercase text-start fw-9 mb-0 title-anim">
                                 We are
                                 <span class="text-stroke">creative</span>
                                 <span class="interval">
                                    <i class="icon-arrow-top-right"></i>
                                    digital agency
                                 </span>
                              </h1>
                              <div class="banner__content-inner">
                                 <p>We are a full-service website design, development and digital marketing company
                                    specializing in SEO, content marketing that grows brands.</p>
                                 <div class="cta section__content-cta">
                                    <div class="single">
                                       <h5 class="fw-7">
                                          12+
                                       </h5>
                                       <p class="fw-5">years of experience</p>
                                    </div>
                                    <div class="single">
                                       <h5 class="fw-7">
                                          25k
                                       </h5>
                                       <p class="fw-5">completed projects</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <img src="assets/images/banner/banner-one-thumb.png" alt="Image"
                     class="banner-one-thumb d-none d-sm-block g-ban-one">
                  <img src="assets/images/star.png" alt="Image" class="star">
                  <div class="banner-left-text banner-social-text d-none d-md-flex">
                     <a href="mailto:info@xpovio.com">mail : info@xpovio.com</a>
                     <a href="tel:99-2158-003-6980">Call : +99 2158 003 6980</a>
                  </div>
                  <div class="banner-right-text banner-social-text d-none d-md-flex">
                     <a href="https://www.instagram.com/" target="_blank">
                        instagram
                     </a>
                     <a href="https://www.pinterest.com/" target="_blank">
                        Linkedin
                     </a>
                     <a href="https://www.facebook.com/" target="_blank">
                        facebook
                     </a>
                  </div>
                  <a class="video-frame video-btn" href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank">
                     <img src="assets/images/video-frame.png" alt="Image">
                     <i class="fa-sharp fa-solid fa-play"></i>
                  </a>
                  <div class="lines d-none d-lg-flex">
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                  </div>
               </section>
               <!-- ==== / banner end ==== -->
               <!-- ==== agency start ==== -->
               <section class="section agency">
                  <div class="container">
                     <div class="row gaper align-items-center">
                        <div class="col-12 col-lg-6">
                           <div class="agency__thumb">
                              <img src="assets/images/agency/thumb-one.png" alt="Image" class="thumb-one fade-left">
                              <img src="assets/images/agency/thumb-two.png" alt="Image" class="thumb-two fade-right">
                           </div>
                        </div>
                        <div class="col-12 col-lg-6">
                           <div class="agency__content section__content">
                              <span class="sub-title">
                                 WELCOME
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2 class="title title-anim">
                                 We are digital creative
                                 agency in London
                              </h2>
                              <div class="paragraph">
                                 <p>Bring to the table win-win survival strategies to ensure proactive domination. At
                                    the end of the day, going forward, a new normal that has evolved from generation on
                                    the runway heading towards a streamlined cloud solution going forward porttitor
                                    dictum sapien.</p>
                              </div>
                              <div class="skill-wrap">
                                 <div class="skill-bar-single">
                                    <div class="skill-bar-title">
                                       <p class="primary-text">Website design</p>
                                    </div>
                                    <div class="skill-bar-wrapper" data-percent="75%">
                                       <div class="skill-bar">
                                          <div class="skill-bar-percent">
                                             <span class="percent-value"></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill-bar-single">
                                    <div class="skill-bar-title">
                                       <p class="primary-text">Digital Marketing</p>
                                    </div>
                                    <div class="skill-bar-wrapper" data-percent="90%">
                                       <div class="skill-bar">
                                          <div class="skill-bar-percent">
                                             <span class="percent-value"></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="section__content-cta">
                                 <a href="about-us.php" class="btn btn--primary">Know More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <img src="assets/images/star.png" alt="Image" class="star">
                  <img src="assets/images//agency/dot-large.png" alt="Image" class="dot-large">
               </section>
               <!-- ==== / agency end ==== -->
               <!-- ==== portfolio start ==== -->
               <section class="section portfolio pb-0 fade-wrapper position-relative">
                  <div class="portfolio__text-slider">
                     <div class="portfolio__text-slider-single">
                        <h2 class="h1">
                           <a href="portfolio.php">
                              digital portfolio
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="portfolio__text-slider-single">
                        <h2 class="h1">
                           <a href="portfolio.php">
                              digital portfolio
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="portfolio__text-slider-single">
                        <h2 class="h1">
                           <a href="portfolio.php">
                              digital portfolio
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="portfolio__text-slider-single">
                        <h2 class="h1">
                           <a href="portfolio.php">
                              digital portfolio
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="portfolio__text-slider-single">
                        <h2 class="h1">
                           <a href="portfolio.php">
                              digital portfolio
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="portfolio__text-slider-single">
                        <h2 class="h1">
                           <a href="portfolio.php">
                              digital portfolio
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="portfolio__text-slider-single">
                        <h2 class="h1">
                           <a href="portfolio.php">
                              digital portfolio
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                  </div>
                  <div class="container-fluid">
                     <div class="row gaper">
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="portfolio__single portfolio__single-active topy-tilt fade-top">
                              <a href="portfolio.php">
                                 <img src="assets/images/portfolio/one.png" alt="Image">
                              </a>
                              <div class="portfolio__single-content">
                                 <a href="portfolio.php">
                                    <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                 </a>
                                 <h4>
                                    <a href="portfolio.php">Digital Marketing</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="portfolio__single topy-tilt fade-top">
                              <a href="portfolio.php">
                                 <img src="assets/images/portfolio/two.png" alt="Image">
                              </a>
                              <div class="portfolio__single-content">
                                 <a href="portfolio.php">
                                    <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                 </a>
                                 <h4>
                                    <a href="portfolio.php">Digital Marketing</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="portfolio__single topy-tilt fade-top">
                              <a href="portfolio.php">
                                 <img src="assets/images/portfolio/three.png" alt="Image">
                              </a>
                              <div class="portfolio__single-content">
                                 <a href="portfolio.php">
                                    <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                 </a>
                                 <h4>
                                    <a href="portfolio.php">Digital Marketing</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="portfolio__single topy-tilt fade-top">
                              <a href="portfolio.php">
                                 <img src="assets/images/portfolio/four.png" alt="Image">
                              </a>
                              <div class="portfolio__single-content">
                                 <a href="portfolio.php">
                                    <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                 </a>
                                 <h4>
                                    <a href="portfolio.php">Digital Marketing</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="portfolio__single topy-tilt fade-top">
                              <a href="portfolio.php">
                                 <img src="assets/images/portfolio/five.png" alt="Image">
                              </a>
                              <div class="portfolio__single-content">
                                 <a href="portfolio.php">
                                    <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                 </a>
                                 <h4>
                                    <a href="portfolio.php">Digital Marketing</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="portfolio__single topy-tilt fade-top">
                              <a href="portfolio.php">
                                 <img src="assets/images/portfolio/six.png" alt="Image">
                              </a>
                              <div class="portfolio__single-content">
                                 <a href="portfolio.php">
                                    <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                 </a>
                                 <h4>
                                    <a href="portfolio.php">Digital Marketing</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="portfolio__single-alt-wrapper fade-top">
                              <div class="portfolio__single-alt topy-tilt">
                                 <h4>
                                    <a href="portfolio.php">view all work</a>
                                 </h4>
                                 <a href="portfolio.php" class="arr">
                                    <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                 </a>
                                 <img src="assets/images/portfolio/dot.png" alt="Image" class="dot-one">
                                 <img src="assets/images/portfolio/dot.png" alt="Image" class="dot-two">
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="portfolio__single topy-tilt fade-top">
                              <a href="portfolio.php">
                                 <img src="assets/images/portfolio/seven.png" alt="Image">
                              </a>
                              <div class="portfolio__single-content">
                                 <a href="portfolio.php">
                                    <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                 </a>
                                 <h4>
                                    <a href="portfolio.php">Digital Marketing</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="lines d-none d-lg-flex">
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                  </div>
               </section>
               <!-- ==== / portfolio end ==== -->
               <!-- ==== offer start ==== -->
               <section class="section offer fade-wrapper light">
                  <div class="container">
                     <div class="row gaper">
                        <div class="col-12 col-lg-5">
                           <div class="offer__content section__content">
                              <span class="sub-title">
                                 WHAT WE OFFER
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2 class="title title-anim">
                                 Giving Your Business Some Great Ideas
                              </h2>
                              <div class="paragraph">
                                 <p>Bring to the table win-win survival strategies to ensure proactive domination. At
                                    the end of the day, going forward, a new normal that has evolved from generation on
                                    the runway heading towards a streamlined cloud solution going forward porttitor
                                    dictum sapien.</p>
                              </div>
                              <div class="section__content-cta">
                                 <a href="our-services.php" class="btn btn--secondary">view all services</a>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-lg-7 col-xl-6 offset-xl-1">
                           <div class="offer__cta">
                              <div class="offer__cta-single fade-top">
                                 <span class="sub-title">
                                    01
                                    <i class="fa-solid fa-arrow-right"></i>
                                 </span>
                                 <h2>
                                    <a href="service-single.php">
                                       uI / uX experience
                                       <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                    </a>
                                 </h2>
                                 <div class="offer-thumb-hover d-none d-md-block"
                                    data-background="assets/images/offer/blog-thumb.png"></div>
                              </div>
                              <div class="offer__cta-single fade-top">
                                 <span class="sub-title">
                                    02
                                    <i class="fa-solid fa-arrow-right"></i>
                                 </span>
                                 <h2>
                                    <a href="service-single.php">
                                       web development
                                       <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                    </a>
                                 </h2>
                                 <div class="offer-thumb-hover d-none d-md-block"
                                    data-background="assets/images/offer/two.png"></div>
                              </div>
                              <div class="offer__cta-single fade-top">
                                 <span class="sub-title">
                                    03
                                    <i class="fa-solid fa-arrow-right"></i>
                                 </span>
                                 <h2>
                                    <a href="service-single.php">
                                       digital marketing
                                       <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                    </a>
                                 </h2>
                                 <div class="offer-thumb-hover d-none d-md-block"
                                    data-background="assets/images/offer/three.png"></div>
                              </div>
                              <div class="offer__cta-single fade-top">
                                 <span class="sub-title">
                                    04
                                    <i class="fa-solid fa-arrow-right"></i>
                                 </span>
                                 <h2>
                                    <a href="service-single.php">
                                       product design
                                       <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                    </a>
                                 </h2>
                                 <div class="offer-thumb-hover d-none d-md-block"
                                    data-background="assets/images/offer/blog-thumb.png"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <img src="assets/images/offer/star.png" alt="Image" class="star">
                  <div class="lines d-none d-lg-flex">
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                  </div>
               </section>
               <!-- ==== / offer end ==== -->
               <!-- ==== testimonial start ==== -->
               <section class="section testimonial pt-0 position-relative">
                  <div class="testimonial__text-slider">
                     <div class="testimonial__text-slider-single">
                        <h2 class="h1">
                           <a href="client-feedback.php">
                              client's testimonial
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="testimonial__text-slider-single">
                        <h2 class="h1">
                           <a href="client-feedback.php">
                              client's testimonial
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="testimonial__text-slider-single">
                        <h2 class="h1">
                           <a href="client-feedback.php">
                              client's testimonial
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="testimonial__text-slider-single">
                        <h2 class="h1">
                           <a href="client-feedback.php">
                              client's testimonial
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="testimonial__text-slider-single">
                        <h2 class="h1">
                           <a href="client-feedback.php">
                              client's testimonial
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="testimonial__text-slider-single">
                        <h2 class="h1">
                           <a href="client-feedback.php">
                              client's testimonial
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="testimonial__text-slider-single">
                        <h2 class="h1">
                           <a href="client-feedback.php">
                              client's testimonial
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                  </div>
                  <div class="container position-relative">
                     <div class="row">
                        <div class="col-12 col-xxl-10">
                           <div class="testimonial-s__slider">
                              <div class="testimonial-s__slider-single">
                                 <div class="row gaper align-items-center">
                                    <div class="col-12 col-lg-4 col-xxl-4">
                                       <div class="thumb">
                                          <img src="assets/images/testimonial/s-thumb.png" alt="Image">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="322"
                                             viewBox="0 0 44 322" fill="none">
                                             <path d="M43 0V152L2 193H43V322" stroke="#D9D9D9" />
                                          </svg>
                                       </div>
                                    </div>
                                    <div class="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                                       <div class="testimonial-s__content">
                                          <div class="quote">
                                             <i class="fa-solid fa-quote-right"></i>
                                          </div>
                                          <div class="content">
                                             <h4>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean
                                                non odio porttitor, convallis erat sit amet, facilisis velit. Nulla
                                                ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.</h4>
                                          </div>
                                          <div class="content-cta">
                                             <h5>Daniel Smith</h5>
                                             <p>Senior engineer</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="testimonial-s__slider-single">
                                 <div class="row gaper align-items-center">
                                    <div class="col-12 col-lg-4 col-xxl-4">
                                       <div class="thumb">
                                          <img src="assets/images/testimonial/s-thumb-two.png" alt="Image">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="322"
                                             viewBox="0 0 44 322" fill="none">
                                             <path d="M43 0V152L2 193H43V322" stroke="#D9D9D9" />
                                          </svg>
                                       </div>
                                    </div>
                                    <div class="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                                       <div class="testimonial-s__content">
                                          <div class="quote">
                                             <i class="fa-solid fa-quote-right"></i>
                                          </div>
                                          <div class="content">
                                             <h4>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean
                                                non odio porttitor, convallis erat sit amet, facilisis velit. Nulla
                                                ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.</h4>
                                          </div>
                                          <div class="content-cta">
                                             <h5>Daniel Smith</h5>
                                             <p>Senior engineer</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="testimonial-s__slider-single">
                                 <div class="row gaper align-items-center">
                                    <div class="col-12 col-lg-4 col-xxl-4">
                                       <div class="thumb">
                                          <img src="assets/images/testimonial/s-thumb-three.png" alt="Image">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="322"
                                             viewBox="0 0 44 322" fill="none">
                                             <path d="M43 0V152L2 193H43V322" stroke="#D9D9D9" />
                                          </svg>
                                       </div>
                                    </div>
                                    <div class="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                                       <div class="testimonial-s__content">
                                          <div class="quote">
                                             <i class="fa-solid fa-quote-right"></i>
                                          </div>
                                          <div class="content">
                                             <h4>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean
                                                non odio porttitor, convallis erat sit amet, facilisis velit. Nulla
                                                ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.</h4>
                                          </div>
                                          <div class="content-cta">
                                             <h5>Daniel Smith</h5>
                                             <p>Senior engineer</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="slide-group justify-content-start">
                        <a href="javascript:void(0)" aria-label="previous item" class="slide-btn prev-testimonial-three">
                           <i class="fa-light fa-angle-left"></i>
                        </a>
                        <a href="javascript:void(0)" aria-label="next item" class="slide-btn next-testimonial-three">
                           <i class="fa-light fa-angle-right"></i>
                        </a>
                     </div>
                  </div>
                  <div class="other-section">
                     <img class="other-section-image" src="assets/images/testimonial/s-thumb.png"
                        alt="Next Slide Image">
                  </div>
                  <div class="lines d-none d-lg-flex">
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                  </div>
               </section>
               <!-- ==== / testimonial end ==== -->
               <!-- ==== blog start ==== -->
               <section class="section blog fade-wrapper">
                  <div class="container">
                     <div class="row justify-content-center">
                        <div class="col-12 col-lg-8">
                           <div class="section__header text-center">
                              <span class="sub-title">
                                 news & Blog
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2 class="title title-anim">what's new in blog</h2>
                           </div>
                        </div>
                     </div>
                     <div class="row gaper">
                        <div class="col-12 col-md-6">
                           <div class="blog__single fade-top">
                              <div class="blog__single-thumb topy-tilt">
                                 <a href="blog-single.php">
                                    <img src="assets/images/blog/one.png" alt="Image">
                                 </a>
                              </div>
                              <div class="blog__single-content">
                                 <h4>
                                    <a href="blog-single.php">A Simple Social Media Marketing Checklist</a>
                                 </h4>
                                 <div class="blog__single-meta">
                                    <a href="blog.php" class="sub-title">
                                       creative
                                       <i class="fa-solid fa-arrow-right"></i>
                                    </a>
                                    <p>MARCH 23, 2023</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-md-6">
                           <div class="blog__single fade-top">
                              <div class="blog__single-thumb topy-tilt">
                                 <a href="blog-single.php">
                                    <img src="assets/images/blog/two.png" alt="Image">
                                 </a>
                              </div>
                              <div class="blog__single-content">
                                 <h4>
                                    <a href="blog-single.php">Transforming Challenges into Opportunities</a>
                                 </h4>
                                 <div class="blog__single-meta">
                                    <a href="blog.php" class="sub-title">
                                       creative
                                       <i class="fa-solid fa-arrow-right"></i>
                                    </a>
                                    <p>MARCH 23, 2023</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- ==== / blog end ==== -->
               <!-- ==== sponsor start ==== -->
               <div class="sponsor section pb-0">
                  <div class="container-fluid">
                     <div class="row justify-content-center">
                        <div class="col-12">
                           <div class="sponsor__slider ">
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/one-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/two-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/three-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/four-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/five-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/six-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/one-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/two-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/three-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/four-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/five-dark.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/six-dark.png" alt="Image">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="lines d-none d-lg-flex">
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                  </div>
               </div>
               <!-- ==== / sponsor end ==== -->
               <!-- ==== next page start ==== -->
               <section class="section next-page light">
                  <div class="container">
                     <div class="row justify-content-center">
                        <div class="col-12 col-lg-8">
                           <div class="section__header text-center">
                              <a href="about-us.php" class="sub-title mb-0">
                                 Next Page
                                 <i class="fa-solid fa-arrow-right"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="next__text-slider">
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-down-right"></i>
                           </a>
                        </h2>
                     </div>
                  </div>
                  <div class="lines d-none d-lg-flex">
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                  </div>
               </section>
               <!-- ==== / next page end ==== -->
            </main>
            <!-- ==== / main end ==== -->
            <!-- ==== footer start ==== -->
            <footer class="footer section pb-0" data-background="assets/images/footer/footer-bg.png">
               <div class="container">
                  <div class="row gaper">
                     <div class="col-12 col-lg-5 col-xl-6">
                        <div class="footer__single">
                           <a href="index.php" class="logo">
                              <img src="assets/images/logo.png" alt="Image">
                           </a>
                           <div class="footer__single-meta">
                              <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                 target="_blank">
                                 <i class="fa-sharp fa-solid fa-location-dot"></i>
                                 901 N Pitt Str., Suite 170
                                 Alexandria, USA
                              </a>
                              <a href="tel:406-555-0120">
                                 <i class="fa-sharp fa-solid fa-phone-volume"></i>
                                 (406) 555-0120
                              </a>
                              <a href="mailto:info@xpovio.com">
                                 <i class="fa-sharp fa-solid fa-envelope"></i>
                                 info@xpovio.com
                              </a>
                           </div>
                           <div class="footer__cta text-start">
                              <a href="contact-us.php" class="btn btn--secondary">book a call now</a>
                           </div>
                        </div>
                     </div>
                     <div class="col-12 col-lg-2 col-xl-2">
                        <div class="footer__single">
                           <div class="footer__single-intro">
                              <h5>discover</h5>
                           </div>
                           <div class="footer__single-content">
                              <ul>
                                 <li>
                                    <a href="about-us.php">About Us</a>
                                 </li>
                                 <li>
                                    <a href="client-feedback.php">Award Winning</a>
                                 </li>
                                 <li>
                                    <a href="blog.php">News & Blog</a>
                                 </li>
                                 <li>
                                    <a href="contact-us.php">careers</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="col-12 col-lg-5 col-xl-4">
                        <div class="footer__single">
                           <div class="footer__single-intro">
                              <h5>Subscribe our newsletter</h5>
                           </div>
                           <div class="footer__single-content">
                              <p>Welcome to our digital agency We specialize in helping business most like yours succeed
                                 online.</p>
                              <div class="footer__single-form">
                                 <form action="#" method="post">
                                    <div class="input-email">
                                       <input type="email" name="subscribe-news" id="subscribeNews"
                                          placeholder="Enter Your Email" required>
                                       <button type="submit" class="subscribe">
                                          <i class="fa-sharp fa-solid fa-paper-plane"></i>
                                       </button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-12">
                        <div class="footer__copyright">
                           <div class="row align-items-center gaper">
                              <div class="col-12 col-lg-8">
                                 <div class="footer__copyright-text text-center text-lg-start">
                                    <p>
                                       Copyright &copy;
                                       <span id="copyYear"></span>
                                       Xpovio by
                                       <a href="https://themeforest.net/user/pixel-plus/"
                                          target="_blank">pixel-plus</a>
                                       . All Rights Reserved
                                    </p>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-4">
                                 <div class="social justify-content-center justify-content-lg-end">
                                    <a href="https://www.facebook.com/" target="_blank">
                                       <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank">
                                       <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank">
                                       <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                       <i class="fa-brands fa-instagram"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
            <!-- ==== / footer end ==== -->
         </div>
      </div>
     <!-- Back to top area start here -->
   <?php include './partials/scroll-up.php'?>
   <!-- Back to top area end here -->
      <div class="line">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </div>
      <!-- video modal -->
      <div class="vid-m">
         <div class="vid-c">
            <a href="javascript:void(0)" aria-label="close video popup" class="close-v">
               <i class="fa-light fa-xmark-large"></i>
            </a>
            <video autoplay="autoplay" loop muted controls>
               <source src="assets/images/popup-video.mp4" type="video/mp4">
            </video>
            <h5>Hello</h5>
         </div>
      </div>
   </div>
   <!-- ==== js dependencies start ==== -->
    <!--<< All JS Plugins >>-->
   <?php include './partials/script.php'?>
</body>

</html>