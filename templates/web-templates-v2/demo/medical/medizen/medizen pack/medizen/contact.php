<?php $head_title="Blog Details || Medizen || Medizen PHP Template"?>
<?php $body_class="body-bg"?>
<?php require_once('parts/layout/top-layout.php'); ?>
<!-- header -->
<?php require_once('parts/header/header.php'); ?>
<?php
$page_title = "Blog Details";
require_once('parts/page-title.php');
?>

    <!-- Contact Section Start -->
    <section class="contact-section section-padding fix">
        <div class="container">
            <div class="space-bottom">
                <div class="row g-xl-6 g-4 contact-info-area">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="contact-info wow fadeInUp" data-wow-delay="0.6s">
                            <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
                            <div class="cont">
                                <h4 class="fw-bold black d-block mb-1">Address</h4>
                                <a href="mailto:Company@mail.com" class="pra fs-seven">Mirpur,10 Road 1 House 12 Mirpur
                                    Dhaka Bangladesh</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="contact-info wow fadeInUp" data-wow-delay="0.6s">
                            <div class="icon"><i class="fa-solid fa-envelope"></i></div>
                            <div class="cont">
                                <h4 class="fw-bold black d-block mb-1">Email</h4>
                                <a href="mailto:Company@mail.com" class="pra fs-seven">
                                    chirsbekham12@gmail.com <br>
                                    simmons12@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="contact-info wow fadeInUp" data-wow-delay="0.6s">
                            <div class="icon"><i class="fa-solid fa-phone"></i></div>
                            <div class="cont">
                                <h4 class="fw-bold black d-block mb-1">Phone</h4>
                                <a href="mailto:Company@mail.com" class="pra fs-seven">
                                    017 5552-0127 <br>
                                    017458632718
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-wrapper-anys white-bg rounded-4">
                <div class="row g-6 align-items-center justify-content-between">
                    <div class="col-lg-7">
                        <form action="#" class="appoentment-forms py-xl-0 py-6 px-xl-10 px-6">
                            <div class="section-title mb-60">
                                <span class="black fw_700 fs-six d-block mb-3 heading-font">Contact Us</span>
                                <h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                                    Get an
                                    <span class="position-relative z-1">
                                        Appiontment
                                        <img src="assets/img/element/title-badge1.png" alt="img"
                                            class="title-badge1 d-md-block d-none w-100">
                                    </span>
                                </h2>
                            </div>
                            <div class="row g-lg-4 g-3">
                                <div class="col-lg-6">
                                    <input type="text" placeholder="Your Name">
                                </div>
                                <div class="col-lg-6">
                                    <input type="email" placeholder="Your Email">
                                </div>
                                <div class="col-lg-6">
                                    <input type="text" placeholder="Phone Number">
                                </div>
                                <div class="col-lg-6">
                                    <input type="text" placeholder="Subject">
                                </div>
                                <div class="col-lg-12">
                                    <textarea name="message" placeholder="Message" rows="5"></textarea>
                                </div>
                                <div class="col-lg-12">
                                    <button type="button"
                                        class="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100 wow fadeInRight"
                                        data-wow-delay="0.8s">
                                        Book An Appiontment
                                        <img src="assets/img/icon/arrow-right-white.png" alt="icon">
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-5">
                        <div class="contact-thumb w-100">
                            <img src="assets/img/choose/contact-thumb.jpg" alt="img" class="rounded-4 w-100">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Map -->
    <div class="space-bottom">
        <div class="map-area">
            <div class="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52816169.558200695!2d-161.49265223136007!3d36.102185713814805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1726005337075!5m2!1sen!2sbd"
                    style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    <!-- Map -->

    <?php require_once('parts/footer/footer.php'); ?>
    <?php require_once('parts/layout/bottom-layout.php'); ?>