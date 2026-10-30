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
                     $Title2 = 'Error';
               ?>
               <?php include './partials/page-header.php'?>

              
               <!-- ==== error start ==== -->
               <section class="section error fade-wrapper">
                  <div class="container">
                     <div class="row justify-content-center">
                        <div class="col-12 col-xl-7">
                           <div class="error__content text-center fade-top">
                              <span class="secondary-text">ERROR</span>
                              <div class="thumb">
                                 <img src="assets/images/error-thumb.png" alt="Image">
                              </div>
                              <h2>page not found</h2>
                              <div class="section__content-cta">
                                 <a href="index.php" class="btn btn--secondary">back to home</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- ==== / error end ==== -->
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