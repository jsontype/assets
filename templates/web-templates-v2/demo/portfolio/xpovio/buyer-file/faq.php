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
                     $Title2 = 'FAQ';
               ?>
               <?php include './partials/page-header.php'?>
              
               <!-- ==== faq start ==== -->
               <section class="section faq fade-wrapper">
                  <div class="container">
                     <div class="row gaper">
                        <div class="col-12 col-lg-6">
                           <div class="faq__thumb fade-left">
                              <img src="assets/images/faq-thumb.png" alt="Image">
                           </div>
                        </div>
                        <div class="col-12 col-lg-6">
                           <div class="accordion" id="accordion">
                              <div class="accordion-item fade-top">
                                 <h5 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       I'm a total beginner. Can I still follow along?
                                    </button>
                                 </h5>
                                 <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordion">
                                    <div class="accordion-body">
                                       <p>
                                          We have facility to produce advance work various industrial applications based
                                          on specially developed technol-ogy. We are also ready to developement by
                                          according to users changing needs. Infrastructure.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="accordion-item fade-top">
                                 <h5 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Will you be updating the program?
                                    </button>
                                 </h5>
                                 <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordion">
                                    <div class="accordion-body">
                                       <p>
                                          We have facility to produce advance work various industrial applications based
                                          on specially developed technol-ogy. We are also ready to developement by
                                          according to users changing needs. Infrastructure.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="accordion-item content__space fade-top">
                                 <h5 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseThree" aria-expanded="false"
                                       aria-controls="collapseThree">
                                       Can I get an invoice for my purchase?
                                    </button>
                                 </h5>
                                 <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordion">
                                    <div class="accordion-body">
                                       <p>
                                          We have facility to produce advance work various industrial applications based
                                          on specially developed technol-ogy. We are also ready to developement by
                                          according to users changing needs. Infrastructure.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="accordion-item content__space fade-top">
                                 <h5 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFour" aria-expanded="false"
                                       aria-controls="collapseFour">
                                       What is global search engine optimization?
                                    </button>
                                 </h5>
                                 <div id="collapseFour" class="accordion-collapse collapse"
                                    aria-labelledby="headingFour" data-bs-parent="#accordion">
                                    <div class="accordion-body">
                                       <p>
                                          We have facility to produce advance work various industrial applications based
                                          on specially developed technol-ogy. We are also ready to developement by
                                          according to users changing needs. Infrastructure.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- ==== / faq end ==== -->
            </main>
            <!-- ==== / main end ==== -->
            <!--<< Footer Section Start >>-->
            <?php include './partials/footer.php'?>
         </div>
      </div>
     <!-- Back to top area start here -->
   <?php include './partials/scroll-up.php'?>
   <!-- Back to top area end here -->
   </div>
     <!--<< All JS Plugins >>-->
   <?php include './partials/script.php'?>
</body>

</html>