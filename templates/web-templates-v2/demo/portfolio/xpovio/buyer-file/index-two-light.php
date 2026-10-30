<!DOCTYPE html>
<html lang="en">

<?php $title='Xpovio - Digital Agency Creative Portfolio Template '?>
<?php include './partials/head.php'?>

<body class="home-two-light">
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
         <div class="primary-navbar cmn-nav">
            <div class="container">
               <div class="row">
                  <div class="col-12">
                     <nav class="navbar p-0">
                        <div class="navbar__logo">
                           <a href="index.php" aria-label="go to home">
                              <img src="assets/images/logo-light.png" alt="Image">
                           </a>
                        </div>
                        <div class="navbar__menu">
                           <ul >
                              <li class="navbar__item navbar__item--has-children nav-fade">
                                 <a href="javascript:void(0)" aria-label="dropdown menu" class="navbar__dropdown-label">Home</a>
                                 <ul class="navbar__sub-menu navbar__sub-menu--lg">
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
                        <div class="navbar__options">
                           <div class="navbar__mobile-options d-none d-sm-flex">
                              <a href="contact-us.php" class="btn btn--secondary">Let's Talk</a>
                           </div>
                           <button class="open-mobile-menu d-flex d-xl-none" aria-label="toggle mobile menu">
                              <i class="fa-light fa-bars-staggered"></i>
                           </button>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
            <!-- ==== mobile menu start ==== -->
            <div class="mobile-menu">
               <nav class="mobile-menu__wrapper">
                  <div class="mobile-menu__header nav-fade">
                     <div class="logo">
                        <a href="index.php">
                           <img src="assets/images/logo.png" alt="" title="">
                        </a>
                     </div>
                     <a href="javascript:void(0)" aria-label="close mobile menu" class="close-mobile-menu">
                        <i class="fa-light fa-xmark-large"></i>
                     </a>
                  </div>
                  <div class="mobile-menu__list"></div>
                  <div class="mobile-menu__options d-flex d-sm-none justify-content-center nav-fade"></div>
                  <div class="mobile-menu__social social nav-fade">
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
            <div class="mobile-menu__backdrop"></div>
            <!-- ==== / mobile menu end ==== -->
         </div>
      </header>
      <!-- ==== / header end ==== -->
      <div id="smooth-wrapper">
         <div id="smooth-content">
            <!-- ==== main start ==== -->
            <main>
               <!-- ==== banner start ==== -->
               <section class="banner-two">
                  <div class="container">
                     <div class="row">
                        <div class="col-12">
                           <div class="banner-two-inner">
                              <div class="banner-two__meta">
                                 <div class="thumb">
                                    <video autoplay="autoplay" loop muted controls>
                                       <source src="assets/images/banner-video.mp4" type="video/mp4">
                                    </video>
                                 </div>
                                 <div class="cta section__content-cta m-0">
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
                              <div class="banner-two__content">
                                 <h1 class="title-anim">
                                    THE
                                    <span>UI UX DESIGN</span>
                                    AGENCY
                                    FOR BETTER METRICS
                                 </h1>
                                 <div class="banner-two__content-cta section__content-cta">
                                    <div class="paragraph">
                                       <p>We are a data-driven UI UX design agency delivering complete end-to-end web,
                                          mobile, and Web3 user experience design solutions for better core metrics.</p>
                                    </div>
                                    <div class="arrow-wrapper d-none d-lg-block">
                                       <span class="arrow"></span>
                                    </div>
                                    <div class="cta">
                                       <a href="contact-us.php" class="btn btn--secondary">
                                          book a call now
                                          <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <img src="assets/images/banner/dawn-light.png" alt="Image" class="dawn">
               </section>
               <!-- ==== / banner end ==== -->
               <!-- ==== sponsor start ==== -->
               <div class="sponsor section liner light spo-light">
                  <div class="container-fluid">
                     <div class="row justify-content-center">
                        <div class="col-12 col-lg-8">
                           <div class="section__header text-center">
                              <span class="sub-title mb-0">
                                 TRUSTED BY STARTUPS
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                           </div>
                        </div>
                     </div>
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
               </div>
               <!-- ==== / sponsor end ==== -->
               <!-- ==== award start ==== -->
               <section class="section award">
                  <div class="container">
                     <div class="row gaper align-items-center">
                        <div class="col-12 col-lg-6">
                           <div class="award__thumb dir-rtl">
                              <img src="assets/images/award-thumb.png" alt="Image" class="unset fade-left">
                           </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
                           <div class="award__content section__content">
                              <span class="sub-title">
                                 WE PROUD THAT
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2 class="title title-anim">
                                 Discover Our
                                 <span>Awards</span>
                              </h2>
                              <div class="paragraph">
                                 <p>Bring to the table win-win survival strategies to ensure proactive domination. At
                                    the end of the day, going forward, a new normal that has evolved from generation on
                                    the runway heading towards a streamlined</p>
                              </div>
                              <div class="award__content-meta">
                                 <div class="single">
                                    <h4>2018</h4>
                                    <h4>Awwwards</h4>
                                    <p>Website of the day</p>
                                 </div>
                                 <div class="single">
                                    <h4>2020</h4>
                                    <h4>Awwwards</h4>
                                    <p>National design contest</p>
                                 </div>
                                 <div class="single">
                                    <h4>2022</h4>
                                    <h4>Awwwards</h4>
                                    <p>Apps of the day</p>
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
                  <img src="assets/images/star.png" alt="Image" class="star-two">
                  <img src="assets/images/agency/dot-large.png" alt="Image" class="dot">
                  <img src="assets/images/agency/dot-large.png" alt="Image" class="dot-two">
               </section>
               <!-- ==== / award end ==== -->
               <!-- ==== offer start ==== -->
               <section class="section offer-two light offer-two-light">
                  <div class="container">
                     <div class="row justify-content-center">
                        <div class="col-12 col-lg-8">
                           <div class="section__header text-center">
                              <span class="sub-title">
                                 What We Offer
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2 class="title title-anim">our main services</h2>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="offer-two__slider">
                     <div class="offer-two__slider-single offer__cta">
                        <div class="offer__cta-single">
                           <span class="sub-title">
                              01
                              <i class="fa-solid fa-arrow-right"></i>
                           </span>
                           <h2>
                              <a href="service-single.php">
                                 uI / uX experience
                              </a>
                           </h2>
                           <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                           </div>
                        </div>
                     </div>
                     <div class="offer-two__slider-single offer__cta">
                        <div class="offer__cta-single">
                           <span class="sub-title">
                              02
                              <i class="fa-solid fa-arrow-right"></i>
                           </span>
                           <h2>
                              <a href="service-single.php">
                                 Product Design
                              </a>
                           </h2>
                           <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                           </div>
                        </div>
                     </div>
                     <div class="offer-two__slider-single offer__cta">
                        <div class="offer__cta-single">
                           <span class="sub-title">
                              03
                              <i class="fa-solid fa-arrow-right"></i>
                           </span>
                           <h2>
                              <a href="service-single.php">
                                 Digital Marketing
                              </a>
                           </h2>
                           <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                           </div>
                        </div>
                     </div>
                     <div class="offer-two__slider-single offer__cta">
                        <div class="offer__cta-single">
                           <span class="sub-title">
                              04
                              <i class="fa-solid fa-arrow-right"></i>
                           </span>
                           <h2>
                              <a href="service-single.php">
                                 Web Development
                              </a>
                           </h2>
                           <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                           </div>
                        </div>
                     </div>
                     <div class="offer-two__slider-single offer__cta">
                        <div class="offer__cta-single">
                           <span class="sub-title">
                              05
                              <i class="fa-solid fa-arrow-right"></i>
                           </span>
                           <h2>
                              <a href="service-single.php">
                                 Mobile App
                              </a>
                           </h2>
                           <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                           </div>
                        </div>
                     </div>
                     <div class="offer-two__slider-single offer__cta">
                        <div class="offer__cta-single">
                           <span class="sub-title">
                              06
                              <i class="fa-solid fa-arrow-right"></i>
                           </span>
                           <h2>
                              <a href="service-single.php">
                                 Custom Solutions
                              </a>
                           </h2>
                           <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                           </div>
                        </div>
                     </div>
                     <div class="offer-two__slider-single offer__cta">
                        <div class="offer__cta-single">
                           <span class="sub-title">
                              07
                              <i class="fa-solid fa-arrow-right"></i>
                           </span>
                           <h2>
                              <a href="service-single.php">
                                 Ecommerce Solutions
                              </a>
                           </h2>
                           <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                           </div>
                        </div>
                     </div>
                     <div class="offer-two__slider-single offer__cta">
                        <div class="offer__cta-single">
                           <span class="sub-title">
                              08
                              <i class="fa-solid fa-arrow-right"></i>
                           </span>
                           <h2>
                              <a href="service-single.php">
                                 Photography
                              </a>
                           </h2>
                           <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                           </div>
                        </div>
                     </div>
                  </div>
                  <div dir="rtl">
                     <div class="offer-two__slider-rtl">
                        <div class="offer-two__slider-single offer__cta">
                           <div class="offer__cta-single">
                              <span class="sub-title">
                                 01
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2>
                                 <a href="service-single.php">
                                    uI / uX experience
                                 </a>
                              </h2>
                              <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                              </div>
                           </div>
                        </div>
                        <div class="offer-two__slider-single offer__cta">
                           <div class="offer__cta-single">
                              <span class="sub-title">
                                 02
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2>
                                 <a href="service-single.php">
                                    Product Design
                                 </a>
                              </h2>
                              <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                              </div>
                           </div>
                        </div>
                        <div class="offer-two__slider-single offer__cta">
                           <div class="offer__cta-single">
                              <span class="sub-title">
                                 03
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2>
                                 <a href="service-single.php">
                                    Digital Marketing
                                 </a>
                              </h2>
                              <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                              </div>
                           </div>
                        </div>
                        <div class="offer-two__slider-single offer__cta">
                           <div class="offer__cta-single">
                              <span class="sub-title">
                                 04
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2>
                                 <a href="service-single.php">
                                    Web Development
                                 </a>
                              </h2>
                              <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                              </div>
                           </div>
                        </div>
                        <div class="offer-two__slider-single offer__cta">
                           <div class="offer__cta-single">
                              <span class="sub-title">
                                 05
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2>
                                 <a href="service-single.php">
                                    Mobile App
                                 </a>
                              </h2>
                              <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                              </div>
                           </div>
                        </div>
                        <div class="offer-two__slider-single offer__cta">
                           <div class="offer__cta-single">
                              <span class="sub-title">
                                 06
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2>
                                 <a href="service-single.php">
                                    Custom Solutions
                                 </a>
                              </h2>
                              <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                              </div>
                           </div>
                        </div>
                        <div class="offer-two__slider-single offer__cta">
                           <div class="offer__cta-single">
                              <span class="sub-title">
                                 07
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2>
                                 <a href="service-single.php">
                                    Ecommerce Solutions
                                 </a>
                              </h2>
                              <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                              </div>
                           </div>
                        </div>
                        <div class="offer-two__slider-single offer__cta">
                           <div class="offer__cta-single">
                              <span class="sub-title">
                                 08
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2>
                                 <a href="service-single.php">
                                    Photography
                                 </a>
                              </h2>
                              <div class="offer-thumb-hover d-none d-md-block" data-background="assets/images/ball.png">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- ==== / offer end ==== -->
               <!-- ==== video modal start ==== -->
               <div class="video-modal">
                  <img src="assets/images/modal-bg.png" alt="Image" class="modal-bg">
                  <a class="video-frame video-btn" href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank">
                     <img src="assets/images/video-frame-two.png" alt="Image">
                     <i class="fa-sharp fa-solid fa-play"></i>
                  </a>
               </div>
               <!-- ==== / video modal end ==== -->
               <!-- ==== portfolio start ==== -->
               <section class="section portfolio portfolio-two portfolio-filter fade-wrapper">
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
                     <div class="row justify-content-center">
                        <div class="col-12 col-lg-6 col-xl-4 text-center">
                           <div class="portfolio-two__filter-btn section__header g-ind">
                              <button aria-label="Filter Portfolio" data-filter="*" class="active">
                                 <span>01</span>
                                 All
                              </button>
                              <button aria-label="Filter Portfolio" data-filter=".design">
                                 <span>02</span>
                                 Design
                              </button>
                              <button aria-label="Filter Portfolio" data-filter=".development">
                                 <span>03</span>
                                 Development
                              </button>
                              <button aria-label="Filter Portfolio" data-filter=".technology">
                                 <span>04</span>
                                 Technology
                              </button>
                           </div>
                        </div>
                     </div>
                     <div class="row masonry-grid">
                        <div class="col-12 col-md-6 col-xl-4 filter-item-space grid-item-main technology development">
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
                        <div class="col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design">
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
                        <div class="col-12 col-md-6 col-xl-4 filter-item-space grid-item-main technology development">
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
                        <div class="col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design">
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
                        <div class="col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design development">
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
                        <div
                           class="col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design technology development">
                           <div class="portfolio__single topy-tilt fade-top">
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
                     </div>
                  </div>
               </section>
               <!-- ==== / portfolio end ==== -->
               <!-- ==== testimonial start ==== -->
               <section class="section testimonial-two">
                  <div class="container">
                     <div class="row gaper align-items-center">
                        <div class="col-12 col-lg-5 col-xxl-4">
                           <div class="testimonial-two__thumb">
                              <img src="assets/images/testimonial/thumb.png" alt="Image">
                           </div>
                        </div>
                        <div class="col-12 col-lg-7 col-xxl-7 offset-xxl-1">
                           <div class="testimonial-two__content section__content testimonial-g-con">
                              <span class="sub-title">
                                 testimonial
                                 <i class="fa-solid fa-arrow-right"></i>
                              </span>
                              <h2 class="title title-anim">
                                 Some Of Our Respected Happy Clients Says
                              </h2>
                              <div class="quote">
                                 <i class="fa-sharp fa-solid fa-quote-right"></i>
                              </div>
                              <div class="testimonial-two__slider">
                                 <div class="testimonial-two__slider-single">
                                    <div class="paragraph">
                                       <blockquote class="secondary-text">
                                          <q>Welcome to our digital agency We specialize in helping business most like
                                             yours succeed online. From website design and development to digital
                                             marketing agency</q>
                                       </blockquote>
                                    </div>
                                    <div class="author-meta">
                                       <div class="author-meta__thumb">
                                          <img src="assets/images/testimonial/avatar.png" alt="Image">
                                       </div>
                                       <div class="author-meta__content">
                                          <h5>Delores Olivo</h5>
                                          <p>From UK</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="testimonial-two__slider-single">
                                    <div class="paragraph">
                                       <blockquote class="secondary-text">
                                          <q>Welcome to our digital agency We specialize in helping business most like
                                             yours succeed online. From website design and development to digital
                                             marketing agency</q>
                                       </blockquote>
                                    </div>
                                    <div class="author-meta">
                                       <div class="author-meta__thumb">
                                          <img src="assets/images/testimonial/avatar.png" alt="Image">
                                       </div>
                                       <div class="author-meta__content">
                                          <h5>Delores Olivo</h5>
                                          <p>From UK</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="testimonial-two__slider-single">
                                    <div class="paragraph">
                                       <blockquote class="secondary-text">
                                          <q>Welcome to our digital agency We specialize in helping business most like
                                             yours succeed online. From website design and development to digital
                                             marketing agency</q>
                                       </blockquote>
                                    </div>
                                    <div class="author-meta">
                                       <div class="author-meta__thumb">
                                          <img src="assets/images/testimonial/avatar.png" alt="Image">
                                       </div>
                                       <div class="author-meta__content">
                                          <h5>Delores Olivo</h5>
                                          <p>From UK</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <img src="assets/images/testimonial/star.png" alt="Image" class="star">
               </section>
               <!-- ==== / testimonial end ==== -->
               <!-- ==== blog start ==== -->
               <section class="section blog blog-two light blog-two-light">
                  <div class="container">
                     <div class="row">
                        <div class="col-12">
                           <div class="section__header--secondary">
                              <div class="row gaper align-items-center">
                                 <div class="col-12 col-lg-8">
                                    <div class="section__header text-center text-lg-start mb-0">
                                       <span class="sub-title">
                                          news & Blog
                                          <i class="fa-solid fa-arrow-right"></i>
                                       </span>
                                       <h2 class="title title-anim">what's new in blog</h2>
                                    </div>
                                 </div>
                                 <div class="col-12 col-lg-4">
                                    <div class="slide-group justify-content-center justify-content-lg-end">
                                       <a href="javascript:void(0)" aria-label="previous item" class="slide-btn prev-blog">
                                          <i class="fa-light fa-angle-left"></i>
                                       </a>
                                       <a href="javascript:void(0)" aria-label="next item" class="slide-btn next-blog">
                                          <i class="fa-light fa-angle-right"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="blog-two__slider">
                     <div class="blog-two__slider-single topy-tilt">
                        <div class="blog__single-thumb">
                           <a href="blog-single.php">
                              <img src="assets/images/blog/three.png" alt="Image">
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
                     <div class="blog-two__slider-single topy-tilt">
                        <div class="blog__single-thumb">
                           <a href="blog-single.php">
                              <img src="assets/images/blog/four.png" alt="Image">
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
                     <div class="blog-two__slider-single topy-tilt">
                        <div class="blog__single-thumb">
                           <a href="blog-single.php">
                              <img src="assets/images/blog/five.png" alt="Image">
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
                     <div class="blog-two__slider-single topy-tilt">
                        <div class="blog__single-thumb">
                           <a href="blog-single.php">
                              <img src="assets/images/blog/three.png" alt="Image">
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
                     <div class="blog-two__slider-single topy-tilt">
                        <div class="blog__single-thumb">
                           <a href="blog-single.php">
                              <img src="assets/images/blog/four.png" alt="Image">
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
                     <div class="blog-two__slider-single topy-tilt">
                        <div class="blog__single-thumb">
                           <a href="blog-single.php">
                              <img src="assets/images/blog/five.png" alt="Image">
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
               </section>
               <!-- ==== / blog end ==== -->
               <!-- ==== cta start ==== -->
               <section class="cta-s">
                  <div class="container">
                     <div class="row">
                        <div class="col-12">
                           <div class="cta__wrapper" data-background="assets/images/cta-bg.png">
                              <div class="row justify-content-center">
                                 <div class="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                                    <div class="section__header text-center">
                                       <h2 class="title">Stay Ahead With Our Top Notch Digital Services</h2>
                                    </div>
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
                              <img src="assets/images/testimonial/star.png" alt="Image" class="star">
                              <img src="assets/images/testimonial/star.png" alt="Image" class="star-two">
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- ==== / cta end ==== -->
               <!-- ==== next page start ==== -->
               <section class="section next-page next-p-two-light">
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
                              <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                           </a>
                        </h2>
                     </div>
                     <div class="next__text-slider-single">
                        <h2 class="h1">
                           <a href="about-us.php">
                              About Us
                              <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                           </a>
                        </h2>
                     </div>
                  </div>
               </section>
               <!-- ==== / next page end ==== -->
            </main>
            <!-- ==== / main end ==== -->
            <!--<< Footer Section Start >>-->
            <?php include './partials/footer.php'?>
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
   <!-- jquery -->
   <script src="assets/vendor/jquery/jquery-3.7.0.min.js"></script>
   <!-- bootstrap five js -->
   <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
   <!-- nice select js -->
   <script src="assets/vendor/nice-select/js/jquery.nice-select.min.js"></script>
   <!-- magnific popup js -->
   <script src="assets/vendor/magnific-popup/js/jquery.magnific-popup.min.js"></script>
   <!-- slick js -->
   <script src="assets/vendor/slick/js/slick.min.js"></script>
   <!-- image loaded js -->
   <script src="assets/vendor/images-loaded/imagesloaded.pkgd.min.js"></script>
   <!-- isotope js -->
   <script src="assets/vendor/isotope/isotope.pkgd.min.js"></script>
   <!-- chroma js -->
   <script src="assets/vendor/gsap/chroma.min.js"></script>
   <!-- splittext js -->
   <script src="assets/vendor/gsap/SplitText.min.js"></script>
   <!-- scrollsmoother js -->
   <script src="assets/vendor/gsap/ScrollSmoother.min.js"></script>
   <!-- scrollto js -->
   <script src="assets/vendor/gsap/ScrollToPlugin.min.js"></script>
   <!-- scrolltrigger js -->
   <script src="assets/vendor/gsap/ScrollTrigger.min.js"></script>
   <!-- gsap js -->
   <script src="assets/vendor/gsap/gsap.min.js"></script>
   <!-- vanilla tilt js -->
   <script src="assets/vendor/vanilla-tilt/tilt.jquery.js"></script>
   <!-- ==== / js dependencies end ==== -->
   <!-- plugins js -->
   <script src="assets/js/plugins.js"></script>
   <!-- main js -->
   <script src="assets/js/main.js"></script>
</body>

</html>