<!DOCTYPE html>
<html lang="en">

<?php $title='Xpovio - Digital Agency Creative Portfolio Template '?>
<?php include './partials/head.php'?>

<body class=" home-four-light">
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
         <div class="primary-navbar quaternary--navbar">
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
                              title="open offcanvas menu">
                              <i class="fa-light fa-bars-staggered"></i>
                           </button>
                           <div class="tertiary-cta d-none d-sm-flex">
                              <div class="navbar__mobile-options">
                                 <a href="contact-us.php" class="btn btn--secondary">
                                    Let's Talk
                                    <i class="fa-solid fa-arrow-up-right"></i>
                                 </a>
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
               <section class="banner-four">
                  <div class="container">
                     <div class="row">
                        <div class="col-12">
                           <div class="banner-four__content">
                              <div class="intro">
                                 <p>I'm a brand led designer that combines creative with strategy to create compelling
                                    brand identity and digital design experiences.</p>
                                 <div class="arrow-wrapper">
                                    <span class="arrow"></span>
                                 </div>
                              </div>
                              <div class="banner-four__title">
                                 <h1>
                                    i am a digital
                                    designer
                                    <a class="frame g-ban-frame" href="about-us.php">
                                       <img src="assets/images/video-frame-three.png" alt="Image">
                                       <i class="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                    &
                                    dreamer
                                 </h1>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <img src="assets/images/banner/four-thumb-l-sm.png" alt="Image" class="small">
                  <img src="assets/images/banner/four-thumb-l.png" alt="Image" class="large g-ban-four">
               </section>
               <!-- ==== / banner end ==== -->
               <!-- ==== info start ==== -->
               <section class="section four-info">
                  <div class="container">
                     <div class="row gaper align-items-start">
                        <div class="col-12 col-lg-6">
                           <h2 class="light-title text-uppercase fw-7 title-anim">hello there !</h2>
                        </div>
                        <div class="col-12 col-lg-6">
                           <div class="four-info__content">
                              <p class="primary-text">
                                 An independent creative agency for all your branding, advertising and film production
                                 needs. With our signature style.
                              </p>
                              <p>Hey, I'm Dan, a graphic designer, creative and social architect who loves to tell
                                 stories and creating feeling through the art of experimentation and motion. I'm
                                 currently a designer at Visions Design doing a mix of motion graphics, web design and
                                 branding.</p>
                              <div class="section__content-cta">
                                 <a href="contact-us.php" class="btn btn--primary">contact us</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- ==== / info end ==== -->
               <!-- project slider start -->
               <div class="project__text-slider">
                  <div class="project__text-slider-single">
                     <h2 class="light-title">
                        <a href="our-projects.php">
                           Projects
                           <i class="fa-sharp fa-solid fa-star"></i>
                        </a>
                     </h2>
                  </div>
                  <div class="project__text-slider-single">
                     <h2 class="light-title">
                        <a href="our-projects.php">
                           Projects
                           <i class="fa-sharp fa-solid fa-star"></i>
                        </a>
                     </h2>
                  </div>
                  <div class="project__text-slider-single">
                     <h2 class="light-title">
                        <a href="our-projects.php">
                           Projects
                           <i class="fa-sharp fa-solid fa-star"></i>
                        </a>
                     </h2>
                  </div>
                  <div class="project__text-slider-single">
                     <h2 class="light-title">
                        <a href="our-projects.php">
                           Projects
                           <i class="fa-sharp fa-solid fa-star"></i>
                        </a>
                     </h2>
                  </div>
                  <div class="project__text-slider-single">
                     <h2 class="light-title">
                        <a href="our-projects.php">
                           Projects
                           <i class="fa-sharp fa-solid fa-star"></i>
                        </a>
                     </h2>
                  </div>
                  <div class="project__text-slider-single">
                     <h2 class="light-title">
                        <a href="our-projects.php">
                           Projects
                           <i class="fa-sharp fa-solid fa-star"></i>
                        </a>
                     </h2>
                  </div>
                  <div class="project__text-slider-single">
                     <h2 class="light-title">
                        <a href="our-projects.php">
                           Projects
                           <i class="fa-sharp fa-solid fa-star"></i>
                        </a>
                     </h2>
                  </div>
               </div>
               <!-- / project slider end -->
               <!-- ==== projects start ==== -->
               <section class="section projects-s pt-0 fade-wrapper">
                  <div class="container">
                     <div class="row gaper align-items-start">
                        <div class="col-12 col-lg-6 col-xl-7">
                           <div class="projects-s__single topy-tilt fade-top">
                              <div class="thumb">
                                 <a href="project-single.php">
                                    <img src="assets/images/projects/five.png" alt="Image">
                                 </a>
                              </div>
                              <div class="content">
                                 <h4>
                                    <a href="project-single.php">Vivamus vehicula ligula augue, id porttitor</a>
                                 </h4>
                                 <p>Helping people in their journey self-improvement through incrementalchanges from
                                    behavioural changes and attitudes</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-5">
                           <div class="projects-s__single topy-tilt fade-top">
                              <div class="thumb">
                                 <a href="project-single.php">
                                    <img src="assets/images/projects/four.png" alt="Image">
                                 </a>
                              </div>
                              <div class="content">
                                 <h4>
                                    <a href="project-single.php">Kaizen Psychology</a>
                                 </h4>
                                 <p>Helping people in their journey self-improvement through incrementalchanges from
                                    behavioural changes and attitudes</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row gaper align-items-end">
                        <div class="col-12 col-lg-6 col-xl-5">
                           <div class="projects-s__single topy-tilt fade-top">
                              <div class="thumb">
                                 <a href="project-single.php">
                                    <img src="assets/images/projects/one.png" alt="Image">
                                 </a>
                              </div>
                              <div class="content">
                                 <h4>
                                    <a href="project-single.php">varius suscipit lectus. Suspendisse</a>
                                 </h4>
                                 <p>Helping people in their journey self-improvement through incrementalchanges from
                                    behavioural changes and attitudes</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-7">
                           <div class="projects-s__single topy-tilt fade-top">
                              <div class="thumb">
                                 <a href="project-single.php">
                                    <img src="assets/images/projects/eight.png" alt="Image">
                                 </a>
                              </div>
                              <div class="content">
                                 <h4>
                                    <a href="project-single.php">Quisque sit amet felis non mi conse ullamcorper</a>
                                 </h4>
                                 <p>Helping people in their journey self-improvement through incrementalchanges from
                                    behavioural changes and attitudes</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row gaper align-items-start">
                        <div class="col-12 col-lg-6 col-xl-7">
                           <div class="projects-s__single topy-tilt fade-top">
                              <div class="thumb">
                                 <a href="project-single.php">
                                    <img src="assets/images/projects/six.png" alt="Image">
                                 </a>
                              </div>
                              <div class="content">
                                 <h4>
                                    <a href="project-single.php">Contrary to popular belief, Lorem Ipsum is not</a>
                                 </h4>
                                 <p>Helping people in their journey self-improvement through incrementalchanges from
                                    behavioural changes and attitudes</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-5">
                           <div class="projects-s__single topy-tilt fade-top">
                              <div class="thumb">
                                 <a href="project-single.php">
                                    <img src="assets/images/projects/two.png" alt="Image">
                                 </a>
                              </div>
                              <div class="content">
                                 <h4>
                                    <a href="project-single.php">Internet tend to repeat predefined</a>
                                 </h4>
                                 <p>Helping people in their journey self-improvement through incrementalchanges from
                                    behavioural changes and attitudes</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row gaper align-items-end ">
                        <div class="col-12 col-lg-6 col-xl-5">
                           <div class="projects-s__single topy-tilt fade-top">
                              <div class="thumb">
                                 <a href="project-single.php">
                                    <img src="assets/images/projects/three.png" alt="Image">
                                 </a>
                              </div>
                              <div class="content">
                                 <h4>
                                    <a href="project-single.php">available, but the majority have</a>
                                 </h4>
                                 <p>Helping people in their journey self-improvement through incrementalchanges from
                                    behavioural changes and attitudes</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-7">
                           <div class="projects-s__single topy-tilt fade-top">
                              <div class="thumb">
                                 <a href="project-single.php">
                                    <img src="assets/images/projects/seven.png" alt="Image">
                                 </a>
                              </div>
                              <div class="content">
                                 <h4>
                                    <a href="project-single.php">The generated Lorem Ipsum is therefore always</a>
                                 </h4>
                                 <p>Helping people in their journey self-improvement through incrementalchanges from
                                    behavioural changes and attitudes</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-12">
                           <div class="text-center">
                              <a href="our-projects.php" class="btn btn--secondary">Load More</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- ==== / projects end ==== -->
            </main>
            <!-- ==== / main end ==== -->
            <!-- ==== footer start ==== -->
            <footer class="section footer-four pb-0">
               <div class="container">
                  <div class="row">
                     <div class="col-12">
                        <div class="footer-four__content">
                           <div class="intro text-center">
                              <h2 class="light-title text-uppercase title-anim">
                                 Let's make some magic ✨ happen and show the world what your brand is all about!
                              </h2>
                           </div>
                           <div class="row justify-content-center cta-t section__content-cta">
                              <div class="col-12 col-md-8">
                                 <h3>
                                    <a href="contact-us.php">
                                       Let's Talk
                                       <i class="fa-regular fa-comment-dots"></i>
                                    </a>
                                 </h3>
                                 <p>Let's make your brand the talk of the town</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="row align-items-center copy-t gaper section__content-cta">
                     <div class="col-12 col-lg-6">
                        <ul class="justify-content-center justify-content-lg-start">
                           <li>
                              <a href="https://www.linkedin.com/" target="_blank">
                                 Linkedin
                              </a>
                           </li>
                           <li>
                              <a href="https://www.twitter.com/" target="_blank">
                                 Twitter
                              </a>
                           </li>
                           <li>
                              <a href="https://www.facebook.com/" target="_blank">
                                 Facebook
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div class="col-12 col-lg-6">
                        <div class="text-center text-lg-end">
                           <a href="mailto:hello@website.com" class="text-capitalize">hello@website.com</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="footer-three__copyright mt-0">
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
                                          <img src="assets/images/logo-light.png" alt="Image">
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