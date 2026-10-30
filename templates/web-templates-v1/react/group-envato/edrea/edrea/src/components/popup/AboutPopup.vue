<template>
  <div class="edrea_tm_modalbox" :class="open ? 'opened' : ''">
    <div class="box_inner">
      <div class="close">
        <a href="#" @click="close"><i class="icon-cancel"></i></a>
      </div>
      <div class="description_wrap">
        <div class="about_popup_details">
          <div class="left">
            <div class="left_inner">
              <div class="author">
                <div class="avatar_image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/about/1.jpg"></div>
                </div>
                <div class="short">
                  <h3 class="name">
                    {{ aboutData.firstName }}
                    <span class="coloring">{{ aboutData.lastName }}</span>
                  </h3>
                  <h3 class="job">
                    <AnimationText />
                  </h3>
                </div>
              </div>
              <div class="list">
                <ul>
                  <li>
                    <div class="list_inner">
                      <i class="icon-user"></i>
                      <span
                        >{{ aboutData.firstName }}
                        {{ aboutData.lastName }}</span
                      >
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <i class="icon-calendar"></i>
                      <span>{{ aboutData.bithday }}</span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <i class="icon-location"></i>
                      <span
                        ><a href="#" class="href_location">{{
                          aboutData.address
                        }}</a></span
                      >
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <i class="icon-phone"></i>
                      <span
                        ><a href="#">{{ aboutData.phn }}</a></span
                      >
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <i class="icon-mail-1"></i>
                      <span
                        ><a :href="`mailto:${aboutData.email}`">{{
                          aboutData.email
                        }}</a></span
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <div class="edrea_tm_button full">
                <a href="img/about/1.jpg" download>Download CV</a>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="right_inner">
              <div class="biography">
                <div class="about_title">
                  <h3>
                    <span>About <span class="coloring">Me</span></span>
                  </h3>
                </div>
                <div class="text">
                  <p>
                    Hello everybody! My name is
                    <span>David Parker.</span> I am a graphic designer, and I'm
                    very passionate and dedicated to my work. With 20 years
                    experience as a professional a graphic designer, I have
                    acquired the skills and knowledge.
                  </p>
                </div>
              </div>
              <div class="service">
                <div class="about_title">
                  <h3>
                    <span>Quality <span class="coloring">Services</span></span>
                  </h3>
                </div>
                <div class="list">
                  <ul>
                    <li v-for="(service, i) in aboutData.serviceLists" :key="i">
                      <i class="icon-right-dir"></i>{{ service }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="prog_skill">
                <div class="about_title">
                  <h3>
                    <span
                      >Programming <span class="coloring">Skills</span></span
                    >
                  </h3>
                </div>
                <div class="oki_progress">
                  <div
                    class="progress_inner"
                    v-for="(skill, i) in aboutData.skills.programming"
                    :key="i"
                  >
                    <span
                      ><span class="label">{{ skill.name }}</span
                      ><span class="number">{{ skill.value }}%</span></span
                    >
                    <div class="background">
                      <div class="bar open">
                        <div
                          class="bar_in"
                          :style="{ width: `${skill.value}%` }"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lang_skill">
                <div class="about_title">
                  <h3>
                    <span>Language <span class="coloring">Skills</span></span>
                  </h3>
                </div>
                <div class="circular_progress_bar">
                  <ul>
                    <li>
                      <div class="list_inner">
                        <div class="myCircle" data-value=".95"></div>

                        <div class="title"><span>English</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="list_inner">
                        <div class="myCircle" data-value="0.8"></div>

                        <div class="title"><span>Russian</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="list_inner">
                        <div class="myCircle" data-value="0.9"></div>

                        <div class="title"><span>Arabic</span></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="timeline">
                <div class="about_title">
                  <h3>
                    <span
                      >Education <span class="coloring">Timeline</span></span
                    >
                  </h3>
                </div>
                <div class="list">
                  <ul>
                    <li v-for="(edu, i) in aboutData.education" :key="i">
                      <div class="list_inner">
                        <div class="time">
                          <span>{{ edu.year }}</span>
                        </div>
                        <div class="place">
                          <h3>{{ edu.unv }}</h3>
                          <span>{{ edu.degree }}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="timeline">
                <div class="about_title">
                  <h3>
                    <span>Working <span class="coloring">Timeline</span></span>
                  </h3>
                </div>
                <div class="list">
                  <ul>
                    <li v-for="(work, i) in aboutData.working" :key="i">
                      <div class="list_inner">
                        <div class="time">
                          <span>{{ work.year }}</span>
                        </div>
                        <div class="place">
                          <h3>{{ work.company }}</h3>
                          <span>{{ work.deg }}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="partners">
                <div class="about_title">
                  <h3>
                    <span>My <span class="coloring">Partners</span></span>
                  </h3>
                </div>
                <div class="list">
                  <ul>
                    <li v-for="(partner, i) in aboutData.partnersLogos">
                      <div class="list_inner">
                        <img :src="partner" alt="" />
                        <a class="cavani_tm_full_link" href="#"></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="testimonial">
                <div class="about_title">
                  <h3>
                    <span>Clients <span class="coloring">Feedback</span></span>
                  </h3>
                </div>
                <div class="list">
                  <swiper
                    :loop="true"
                    :slidesPerView="1"
                    :spaceBetween="10"
                    :loopAdditionalSlides="1"
                    :autoplay="{
                      delay: 6000,
                    }"
                    :modules="modules"
                    class="owl-carousel"
                  >
                    <swiper-slide>
                      <div class="list_inner">
                        <div class="text">
                          <i class="icon-quote-left"></i>
                          <p>
                            Beautiful minimalist design and great, fast response
                            with support. Highly recommend. Thanks Marketify!
                          </p>
                        </div>
                        <div class="details">
                          <div class="image">
                            <div
                              class="main"
                              data-img-url="img/testimonials/1.jpg"
                            ></div>
                          </div>
                          <div class="info">
                            <h3>Alexander Walker</h3>
                            <span>Graphic Designer</span>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="list_inner">
                        <div class="text">
                          <i class="icon-quote-left"></i>
                          <p>
                            These people really know what they are doing! Great
                            customer support availability and supperb kindness.
                          </p>
                        </div>
                        <div class="details">
                          <div class="image">
                            <div
                              class="main"
                              data-img-url="img/testimonials/2.jpg"
                            ></div>
                          </div>
                          <div class="info">
                            <h3>Armin Van Buuren</h3>
                            <span>Content Manager</span>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="list_inner">
                        <div class="text">
                          <i class="icon-quote-left"></i>
                          <p>
                            I had a little problem and the support was just
                            awesome to quickly solve the situation. And keep
                            going on.
                          </p>
                        </div>
                        <div class="details">
                          <div class="image">
                            <div
                              class="main"
                              data-img-url="img/testimonials/3.jpg"
                            ></div>
                          </div>
                          <div class="info">
                            <h3>Baraka Clinton</h3>
                            <span>English Teacher</span>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import AnimationText from "../AnimationText.vue";
export default {
  name: `AboutPopup`,
  components: {
    Swiper,
    SwiperSlide,
    AnimationText,
  },
  data() {
    return {
      open: false,
      // data
      aboutData: {
        firstName: "David",
        lastName: "Parker",
        bithday: "01.07.1990",
        address: "Avon str. 22, NYC, USA",
        phn: "+77 022 155 02 02",
        email: "example@gmail.com",
        serviceLists: [
          "Website Development",
          "Digital Experience",
          "Content Marketing",
          "Social Media Design",
          "Shared Web Hosting",
        ],
        skills: {
          programming: [
            { name: "WordPress", value: "95" },
            { name: "JavaScript", value: "80" },
            { name: "Angular", value: "90" },
          ],
          language: [
            { name: "English", value: "95" },
            { name: "Russian", value: "80" },
            { name: "Arabic", value: "90" },
          ],
        },
        education: [
          {
            year: "2014 - 2016",
            unv: "Oxford Univercity",
            degree: "Master Degree",
          },
          {
            year: "2010 - 2014",
            unv: "Texas Univercity",
            degree: "Bachelor Degree",
          },
          {
            year: "2008 - 2010",
            unv: "Simone College",
            degree: "Associate Degree",
          },
        ],
        working: [
          {
            year: "2018 - running",
            company: "Envato Elements",
            deg: "Exclusive Author",
          },
          {
            year: "2015 - 2018",
            company: "Avo Corporation",
            deg: "Content Manager",
          },
          {
            year: "2012 - 2015",
            company: "FC Barcelona",
            deg: "Football Player",
          },
        ],
        partnersLogos: [
          "img/partners/1.png",
          "img/partners/2.png",
          "img/partners/3.png",
          "img/partners/4.png",
        ],
      },
    };
  },
  methods: {
    close() {
      this.open = false;
    },
  },
  mounted() {
    const aboutPopup = document.getElementById("aboutPopup");
    aboutPopup.addEventListener("click", () => {
      this.open = true;
    });

    const myCircle = document.querySelectorAll(".myCircle");
    myCircle.forEach((circle) => {
      let progress = circle.getAttribute("data-value");
      let span = document.createElement("span");
      span.className = "number";
      const value = `${progress * 100}%`;
      span.innerHTML = value;
      circle.appendChild(span);
      circle.style.setProperty("--progress", value);
      circle.setAttribute("aria-valuenow", value);
    });
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style scoped>
.testimonial {
  overflow: hidden;
}
.owl-carousel.swiper {
  overflow: unset;
}

.myCircle {
  --hue: 220;
  --holesize: 67%;
  --track-bg: hsl(233, 34%, 92%);

  min-width: 110px;
  min-height: 110px;
  display: grid;
  align-items: center;
  justify-items: center;
  place-items: center;
  position: relative;
  margin-bottom: 5px;
}
.myCircle::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  z-index: -1;
  background: conic-gradient(
    var(--main-color) var(--progress, 0%),
    rgba(255, 255, 255, 0.15) var(--progress, 0%) 100%
  );

  mask-image: radial-gradient(
    transparent var(--holesize),
    black calc(var(--holesize) + 1px)
  );
}
</style>
