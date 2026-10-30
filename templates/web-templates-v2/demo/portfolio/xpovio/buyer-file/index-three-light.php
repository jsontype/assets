<!DOCTYPE html>
<html lang="en">

<?php $title='Xpovio - Digital Agency Creative Portfolio Template '?>
<?php include './partials/head.php'?>

<body class="home-three-light">
   <!--[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
      <![endif]-->
   <div class="my-app ">
      <!-- Preloader Start -->
      <?php include './partials/preloader.php'?>

      <!-- Cursor Area Start -->
      <?php include './partials/cursor.php'?>
      <!-- ==== header start ==== -->
      <header class="header">
         <div class="primary-navbar tertiary--navbar">
            <div class="container">
               <div class="row">
                  <div class="col-12">
                     <nav class="navbar p-0">
                        <div class="navbar__logo">
                           <a href="index.php" aria-label="go to home">
                              <img src="assets/images/logo.png" alt="Image">
                           </a>
                        </div>
                        <div class="navbar__menu">
                           <ul >
                              <li class="navbar__item nav-fade">
                                 <a href="tel:406-555-0120">
                                    <i class="fa-sharp fa-solid fa-phone-volume"></i>
                                    (406) 555-0120
                                 </a>
                              </li>
                              <li class="navbar__item nav-fade">
                                 <a href="mailto:info@xpovio.com">
                                    <i class="fa-sharp fa-solid fa-envelope"></i>
                                    info@xpovio.com
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div class="navbar__options">
                           <button class="open-offcanvas-nav d-flex" aria-label="toggle mobile menu"
                              title="open offcanvas menu">
                              <i class="fa-light fa-bars-staggered"></i>
                              Menu
                           </button>
                           <div class="tertiary-cta d-none d-sm-flex">
                              <div class="navbar__mobile-options">
                                 <a href="contact-us.php" class="btn btn--secondary">Let's Talk</a>
                              </div>
                           </div>
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
               <section class="banner-three">
                  <div class="banner-three__slider banner-three-alt">
                     <div class="banner-three__slider-single"
                        data-background="assets/images/banner/banner-three-bg.png">
                        <div class="container">
                           <div class="row justify-content-end">
                              <div class="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-4">
                                 <div class="banner-three__content">
                                    <h1 class="light-title">
                                       Awesome IT Services
                                       for Your Business
                                    </h1>
                                    <div class="section__content-cta cta">
                                       <div class="arrow-wrapper d-none d-md-block">
                                          <span class="arrow"></span>
                                       </div>
                                       <a href="our-services.php" class="btn btn--secondary">
                                          our services
                                          <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="banner-three__slider-single"
                        data-background="assets/images/banner/banner-three-bg.png">
                        <div class="container">
                           <div class="row justify-content-end">
                              <div class="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-4">
                                 <div class="banner-three__content">
                                    <h1 class="light-title">
                                       Awesome IT Services
                                       for Your Business
                                    </h1>
                                    <div class="section__content-cta cta">
                                       <div class="arrow-wrapper d-none d-md-block">
                                          <span class="arrow"></span>
                                       </div>
                                       <a href="our-services.php" class="btn btn--secondary">
                                          our services
                                          <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="banner-three__slider-single"
                        data-background="assets/images/banner/banner-three-bg.png">
                        <div class="container">
                           <div class="row justify-content-end">
                              <div class="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-4">
                                 <div class="banner-three__content">
                                    <h1 class="light-title">
                                       Awesome IT Services
                                       for Your Business
                                    </h1>
                                    <div class="section__content-cta cta">
                                       <div class="arrow-wrapper d-none d-md-block">
                                          <span class="arrow"></span>
                                       </div>
                                       <a href="our-services.php" class="btn btn--secondary">
                                          our services
                                          <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
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
                  <img src="assets/images/banner/arrow.png" alt="Image" class="arrow-img">
                  <img src="assets/images/agency/dot-large.png" alt="Image" class="dot-img">
                  <div class="banner-three__slider-progress-wrapper">
                     <div class="container">
                        <div class="banner-three__slider-progress">
                           <div class="single-item">
                              <span>01</span>
                              <p>TECHNOLOGY CONSULTANTS</p>
                              <div data-slick-index="0" class="slider-progress"></div>
                           </div>
                           <div class="single-item">
                              <span>02</span>
                              <p>SOFTWARE ENGINEERS</p>
                              <div data-slick-index="1" class="slider-progress"></div>
                           </div>
                           <div class="single-item">
                              <span>03</span>
                              <p>PRODUCT STRATEGY ADVISORS</p>
                              <div data-slick-index="2" class="slider-progress"></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="banner-three__meta ban-three-g-meta">
                     <div class="cta">
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
                     <div class="banner-three__video">
                        <img src="assets/images/banner/video-bg.png" alt="Image">
                        <a class="video-frame video-btn" href="https://www.youtube.com/watch?v=RvreULjnzFo"
                           target="_blank">
                           <i class="fa-sharp fa-solid fa-play"></i>
                        </a>
                     </div>
                  </div>
               </section>
               <!-- ==== / banner end ==== -->
               <!-- ==== service start ==== -->
               <section class="section service-f fade-wrapper light service-f-light">
                  <div class="container">
                     <div class="row">
                        <div class="col-12">
                           <div class="section__header--secondary g-ind">
                              <div class="row gaper align-items-center">
                                 <div class="col-12 col-lg-8">
                                    <div class="section__header text-center text-lg-start mb-0">
                                       <span class="sub-title">
                                          What we offer
                                          <i class="fa-solid fa-arrow-right"></i>
                                       </span>
                                       <h2 class="title title-anim">our main services</h2>
                                    </div>
                                 </div>
                                 <div class="col-12 col-lg-4">
                                    <div class="text-center text-lg-end">
                                       <a href="our-services.php" class="btn btn--primary text-capitalize">view all
                                          service</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-12">
                           <div class="service-f-wrapper">
                              <div class="service-f-single fade-top">
                                 <div class="single-item">
                                    <span class="sub-title">
                                       01
                                       <i class="fa-solid fa-arrow-right"></i>
                                    </span>
                                    <h4>
                                       Digitalization
                                    </h4>
                                    <div class="p-single">
                                       <p>We build intelligent next-generation solutions at the intersection of new
                                          business opportunities and technological innovations.</p>
                                    </div>
                                 </div>
                                 <div class="p-single single-item p-sm">
                                    <ul>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Legacy Modernization
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Solution Design
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Technology Enabling
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Mobile-First Systems
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="single-item p-single p-sm">
                                    <img src="assets/images/service/one.png" alt="Image">
                                 </div>
                                 <button class="toggle-service-f"></button>
                              </div>
                              <div class="service-f-single fade-top">
                                 <div class="single-item">
                                    <span class="sub-title">
                                       02
                                       <i class="fa-solid fa-arrow-right"></i>
                                    </span>
                                    <h4>
                                       Modernization
                                    </h4>
                                    <div class="p-single">
                                       <p>We build intelligent next-generation solutions at the intersection of new
                                          business opportunities and technological innovations.</p>
                                    </div>
                                 </div>
                                 <div class="p-single single-item p-sm">
                                    <ul>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Legacy Modernization
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Solution Design
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Technology Enabling
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Mobile-First Systems
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="single-item p-single p-sm">
                                    <img src="assets/images/service/one.png" alt="Image">
                                 </div>
                                 <button class="toggle-service-f"></button>
                              </div>
                              <div class="service-f-single fade-top">
                                 <div class="single-item">
                                    <span class="sub-title">
                                       03
                                       <i class="fa-solid fa-arrow-right"></i>
                                    </span>
                                    <h4>
                                       Accelerating Innovation
                                    </h4>
                                    <div class="p-single">
                                       <p>We build intelligent next-generation solutions at the intersection of new
                                          business opportunities and technological innovations.</p>
                                    </div>
                                 </div>
                                 <div class="p-single single-item p-sm">
                                    <ul>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Legacy Modernization
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Solution Design
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Technology Enabling
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Mobile-First Systems
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="single-item p-single p-sm">
                                    <img src="assets/images/service/one.png" alt="Image">
                                 </div>
                                 <button class="toggle-service-f"></button>
                              </div>
                              <div class="service-f-single fade-top">
                                 <div class="single-item">
                                    <span class="sub-title">
                                       04
                                       <i class="fa-solid fa-arrow-right"></i>
                                    </span>
                                    <h4>
                                       Business consulting
                                    </h4>
                                    <div class="p-single">
                                       <p>We build intelligent next-generation solutions at the intersection of new
                                          business opportunities and technological innovations.</p>
                                    </div>
                                 </div>
                                 <div class="p-single single-item p-sm">
                                    <ul>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Legacy Modernization
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Solution Design
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Technology Enabling
                                       </li>
                                       <li>
                                          <i class="fa-solid fa-angle-right"></i>
                                          Mobile-First Systems
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="single-item p-single p-sm">
                                    <img src="assets/images/service/one.png" alt="Image">
                                 </div>
                                 <button class="toggle-service-f"></button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <img src="assets/images/agency/dot-large.png" alt="Image" class="dot-img">
               </section>
               <!-- ==== / service end ==== -->
               <!-- ==== agency start ==== -->
               <section class="section agency agency-two">
                  <div class="container">
                     <div class="row gaper align-items-center">
                        <div class="col-12 col-lg-6">
                           <div class="agency__thumb">
                              <img src="assets/images/agency/thumb-three.png" alt="Image" class="fade-left">
                           </div>
                        </div>
                        <div class="col-12 col-lg-6">
                           <div class="agency__content section__content">
                              <span class="sub-title">
                                 About Us
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
                                 <div class="single">
                                    <h5 class="fw-7">
                                       120+
                                    </h5>
                                    <p class="fw-5">Team members</p>
                                 </div>
                              </div>
                              <div class="section__content-cta cta-group">
                                 <a href="index.php" class="clutch">
                                    <img src="assets/images/agency/clutch.png" alt="Image">
                                 </a>
                                 <a href="contact-us.php" class="btn btn--primary text-capitalize">Book A Call</a>
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
               <section class="section portfolio portfolio-three pb-0">
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
                  <div class="container">
                     <div class="row">
                        <div class="col-12">
                           <div class="portfolio-three__slider">
                              <div class="portfolio__single topy-tilt">
                                 <a href="portfolio.php">
                                    <img src="assets/images/portfolio/eight.png" alt="Image">
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
                              <div class="portfolio__single topy-tilt">
                                 <a href="portfolio.php">
                                    <img src="assets/images/portfolio/nine.png" alt="Image">
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
                              <div class="portfolio__single topy-tilt">
                                 <a href="portfolio.php">
                                    <img src="assets/images/portfolio/ten.png" alt="Image">
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
                              <div class="portfolio__single topy-tilt">
                                 <a href="portfolio.php">
                                    <img src="assets/images/portfolio/eight.png" alt="Image">
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
                              <div class="portfolio__single topy-tilt">
                                 <a href="portfolio.php">
                                    <img src="assets/images/portfolio/nine.png" alt="Image">
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
                              <div class="portfolio__single topy-tilt">
                                 <a href="portfolio.php">
                                    <img src="assets/images/portfolio/ten.png" alt="Image">
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
                  </div>
                  <div class="slide-group">
                     <a href="javascript:void(0)" aria-label="previous item" class="slide-btn prev-portfolio">
                        <i class="fa-light fa-angle-left"></i>
                     </a>
                     <a href="javascript:void(0)" aria-label="next item" class="slide-btn next-portfolio">
                        <i class="fa-light fa-angle-right"></i>
                     </a>
                  </div>
               </section>
               <!-- ==== / portfolio end ==== -->
               <!-- ==== work steps start ==== -->
               <section class="section work-steps fade-wrapper work-steps-light light">
                  <div class="container">
                     <div class="row">
                        <div class="col-12">
                           <div class="section__header--secondary">
                              <div class="row gaper align-items-center">
                                 <div class="col-12 col-lg-5 col-xxl-5">
                                    <div class="section__header text-center text-lg-start mb-0">
                                       <span class="sub-title">
                                          working steps
                                          <i class="fa-solid fa-arrow-right"></i>
                                       </span>
                                       <h2 class="title title-anim">Our Work Process</h2>
                                    </div>
                                 </div>
                                 <div class="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                                    <div class="text-center text-lg-start">
                                       <p>Bring to the table win-win survival strategies to ensure proactive domination.
                                          At the end of the day, going forward, a new normal that has evolved from
                                          generation on the runway heading towards</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="work-steps__single fade-top">
                              <span>
                                 25
                                 <br>
                                 %
                              </span>
                              <h5>Discover & Strategy.</h5>
                              <div class="work-thumb-hover d-none d-md-block"
                                 data-background="assets/images/work/thumb-one.png"></div>
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="work-steps__single work-two work-steps__single-active fade-top">
                              <span>
                                 50
                                 <br>
                                 %
                              </span>
                              <h5>Wireframes & User-flows</h5>
                              <div class="work-thumb-hover d-none d-md-block"
                                 data-background="assets/images/work/thumb-one.png"></div>
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="work-steps__single work-three fade-top">
                              <span>
                                 75
                                 <br>
                                 %
                              </span>
                              <h5>Hi-Fidelity design</h5>
                              <div class="work-thumb-hover d-none d-md-block"
                                 data-background="assets/images/work/thumb-one.png"></div>
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                           <div class="work-steps__single work-four fade-top">
                              <span>
                                 100
                                 <br>
                                 %
                              </span>
                              <h5>Development Phase</h5>
                              <div class="work-thumb-hover d-none d-md-block"
                                 data-background="assets/images/work/thumb-one.png"></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a class="video-frame video-btn d-none d-md-flex" href="https://www.youtube.com/watch?v=RvreULjnzFo"
                     target="_blank">
                     <img src="assets/images/video-frame.png" alt="Image">
                     <i class="fa-sharp fa-solid fa-play"></i>
                  </a>
               </section>
               <!-- ==== / work steps end ==== -->
               <!-- ==== testimonial start ==== -->
               <section class="section testimonial testimonial-three position-relative">
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
                                             viewBox="0 0 44 322" fill="none" class="d-none d-lg-block">
                                             <path d="M43 -0.000976562V151.999L2 192.999H43V321.999" stroke="#414141" />
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
                                             viewBox="0 0 44 322" fill="none" class="d-none d-lg-block">
                                             <path d="M43 -0.000976562V151.999L2 192.999H43V321.999" stroke="#414141" />
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
                                             viewBox="0 0 44 322" fill="none" class="d-none d-lg-block">
                                             <path d="M43 -0.000976562V151.999L2 192.999H43V321.999" stroke="#414141" />
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
               </section>
               <!-- ==== / testimonial end ==== -->
               <!-- ==== sponsor start ==== -->
               <div class="sponsor sponsor-three section pt-0">
                  <div class="container-fluid">
                     <div class="row justify-content-center">
                        <div class="col-12">
                           <div class="sponsor__slider ">
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/one.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/two.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/three.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/four.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/five.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/six.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/one.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/two.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/three.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/four.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/five.png" alt="Image">
                              </div>
                              <div class="sponsor__slider-item">
                                 <img src="assets/images/sponsor/six.png" alt="Image">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- ==== / sponsor end ==== -->
               <!-- ==== blog start ==== -->
               <section class="section blog-three pb-0 light blog-three-light">
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
                     <div class="row">
                        <div class="col-12">
                           <div class="blog-three__wrapper">
                              <div class="row gaper">
                                 <div class="col-12 col-lg-6">
                                    <div class="blog-three__single">
                                       <div class="blog__single-content">
                                          <h4>
                                             <a href="blog-single.php">
                                                How manage business in online, The passage
                                                experienced a surge
                                             </a>
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
                                    <div class="blog-three__single">
                                       <div class="blog__single-content">
                                          <h4>
                                             <a href="blog-single.php">
                                                Pellentesque dignissim malesuada varius et semper
                                                semper rutrum ad risus felis eros.
                                             </a>
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
                                    <div class="blog-three__single">
                                       <div class="blog__single-content">
                                          <h4>
                                             <a href="blog-single.php">
                                                non sit libero viverra mollis Non ligula tincidunt
                                                congue porta attention simply
                                             </a>
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
                                 <div class="col-12 col-lg-6">
                                    <div class="blog-three__thumb g-blog-thumb">
                                       <div class="blog-single-img">
                                          <a href="blog-single.php">
                                             <img src="assets/images/blog/eleven.png" alt="Image">
                                          </a>
                                       </div>
                                       <div class="blog-single-img">
                                          <a href="blog-single.php">
                                             <img src="assets/images/blog/ten.png" alt="Image">
                                          </a>
                                       </div>
                                       <div class="blog-single-img">
                                          <a href="blog-single.php">
                                             <img src="assets/images/blog/nine.png" alt="Image">
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- ==== / blog end ==== -->
               <!-- ==== cta start ==== -->
               <section class="cta-two section pb-0">
                  <div class="container">
                     <div class="row justify-content-center">
                        <div class="col-12 col-xxl-11">
                           <div class="cta-two-wrapper bg-img" data-background="assets/images/cta-two-bg.png">
                              <div class="row gaper align-items-center">
                                 <div class="col-12 col-lg-8">
                                    <div class="cta-two__content">
                                       <span>Hello !</span>
                                       <h2 class="title-anim">
                                          ready to work with us?
                                       </h2>
                                       <h5>
                                          <a href="tel:19-3265-003-420">call: +19 3265 003 420</a>
                                       </h5>
                                    </div>
                                 </div>
                                 <div class="col-12 col-lg-4">
                                    <div class="text-start text-lg-end">
                                       <a href="contact-us.php" class="btn btn--tertiary">
                                          start a project
                                          <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- ==== / cta end ==== -->
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
               </section>
               <!-- ==== / next page end ==== -->
            </main>
            <!-- ==== / main end ==== -->
            <!-- ==== footer start ==== -->
            <footer class="section footer-three pb-0">
               <div class="container">
                  <div class="row gaper align-items-start">
                     <div class="col-12 col-lg-4">
                        <div class="footer-three__single">
                           <div class="footer-thumb">
                              <img src="assets/images/footer/footer-three-thumb.png" alt="Image">
                              <div class="footer-thumb__content">
                                 <h5>head quarters, USA</h5>
                              </div>
                           </div>
                           <div class="footer-three__group ps-0">
                              <ul>
                                 <li>
                                    <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                       target="_blank">
                                       <i class="fa-sharp fa-solid fa-location-dot"></i>
                                       901 N Pitt Str., Suite 170 Alexandria, USA
                                    </a>
                                 </li>
                                 <li>
                                    <a href="tel:406-555-0120">
                                       <i class="fa-sharp fa-solid fa-phone-volume"></i>
                                       (406) 555-0120
                                    </a>
                                 </li>
                                 <li>
                                    <a href="mailto:info@xpovio.com">
                                       <i class="fa-sharp fa-solid fa-envelope"></i>
                                       info@xpovio.com
                                    </a>
                                 </li>
                              </ul>
                              <div class="cta">
                                 <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                    target="_blank">
                                    View Map
                                    <i class="fa-sharp fa-solid fa-paper-plane"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="group-wrapper">
                           <div class="footer-three__group">
                              <div class="intro">
                                 <h5>Germany</h5>
                              </div>
                              <ul>
                                 <li>
                                    <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                       target="_blank">
                                       <i class="fa-sharp fa-solid fa-location-dot"></i>
                                       Wolfhager Strasse 425 - 70 Germany
                                    </a>
                                 </li>
                                 <li>
                                    <a href="tel:406-555-0120">
                                       <i class="fa-sharp fa-solid fa-phone-volume"></i>
                                       (406) 555-0120
                                    </a>
                                 </li>
                                 <li>
                                    <a href="mailto:info@xpovio.com">
                                       <i class="fa-sharp fa-solid fa-envelope"></i>
                                       info@xpovio.com
                                    </a>
                                 </li>
                              </ul>
                              <div class="cta">
                                 <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                    target="_blank">
                                    View Map
                                    <i class="fa-sharp fa-solid fa-paper-plane"></i>
                                 </a>
                              </div>
                           </div>
                           <div class="footer-three__group section__content-cta">
                              <div class="intro">
                                 <h5>India</h5>
                              </div>
                              <ul>
                                 <li>
                                    <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                       target="_blank">
                                       <i class="fa-sharp fa-solid fa-location-dot"></i>
                                       Wolfhager Strasse 425 - 70 Germany
                                    </a>
                                 </li>
                                 <li>
                                    <a href="tel:406-555-0120">
                                       <i class="fa-sharp fa-solid fa-phone-volume"></i>
                                       (406) 555-0120
                                    </a>
                                 </li>
                                 <li>
                                    <a href="mailto:info@xpovio.com">
                                       <i class="fa-sharp fa-solid fa-envelope"></i>
                                       info@xpovio.com
                                    </a>
                                 </li>
                              </ul>
                              <div class="cta">
                                 <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                    target="_blank">
                                    View Map
                                    <i class="fa-sharp fa-solid fa-paper-plane"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="group-wrapper">
                           <div class="footer-three__group">
                              <div class="intro">
                                 <h5>Poland</h5>
                              </div>
                              <ul>
                                 <li>
                                    <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                       target="_blank">
                                       <i class="fa-sharp fa-solid fa-location-dot"></i>
                                       Hans-Günther Meier, JCB-256, Poland
                                    </a>
                                 </li>
                                 <li>
                                    <a href="tel:406-555-0120">
                                       <i class="fa-sharp fa-solid fa-phone-volume"></i>
                                       (406) 555-0120
                                    </a>
                                 </li>
                                 <li>
                                    <a href="mailto:info@xpovio.com">
                                       <i class="fa-sharp fa-solid fa-envelope"></i>
                                       info@xpovio.com
                                    </a>
                                 </li>
                              </ul>
                              <div class="cta">
                                 <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                    target="_blank">
                                    View Map
                                    <i class="fa-sharp fa-solid fa-paper-plane"></i>
                                 </a>
                              </div>
                           </div>
                           <div class="footer-three__group section__content-cta">
                              <div class="intro">
                                 <h5>Bangladesh</h5>
                              </div>
                              <ul>
                                 <li>
                                    <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                       target="_blank">
                                       <i class="fa-sharp fa-solid fa-location-dot"></i>
                                       Hans-Günther Meier, JCB-256, Poland
                                    </a>
                                 </li>
                                 <li>
                                    <a href="tel:406-555-0120">
                                       <i class="fa-sharp fa-solid fa-phone-volume"></i>
                                       (406) 555-0120
                                    </a>
                                 </li>
                                 <li>
                                    <a href="mailto:info@xpovio.com">
                                       <i class="fa-sharp fa-solid fa-envelope"></i>
                                       info@xpovio.com
                                    </a>
                                 </li>
                              </ul>
                              <div class="cta">
                                 <a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                                    target="_blank">
                                    View Map
                                    <i class="fa-sharp fa-solid fa-paper-plane"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="footer-three__copyright">
                  <div class="container">
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
                                    <div class="text-center text-lg-end">
                                       <a href="index.php" class="logo">
                                          <img src="assets/images/logo.png" alt="Image">
                                       </a>
                                    </div>
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