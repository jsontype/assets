<template>
  <div class="edrea_tm_section" id="portfolio">
    <div class="section_inner">
      <div class="edrea_tm_portfolio swiper-section">
        <div class="edrea_tm_main_title">
          <h3>Creative <span class="coloring">Portfolio</span></h3>
        </div>
        <div class="portfolio_list gallery_zoom">
          <swiper
            :loop="false"
            :slidesPerView="1"
            :spaceBetween="0"
            :loopAdditionalSlides="1"
            :autoplay="{
              delay: 6000,
            }"
            :navigation="{
              nextEl: '.my_next',
              prevEl: '.my_prev',
            }"
            :pagination="pagination"
            :breakpoints="{
              700: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }"
            @slideChange="onSlideChange"
            :modules="modules"
            class="swiper-container"
          >
            <swiper-slide class="swiper-slide">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/1.jpg"></div>
                </div>
                <div class="details">
                  <h3>Sweet Fruit</h3>
                  <span>Vimeo</span>
                </div>
                <a
                  class="edrea_tm_full_link popup-vimeo"
                  href="//player.vimeo.com/video/321091335?autoplay=1"
                ></a>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/2.jpg"></div>
                </div>
                <div class="details">
                  <h3>Good Present</h3>
                  <span>Youtube</span>
                </div>
                <a
                  class="edrea_tm_full_link popup-youtube"
                  href="//www.youtube.com/embed/toClS5fCudA?autoplay=1"
                ></a>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/3.jpg"></div>
                </div>
                <div class="details">
                  <h3>Mockup Cream</h3>
                  <span>Soundcloud</span>
                </div>
                <a
                  class="edrea_tm_full_link soundcloude_link mfp-iframe audio"
                  href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></a>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/4.jpg"></div>
                </div>
                <div class="details">
                  <h3>Delicious Apple</h3>
                  <span>Detail</span>
                </div>
                <a class="edrea_tm_full_link portfolio_popup" href="#"></a>

                <!-- Portfolio Popup Informations -->
                <div class="edrea_tm_hidden_content">
                  <div class="portfolio_popup_details">
                    <div class="top_image">
                      <img src="img/thumbs/4-2.jpg" alt="" />
                      <div
                        class="main"
                        data-img-url="img/portfolio/4.jpg"
                        style="background-image: url('img/portfolio/4.jpg')"
                      ></div>
                    </div>
                    <div class="details">
                      <h3>Delicious Apple</h3>
                      <span>Detail</span>
                    </div>
                    <div class="text">
                      <p>
                        An apple is an edible fruit produced by an apple tree.
                        Apple trees are cultivated worldwide and are the most
                        widely grown species in the genus Malus. The tree
                        originated in Central Asia, where its wild ancestor,
                        Malus sieversii, is still found today.
                      </p>
                      <p>
                        Apples grown from seed tend to be very different from
                        those of the parents, and the resultant fruit frequently
                        lack desired characteristics. Generally then, apple
                        cultivars are propagated by clonal grafting onto
                        rootstocks. Apple trees grown without rootstocks tend to
                        be larger and much slower to fruit after planting.
                      </p>
                    </div>
                    <div class="additional_images">
                      <ul class="gallery_zoom">
                        <li>
                          <div class="list_inner">
                            <div class="image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                class="main"
                                data-img-url="img/portfolio/7.jpg"
                              ></div>
                              <a
                                class="edrea_tm_full_link zoom"
                                href="img/portfolio/7.jpg"
                              ></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="list_inner">
                            <div class="image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                class="main"
                                data-img-url="img/portfolio/8.jpg"
                              ></div>
                              <a
                                class="edrea_tm_full_link zoom"
                                href="img/portfolio/8.jpg"
                              ></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="list_inner">
                            <div class="image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                class="main"
                                data-img-url="img/portfolio/9.jpg"
                              ></div>
                              <a
                                class="edrea_tm_full_link zoom"
                                href="img/portfolio/9.jpg"
                              ></a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- /Portfolio Popup Informations -->
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/5.jpg"></div>
                </div>
                <div class="details">
                  <h3>Blue Lemon</h3>
                  <span>Image</span>
                </div>
                <a
                  class="edrea_tm_full_link zoom"
                  href="img/portfolio/5.jpg"
                ></a>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/6.jpg"></div>
                </div>
                <div class="details">
                  <h3>Sweet Cheery</h3>
                  <span>Image</span>
                </div>
                <a
                  class="edrea_tm_full_link zoom"
                  href="img/portfolio/6.jpg"
                ></a>
              </div>
            </swiper-slide>
            <div class="edrea_tm_swiper_progress fill">
              <div class="my_pagination_in">
                <span class="current">0</span>
                <span class="pagination_progress"
                  ><span class="all"
                    ><span
                      style="
                        transform: translate3d(0px, 0px, 0px) scaleX(0.75)
                          scaleY(1);
                      "
                    ></span></span
                ></span>
                <span class="total">04</span>
              </div>
              <div class="my_navigation">
                <ul>
                  <li>
                    <a class="my_prev" href="#"
                      ><i class="icon-left-open-1"></i
                    ></a>
                  </li>
                  <li>
                    <a class="my_next" href="#"
                      ><i class="icon-right-open-1"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules

// Import Swiper Vue.js components
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { swiperSliderCustomSlider } from "../utilits";

export default {
  name: `PortfolioComponent`,
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSlideChange(swiper) {
      this.activeSlider = swiper.activeIndex + 1;
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
      pagination: {
        el: ".edrea_tm_swiper_progress",
        type: "custom", // progressbar
        renderCustom: function (swiper, current, total) {
          swiperSliderCustomSlider(current, total);
        },
      },
    };
  },
};
</script>
