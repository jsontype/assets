const aali_tm_preloader = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;
  let preloader = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

export const wowJsAnimation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

export const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
    hamburger = document.querySelector(".hamburger"),
    kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
    pointer = document.querySelector(".cursor-pointer"),
    e = document.querySelector(".cursor-inner"),
    t = document.querySelector(".cursor-outer");

  function mouseEvent(element) {
    element.addEventListener("mouseenter", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    });
    element.addEventListener("mouseleave", function () {
      e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
    });
  }
  if (myCursor.length) {
    if (document.body) {
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        // console.log(document.querySelector(this));
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        document.body.addEventListener(
          "mouseenter",
          // "a,.kura_tm_topbar .trigger, .cursor-pointer",
          function () {
            let a = document.querySelectorAll("a");
            e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

            for (let i = 0; i < a.length; i++) {
              const element = a[i];
              mouseEvent(element);
            }

            hamburger && mouseEvent(hamburger);
            kura_tm_topbar && mouseEvent(kura_tm_topbar);
            pointer && mouseEvent(pointer);
          }
        ),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
};

export const preloader = () => {
  aali_tm_preloader();
  setTimeout(() => {
    document.querySelector("body").classList.add("opened");
  }, 1500);
};

// Header
export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".aali_tm_header");
  stickys.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};

export const activeSkillProgress = () => {
  const progress_inner = document.querySelectorAll(".skillsInner___"),
    triggerBottom = (window.innerHeight / 5) * 5;
  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top,
      boxElement = box.getElementsByClassName("bar"),
      boxItem = boxElement[0],
      pWidth = box.getAttribute("data-value");
    if (boxTop < triggerBottom) {
      boxItem.classList.add("open");
      boxItem.getElementsByClassName("bar_in")[0].style.width = `${pWidth}%`;
    } else {
      boxItem.classList.remove("open");
    }
  });
};
export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
};
// Data image
export const dataImage = () => {
  let d = document.querySelectorAll("[data-img-url");
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute(
      "data-img-url"
    )})`;
  }
};
// Moveing effect
export const aali_tm_moving_animation = () => {
  var detail = document.querySelectorAll(".moving_effect");
  var offset = 0;
  detail.forEach((element) => {
    var direction = element.getAttribute("data-direction");
    window.addEventListener("scroll", function () {
      offset = window.scrollY;
      var h = window.innerHeight;
      var i = element.getBoundingClientRect().top + window.scrollY - offset - h;
      if (element.getAttribute("data-reverse") == "yes") {
        i *= -1;
      }
      var x = direction === "x" ? (i * 70) / h : 0;
      var y = direction === "x" ? 0 : (i * 70) / h;
      if (element.getAttribute("data-reverse") == "yes") {
        i *= -1;
      }
      if (i * -1 < h + 300 && i < 300) {
        element.style.transform = `translate3d(${x}px,${y}px, 0px)`;
      }
    });
  });
};
// parallax
export const parallax = () => {
  let parallax = document.querySelector(".parallax");
  let Parallax = require("parallax-js");
  new Parallax(parallax, {
    relativeInput: true,
    selector: ".layer",
  });
};

// jarallax
export const jarallaxContent = () => {
  let { jarallax, jarallaxVideo } = require("jarallax");
  jarallaxVideo();
  jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.5,
    keepImg: true,
    automaticResize: true,
    videoVolume: 0,
  });
};

export const scroll_ = () => {
  const sections = document.querySelectorAll(".aali_tm_section");
  const navLi = document.querySelectorAll(".anchor_nav li");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("current");
    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("current");
    }
  });
};
