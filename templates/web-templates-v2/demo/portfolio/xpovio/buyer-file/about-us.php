<!DOCTYPE html>
<html lang="en">
<?php $title='Xpovio - Digital Agency Creative Portfolio Template '?>
<?php include './partials/head.php'?>

<body>
   <!--[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
      <![endif]-->
   <div class="my-app">
      <!-- Preloader Start -->
      <?php include './partials/preloader.php'?>

      <!-- Cursor Area Start -->
      <?php include './partials/cursor.php'?>

      <!-- Header Section Start -->
      <?php include './partials/header.php'?>

      <div id="smooth-wrapper">
         <div id="smooth-content">
            <!-- ==== main start ==== -->
            <main>
                <!--<< Breadcrumb Section Start >>-->
               <?php 
                     $img='assets/images/banner/cmn-banner-bg.png';
                     $Title='Home';
                     $Title2 = 'About Us';
               ?>
               <?php include './partials/page-header.php'?>
               <!-- ==== video modal start ==== -->
               <div class="video-modal">
                  <img src="assets/images/modal-bg.png" alt="Image" class="modal-bg">
                  <a class="video-frame video-btn" href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank">
                     <img src="assets/images/video-frame-two.png" alt="Image">
                     <i class="fa-sharp fa-solid fa-play"></i>
                  </a>
               </div>
               <!-- ==== / video modal end ==== -->
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
               <!-- ==== team members start ==== -->
               <section class="section team-slider-s">
                  <div class="container">
                     <div class="row">
                        <div class="col-12">
                           <div class="section__header--secondary">
                              <div class="row gaper align-items-center">
                                 <div class="col-12 col-lg-8">
                                    <div class="section__header text-center text-lg-start mb-0">
                                       <span class="sub-title">
                                          our awesome crew
                                          <i class="fa-solid fa-arrow-right"></i>
                                       </span>
                                       <h2 class="title title-anim">our xpovio team members</h2>
                                    </div>
                                 </div>
                                 <div class="col-12 col-lg-4">
                                    <div class="text-center text-lg-end">
                                       <a href="our-teams.php" class="btn btn--primary text-capitalize">view all
                                          teams</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="team-r position-relative">
                     <div class="team-s__slider">
                        <div class="team-s__slider-single">
                           <div class="team-wrap">
                              <div class="thumb">
                                 <a href="team-single.php">
                                    <img src="assets/images/teams/one.png" alt="Image">
                                 </a>
                                 <div class="thumb__content" data-background="assets/images/teams/bg.png">
                                    <div class="info">
                                       <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                    </div>
                                    <h4>
                                       <a href="team-single.php">Sana p. Lesh</a>
                                    </h4>
                                    <p>Senior engineer</p>
                                    <div class="social-alt">
                                       <a href="https://www.facebook.com/" target="_blank"
                                          aria-label="share us on facebook">
                                          <i class="fa-brands fa-facebook-f"></i>
                                       </a>
                                       <a href="https://www.twitter.com/" target="_blank"
                                          aria-label="share us on twitter">
                                          <i class="fa-brands fa-twitter"></i>
                                       </a>
                                       <a href="https://www.pinterest.com/" target="_blank"
                                          aria-label="share us on pinterest">
                                          <i class="fa-brands fa-linkedin-in"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div class="content">
                                 <div class="intro">
                                    <h5>
                                       <a href="team-single.php">Hershel J. Jackson</a>
                                    </h5>
                                    <p>Sr. Product Designer</p>
                                 </div>
                                 <hr>
                                 <div class="inner">
                                    <p>Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus,
                                       cursus mauris in, placerat libero. Morbi tincidunt venenatis</p>
                                    <div class="skill-wrap">
                                       <div class="skill-bar-single">
                                          <div class="skill-bar-title">
                                             <p>Wireframe</p>
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
                                             <p>Visual Design</p>
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
                                    <p>Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem
                                       feugiat</p>
                                 </div>
                                 <div class="social">
                                    <a href="https://www.facebook.com/" target="_blank"
                                       aria-label="share us on facebook">
                                       <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" aria-label="share us on twitter">
                                       <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank"
                                       aria-label="share us on pinterest">
                                       <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank"
                                       aria-label="share us on instagram">
                                       <i class="fa-brands fa-instagram"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="team-s__slider-single">
                           <div class="team-wrap">
                              <div class="thumb">
                                 <a href="team-single.php">
                                    <img src="assets/images/teams/two.png" alt="Image">
                                 </a>
                                 <div class="thumb__content" data-background="assets/images/teams/bg.png">
                                    <div class="info">
                                       <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                    </div>
                                    <h4>
                                       <a href="team-single.php">Sana p. Lesh</a>
                                    </h4>
                                    <p>Senior engineer</p>
                                    <div class="social-alt">
                                       <a href="https://www.facebook.com/" target="_blank"
                                          aria-label="share us on facebook">
                                          <i class="fa-brands fa-facebook-f"></i>
                                       </a>
                                       <a href="https://www.twitter.com/" target="_blank"
                                          aria-label="share us on twitter">
                                          <i class="fa-brands fa-twitter"></i>
                                       </a>
                                       <a href="https://www.pinterest.com/" target="_blank"
                                          aria-label="share us on pinterest">
                                          <i class="fa-brands fa-linkedin-in"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div class="content">
                                 <div class="intro">
                                    <h5>
                                       <a href="team-single.php">Hershel J. Jackson</a>
                                    </h5>
                                    <p>Sr. Product Designer</p>
                                 </div>
                                 <hr>
                                 <div class="inner">
                                    <p>Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus,
                                       cursus mauris in, placerat libero. Morbi tincidunt venenatis</p>
                                    <div class="skill-wrap">
                                       <div class="skill-bar-single">
                                          <div class="skill-bar-title">
                                             <p>Wireframe</p>
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
                                             <p>Visual Design</p>
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
                                    <p>Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem
                                       feugiat</p>
                                 </div>
                                 <div class="social">
                                    <a href="https://www.facebook.com/" target="_blank"
                                       aria-label="share us on facebook">
                                       <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" aria-label="share us on twitter">
                                       <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank"
                                       aria-label="share us on pinterest">
                                       <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank"
                                       aria-label="share us on instagram">
                                       <i class="fa-brands fa-instagram"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="team-s__slider-single">
                           <div class="team-wrap">
                              <div class="thumb">
                                 <a href="team-single.php">
                                    <img src="assets/images/teams/three.png" alt="Image">
                                 </a>
                                 <div class="thumb__content" data-background="assets/images/teams/bg.png">
                                    <div class="info">
                                       <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                    </div>
                                    <h4>
                                       <a href="team-single.php">Sana p. Lesh</a>
                                    </h4>
                                    <p>Senior engineer</p>
                                    <div class="social-alt">
                                       <a href="https://www.facebook.com/" target="_blank"
                                          aria-label="share us on facebook">
                                          <i class="fa-brands fa-facebook-f"></i>
                                       </a>
                                       <a href="https://www.twitter.com/" target="_blank"
                                          aria-label="share us on twitter">
                                          <i class="fa-brands fa-twitter"></i>
                                       </a>
                                       <a href="https://www.pinterest.com/" target="_blank"
                                          aria-label="share us on pinterest">
                                          <i class="fa-brands fa-linkedin-in"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div class="content">
                                 <div class="intro">
                                    <h5>
                                       <a href="team-single.php">Hershel J. Jackson</a>
                                    </h5>
                                    <p>Sr. Product Designer</p>
                                 </div>
                                 <hr>
                                 <div class="inner">
                                    <p>Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus,
                                       cursus mauris in, placerat libero. Morbi tincidunt venenatis</p>
                                    <div class="skill-wrap">
                                       <div class="skill-bar-single">
                                          <div class="skill-bar-title">
                                             <p>Wireframe</p>
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
                                             <p>Visual Design</p>
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
                                    <p>Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem
                                       feugiat</p>
                                 </div>
                                 <div class="social">
                                    <a href="https://www.facebook.com/" target="_blank"
                                       aria-label="share us on facebook">
                                       <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" aria-label="share us on twitter">
                                       <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank"
                                       aria-label="share us on pinterest">
                                       <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank"
                                       aria-label="share us on instagram">
                                       <i class="fa-brands fa-instagram"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="team-s__slider-single">
                           <div class="team-wrap">
                              <div class="thumb">
                                 <a href="team-single.php">
                                    <img src="assets/images/teams/four.png" alt="Image">
                                 </a>
                                 <div class="thumb__content" data-background="assets/images/teams/bg.png">
                                    <div class="info">
                                       <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                    </div>
                                    <h4>
                                       <a href="team-single.php">Sana p. Lesh</a>
                                    </h4>
                                    <p>Senior engineer</p>
                                    <div class="social-alt">
                                       <a href="https://www.facebook.com/" target="_blank"
                                          aria-label="share us on facebook">
                                          <i class="fa-brands fa-facebook-f"></i>
                                       </a>
                                       <a href="https://www.twitter.com/" target="_blank"
                                          aria-label="share us on twitter">
                                          <i class="fa-brands fa-twitter"></i>
                                       </a>
                                       <a href="https://www.pinterest.com/" target="_blank"
                                          aria-label="share us on pinterest">
                                          <i class="fa-brands fa-linkedin-in"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div class="content">
                                 <div class="intro">
                                    <h5>
                                       <a href="team-single.php">Hershel J. Jackson</a>
                                    </h5>
                                    <p>Sr. Product Designer</p>
                                 </div>
                                 <hr>
                                 <div class="inner">
                                    <p>Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus,
                                       cursus mauris in, placerat libero. Morbi tincidunt venenatis</p>
                                    <div class="skill-wrap">
                                       <div class="skill-bar-single">
                                          <div class="skill-bar-title">
                                             <p>Wireframe</p>
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
                                             <p>Visual Design</p>
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
                                    <p>Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem
                                       feugiat</p>
                                 </div>
                                 <div class="social">
                                    <a href="https://www.facebook.com/" target="_blank"
                                       aria-label="share us on facebook">
                                       <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" aria-label="share us on twitter">
                                       <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank"
                                       aria-label="share us on pinterest">
                                       <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank"
                                       aria-label="share us on instagram">
                                       <i class="fa-brands fa-instagram"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="team-s__slider-single">
                           <div class="team-wrap">
                              <div class="thumb">
                                 <a href="team-single.php">
                                    <img src="assets/images/teams/five.png" alt="Image">
                                 </a>
                                 <div class="thumb__content" data-background="assets/images/teams/bg.png">
                                    <div class="info">
                                       <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                    </div>
                                    <h4>
                                       <a href="team-single.php">Sana p. Lesh</a>
                                    </h4>
                                    <p>Senior engineer</p>
                                    <div class="social-alt">
                                       <a href="https://www.facebook.com/" target="_blank"
                                          aria-label="share us on facebook">
                                          <i class="fa-brands fa-facebook-f"></i>
                                       </a>
                                       <a href="https://www.twitter.com/" target="_blank"
                                          aria-label="share us on twitter">
                                          <i class="fa-brands fa-twitter"></i>
                                       </a>
                                       <a href="https://www.pinterest.com/" target="_blank"
                                          aria-label="share us on pinterest">
                                          <i class="fa-brands fa-linkedin-in"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div class="content">
                                 <div class="intro">
                                    <h5>
                                       <a href="team-single.php">Hershel J. Jackson</a>
                                    </h5>
                                    <p>Sr. Product Designer</p>
                                 </div>
                                 <hr>
                                 <div class="inner">
                                    <p>Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus,
                                       cursus mauris in, placerat libero. Morbi tincidunt venenatis</p>
                                    <div class="skill-wrap">
                                       <div class="skill-bar-single">
                                          <div class="skill-bar-title">
                                             <p>Wireframe</p>
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
                                             <p>Visual Design</p>
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
                                    <p>Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem
                                       feugiat</p>
                                 </div>
                                 <div class="social">
                                    <a href="https://www.facebook.com/" target="_blank"
                                       aria-label="share us on facebook">
                                       <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" aria-label="share us on twitter">
                                       <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank"
                                       aria-label="share us on pinterest">
                                       <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank"
                                       aria-label="share us on instagram">
                                       <i class="fa-brands fa-instagram"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="team-s__slider-single">
                           <div class="team-wrap">
                              <div class="thumb">
                                 <a href="team-single.php">
                                    <img src="assets/images/teams/six.png" alt="Image">
                                 </a>
                                 <div class="thumb__content" data-background="assets/images/teams/bg.png">
                                    <div class="info">
                                       <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                    </div>
                                    <h4>
                                       <a href="team-single.php">Sana p. Lesh</a>
                                    </h4>
                                    <p>Senior engineer</p>
                                    <div class="social-alt">
                                       <a href="https://www.facebook.com/" target="_blank"
                                          aria-label="share us on facebook">
                                          <i class="fa-brands fa-facebook-f"></i>
                                       </a>
                                       <a href="https://www.twitter.com/" target="_blank"
                                          aria-label="share us on twitter">
                                          <i class="fa-brands fa-twitter"></i>
                                       </a>
                                       <a href="https://www.pinterest.com/" target="_blank"
                                          aria-label="share us on pinterest">
                                          <i class="fa-brands fa-linkedin-in"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div class="content">
                                 <div class="intro">
                                    <h5>
                                       <a href="team-single.php">Hershel J. Jackson</a>
                                    </h5>
                                    <p>Sr. Product Designer</p>
                                 </div>
                                 <hr>
                                 <div class="inner">
                                    <p>Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus,
                                       cursus mauris in, placerat libero. Morbi tincidunt venenatis</p>
                                    <div class="skill-wrap">
                                       <div class="skill-bar-single">
                                          <div class="skill-bar-title">
                                             <p>Wireframe</p>
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
                                             <p>Visual Design</p>
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
                                    <p>Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem
                                       feugiat</p>
                                 </div>
                                 <div class="social">
                                    <a href="https://www.facebook.com/" target="_blank"
                                       aria-label="share us on facebook">
                                       <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" aria-label="share us on twitter">
                                       <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank"
                                       aria-label="share us on pinterest">
                                       <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank"
                                       aria-label="share us on instagram">
                                       <i class="fa-brands fa-instagram"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="team-s__slider-single">
                           <div class="team-wrap">
                              <div class="thumb">
                                 <a href="team-single.php">
                                    <img src="assets/images/teams/seven.png" alt="Image">
                                 </a>
                                 <div class="thumb__content" data-background="assets/images/teams/bg.png">
                                    <div class="info">
                                       <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                    </div>
                                    <h4>
                                       <a href="team-single.php">Sana p. Lesh</a>
                                    </h4>
                                    <p>Senior engineer</p>
                                    <div class="social-alt">
                                       <a href="https://www.facebook.com/" target="_blank"
                                          aria-label="share us on facebook">
                                          <i class="fa-brands fa-facebook-f"></i>
                                       </a>
                                       <a href="https://www.twitter.com/" target="_blank"
                                          aria-label="share us on twitter">
                                          <i class="fa-brands fa-twitter"></i>
                                       </a>
                                       <a href="https://www.pinterest.com/" target="_blank"
                                          aria-label="share us on pinterest">
                                          <i class="fa-brands fa-linkedin-in"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div class="content">
                                 <div class="intro">
                                    <h5>
                                       <a href="team-single.php">Hershel J. Jackson</a>
                                    </h5>
                                    <p>Sr. Product Designer</p>
                                 </div>
                                 <hr>
                                 <div class="inner">
                                    <p>Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus,
                                       cursus mauris in, placerat libero. Morbi tincidunt venenatis</p>
                                    <div class="skill-wrap">
                                       <div class="skill-bar-single">
                                          <div class="skill-bar-title">
                                             <p>Wireframe</p>
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
                                             <p>Visual Design</p>
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
                                    <p>Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem
                                       feugiat</p>
                                 </div>
                                 <div class="social">
                                    <a href="https://www.facebook.com/" target="_blank"
                                       aria-label="share us on facebook">
                                       <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" aria-label="share us on twitter">
                                       <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank"
                                       aria-label="share us on pinterest">
                                       <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank"
                                       aria-label="share us on instagram">
                                       <i class="fa-brands fa-instagram"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="slide-group">
                        <a href="javascript:void(0)" aria-label="previous item" class="slide-btn prev-team-s">
                           <i class="fa-light fa-angle-left"></i>
                        </a>
                        <a href="javascript:void(0)" aria-label="next item" class="slide-btn next-team-s">
                           <i class="fa-light fa-angle-right"></i>
                        </a>
                     </div>
                  </div>
               </section>
               <!-- ==== / team members end ==== -->
               <!-- ==== testimonial start ==== -->
               <section class="section testimonial pt-0 pb-0 position-relative">
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
               <div class="sponsor section pb-0">
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
               <!-- ==== cta start ==== -->
               <section class="cta-s section">
                  <div class="container">
                     <div class="row">
                        <div class="col-12">
                           <div class="cta__wrapper" data-background="assets/images/cta-bg.png">
                              <div class="row justify-content-center">
                                 <div class="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                                    <div class="section__header text-center">
                                       <h2 class="title title-anim">Stay Ahead With Our Top Notch Digital Services</h2>
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
            </main>
            <!-- ==== / main end ==== -->
            <!--<< Footer Section Start >>-->
            <?php include './partials/footer.php'?>
         </div>
      </div>
      
   </div>
   <!-- Back to top area start here -->
   <?php include './partials/scroll-up.php'?>
   <!-- Back to top area end here -->
   <!--<< All JS Plugins >>-->
   <?php include './partials/script.php'?>
  
</body>

</html>