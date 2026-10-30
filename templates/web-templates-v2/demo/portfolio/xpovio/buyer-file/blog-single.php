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
               <!-- ==== banner start ==== -->
                  <!--<< Breadcrumb Section Start >>-->
               <?php 
                     $img='assets/images/banner/cmn-banner-bg.png';
                     $Title='Home';
                     $Title2 = ' Blog Details';
               ?>
               <?php include './partials/page-header.php'?>
              
               <!-- ==== blog details start ==== -->
               <section class="section blog-main blog-details fade-wrapper">
                  <div class="container">
                     <div class="row gaper">
                        <div class="col-12 col-xl-8">
                           <div class="blog-details__content">
                              <div class="bd-thumb fade-top">
                                 <img src="assets/images/news/poster.png" alt="Image">
                              </div>
                              <div class="bd-content">
                                 <div class="bd-meta">
                                    <div class="meta__left">
                                       <p>
                                          <strong>Written by :</strong>
                                          Marry biden
                                       </p>
                                       <span></span>
                                       <p>10/01/2023</p>
                                    </div>
                                 </div>
                                 <div class="bd-content-info">
                                    <h4 class="h4">
                                       Guide dog shortage: The blind people who train their
                                    </h4>
                                    <div class="paragraph">
                                       <p>
                                          Proin ultricies ultricies est vitae cursus. Nulla sit
                                          amet suscipit tortor. Maecenas dui erat, ornare eget
                                          tristique vitae, rutrum pretium justo. Phasellus vitae
                                          consequat nisi, quis luctus nisl. Praesent faucibus sem
                                          id massa semper ornare. Nam eu magna at mi pellentesque
                                          mattis. Morbi at condimentum velit. Phasellus aliquet,
                                          leo auctor volutpat ultrices, metus dolor dictum enim,
                                          sed convallis lacus urna nec erat.
                                       </p>
                                       <p>
                                          consectetur adipiscing elit. Etiam at mauris accumsan mi
                                          pulvinar lacinia a in justo. Ut tempor et libero quis
                                          dignissim. Nulla at convallis libero, vitae aliquam leo.
                                          Etiam ut augue nibh. In laoreet neque quis ex ornare,
                                          quis auctor elit facilisis. Mauris dapibus massa rhoncus
                                          ligula luctus vulputate. Fusce condimentum placerat
                                          vulputate. Praesent ullamcorper dui in dui sagittis
                                          commodo.
                                       </p>
                                    </div>
                                    <h4 class="h4">Where can I get some?</h4>
                                 </div>
                              </div>
                              <div class="bd-group">
                                 <img src="assets/images/news/group-one.png" alt="Image" class="fade-top">
                                 <img src="assets/images/news/group-two.png" alt="Image" class="fade-top">
                              </div>
                              <div class="bd-content ">
                                 <div class="bd-content__alt">
                                    <p>
                                       Proin ultricies ultricies est vitae cursus. Nulla sit amet
                                       suscipit tortor. Maecenas dui erat, ornare eget tristique
                                       vitae, rutrum pretium justo. Phasellus vitae consequat
                                       nisi, quis luctus nisl. Praesent faucibus sem id massa
                                       semper ornare. Nam eu magna at mi pellentesque mattis.
                                       Morbi at condimentum velit. Phasellus aliquet, leo auctor
                                       volutpat ultrices, metus dolor dictum enim, sed convallis
                                       lacus urna nec erat.
                                    </p>
                                    <ul>
                                       <li>Mauris maximus diam ac imperdiet dictum.</li>
                                       <li>
                                          Maecenas eget ipsum dapibus, rutrum mi non, ultricies
                                          massa.
                                       </li>
                                       <li>Nam non purus porta risus tincidunt cursus.</li>
                                       <li>
                                          Quisque blandit lacus vel urna pellentesque mattis.
                                       </li>
                                       <li>Maecenas vehicula tortor et consectetur faucibus.</li>
                                    </ul>
                                 </div>
                              </div>
                              <div class="bd-quote">
                                 <blockquote>
                                    <q class="light-title-lg">
                                       Neque porro quisquam est qui dolorem ipsum quia dolor sit
                                       amet, consectetur, adipisci velit...
                                    </q>
                                 </blockquote>
                              </div>
                              <div class="bd-content">
                                 <div class="bd-content__alt mt-0">
                                    <p>
                                       Proin ultricies ultricies est vitae cursus. Nulla sit amet
                                       suscipit tortor. Maecenas dui erat, ornare eget tristique
                                       vitae, rutrum pretium justo. Phasellus vitae consequat
                                       nisi, quis luctus nisl. Praesent faucibus sem id massa
                                       semper ornare. Nam eu magna at mi pellentesque mattis.
                                       Morbi at condimentum velit. Phasellus aliquet, leo auctor
                                       volutpat ultrices, metus dolor dictum enim, sed convallis
                                       lacus urna nec erat.
                                    </p>
                                 </div>
                              </div>
                              <div class="bd-tags">
                                 <div class="tags-left">
                                    <p>Tags:</p>
                                    <div class="tags-content">
                                       <a href="blog.php">Nature</a>
                                       <a href="blog.php">Health</a>
                                    </div>
                                 </div>
                                 <div class="tags-right">
                                    <p>Share:</p>
                                    <ul class="social">
                                       <li>
                                          <a href="index.php" aria-label="social media">
                                             <i class="fa-brands fa-facebook-f"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="index.php" aria-label="social media">
                                             <i class="fa-brands fa-twitter"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="index.php" aria-label="social media">
                                             <i class="fa-brands fa-youtube"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="index.php" aria-label="social media">
                                             <i class="fa-brands fa-instagram"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div class="blog-details__pagination">
                              <div class="row gaper">
                                 <div class="col-md-6">
                                    <div class="single">
                                       <a href="blog.php">
                                          <i class="fa-solid fa-arrow-left-long"></i>
                                          Previous Blog
                                       </a>
                                       <div class="latest-single">
                                          <div class="latest-thumb">
                                             <a href="blog-single.php">
                                                <img src="assets/images/news/eleven.png" alt="Image">
                                             </a>
                                          </div>
                                          <div class="latest-content">
                                             <p>10/01/2023</p>
                                             <p>
                                                <a href="blog-single.php">
                                                   Guide dog shortage: The blind peo ple who train
                                                   their own guide
                                                </a>
                                             </p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-6">
                                    <div class="single single--alt">
                                       <a href="blog.php">
                                          Next Blog
                                          <i class="fa-solid fa-arrow-right-long"></i>
                                       </a>
                                       <div class="latest-single">
                                          <div class="latest-thumb">
                                             <a href="blog-single.php">
                                                <img src="assets/images/news/ten.png" alt="Image">
                                             </a>
                                          </div>
                                          <div class="latest-content">
                                             <p>10/01/2023</p>
                                             <p>
                                                <a href="blog-single.php">
                                                   Guide dog shortage: The blind peo ple who train
                                                   their own guide
                                                </a>
                                             </p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="section pb-0 comment-form fade-top">
                                 <div class="section__header">
                                    <h2 class="h2 text-start">Leave a comment</h2>
                                 </div>
                                 <form action="#" method="post">
                                    <div class="form-group-wrapper">
                                       <div class="form-group-single">
                                          <input type="text" name="comment-name" id="commentName" placeholder="Name">
                                       </div>
                                       <div class="form-group-single">
                                          <input type="email" name="comment-email" id="commentemail"
                                             placeholder="Email">
                                       </div>
                                    </div>
                                    <div class="form-group-single">
                                       <textarea name="comment-message" id="commentMessage"
                                          placeholder="Write Comment..."></textarea>
                                    </div>
                                    <div class="cta__group">
                                       <button type="submit" class="btn btn--ocotonary">
                                          post comment
                                          <i class="fa-solid fa-arrow-right-long"></i>
                                       </button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-xl-4">
                           <div class="blog-main__sidebar">
                              <div class="widget ">
                                 <div class="widget__head">
                                    <h5 class="h5">Search</h5>
                                 </div>
                                 <div class="widget-search">
                                    <form action="#" method="post">
                                       <div class="form-group-input">
                                          <input type="search" name="blog-search" id="blogSearch"
                                             placeholder="Search here. . .">
                                          <button type="submit">
                                             <i class="fa-solid fa-magnifying-glass"></i>
                                          </button>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                              <div class="widget ">
                                 <div class="widget__head">
                                    <h5 class="h5">Categories</h5>
                                 </div>
                                 <div class="widget__list">
                                    <ul>
                                       <li>
                                          <a href="blog.php">Business</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">Job Market</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">Marketing</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">News</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">Social Media</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">Trends</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">Writing</a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div class="widget">
                                 <div class="widget__head">
                                    <h5 class="h5">Recent Posts</h5>
                                 </div>
                                 <div class="widget__latest">
                                    <div class="latest-single ">
                                       <div class="latest-thumb">
                                          <a href="blog-single.php">
                                             <img src="assets/images/news/ten.png" alt="Image">
                                          </a>
                                       </div>
                                       <div class="latest-content">
                                          <p>10/01/2023</p>
                                          <p>
                                             <a href="blog-single.php">
                                                Guide dog shortage: The blind peo ple who train
                                                their own guide
                                             </a>
                                          </p>
                                       </div>
                                    </div>
                                    <div class="latest-single ">
                                       <div class="latest-thumb">
                                          <a href="blog-single.php">
                                             <img src="assets/images/news/eleven.png" alt="Image">
                                          </a>
                                       </div>
                                       <div class="latest-content">
                                          <p>10/01/2023</p>
                                          <p>
                                             <a href="blog-single.php">
                                                Guide dog shortage: The blind peo ple who train
                                                their own guide
                                             </a>
                                          </p>
                                       </div>
                                    </div>
                                    <div class="latest-single ">
                                       <div class="latest-thumb">
                                          <a href="blog-single.php">
                                             <img src="assets/images/news/twelve.png" alt="Image">
                                          </a>
                                       </div>
                                       <div class="latest-content">
                                          <p>10/01/2023</p>
                                          <p>
                                             <a href="blog-single.php">
                                                Guide dog shortage: The blind peo ple who train
                                                their own guide
                                             </a>
                                          </p>
                                       </div>
                                    </div>
                                    <div class="latest-single ">
                                       <div class="latest-thumb">
                                          <a href="blog-single.php">
                                             <img src="assets/images/news/thirteen.png" alt="Image">
                                          </a>
                                       </div>
                                       <div class="latest-content">
                                          <p>10/01/2023</p>
                                          <p>
                                             <a href="blog-single.php">
                                                Guide dog shortage: The blind peo ple who train
                                                their own guide
                                             </a>
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="widget">
                                 <div class="widget__head">
                                    <h5 class="h5">Tags</h5>
                                 </div>
                                 <div class="widget__tags">
                                    <ul>
                                       <li>
                                          <a href="blog.php">nature</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">health</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">galaxy</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">creative</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">art</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">business</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">space</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">biology</a>
                                       </li>
                                       <li>
                                          <a href="blog.php">environemnt</a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div class="widget widget-big ">
                                 <a href="blog-single.php">
                                    <img src="assets/images/news/fourteen.png" alt="Image">
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <!-- ==== / blog details end ==== -->
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