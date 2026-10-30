<template>
  <div class="edrea_tm_section" id="news">
    <div class="section_inner">
      <div class="edrea_tm_news swiper-section">
        <div class="edrea_tm_main_title">
          <h3>Latest <span class="coloring">News</span></h3>
        </div>
        <div class="news_list">
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
            <swiper-slide
              class="swiper-slide"
              v-for="(data, i) in newsData"
              :key="i"
            >
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/4-3.jpg" alt="" />
                  <div class="main" :data-img-url="data.img"></div>
                  <a class="edrea_tm_full_link news_popup" href="#"></a>
                </div>
                <div class="details">
                  <h3>
                    <a href="#">{{ data.title }}</a>
                  </h3>
                  <span
                    ><a href="#">{{ data.tag }}</a></span
                  >
                </div>

                <!-- News Popup Informations -->
                <div class="edrea_tm_hidden_content">
                  <div class="news_popup_details">
                    <div class="top_image">
                      <img src="img/thumbs/4-2.jpg" alt="" />
                      <div class="main" :data-img-url="data.img"></div>
                    </div>
                    <div class="news_main_title">
                      <h3>{{ data.title }}</h3>
                      <span
                        ><a href="#">{{ data.tag }}</a></span
                      >
                      <div></div>
                    </div>
                    <div class="text">
                      <p v-for="(text, t) in data.des" :key="t">
                        {{ text }}
                      </p>
                    </div>
                  </div>
                </div>
                <!-- /News Popup Informations -->
              </div>
            </swiper-slide>
            <div class="edrea_tm_swiper_progress fill">
              <div class="my_pagination_in">
                <span class="currentNews">0</span>
                <span class="pagination_progress"
                  ><span class="all allNews"><span></span></span
                ></span>
                <span class="totalNews">04</span>
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
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { swiperSliderCustomSlider } from "../utilits";

export default {
  name: `NewsComponent`,
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
          swiperSliderCustomSlider(
            current,
            total,
            "currentNews",
            "totalNews",
            "allNews"
          );
        },
      },
    };
  },
  data() {
    return {
      newsData: [
        {
          title: "Building brands through customer service",
          img: "img/news/1.jpg",
          tag: "Branding",
          des: [
            "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
            "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
          ],
        },
        {
          title: "Unstoppable Jamstack and Gatsby opportunity",
          img: "img/news/2.jpg",
          tag: "Design",
          des: [
            "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
            "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
          ],
        },
        {
          title: "Electron framework adds encryption API",
          img: "img/news/3.jpg",
          tag: "Media",
          des: [
            "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
            "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
          ],
        },
        {
          title: "Sentry for JavaScript monitors release health",
          img: "img/news/4.jpg",
          tag: "Technology",
          des: [
            "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
            "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
          ],
        },
        {
          title: "Five reasons to begin a Packt subscription",
          img: "img/news/5.jpg",
          tag: "Lifestyle",
          des: [
            "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
            "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
          ],
        },
        {
          title: "Why developers are so divided over WordPress",
          img: "img/news/6.jpg",
          tag: "Modern",
          des: [
            "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
            "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
          ],
        },
      ],
    };
  },
};
</script>
