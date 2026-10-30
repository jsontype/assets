import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const ScrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);

    // appearance
    const appearance = document.querySelectorAll(".mil-up");

    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 50,
            scale: .98,
            ease: 'sine',
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    // scale image
    const scaleImage = document.querySelectorAll(".mil-scale");

    scaleImage.forEach((section) => {
        var value1 = section.getAttribute('data-value-1');
        var value2 = section.getAttribute('data-value-2');

        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,

        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    // parallax
    const parallaxImage = document.querySelectorAll(".mil-parallax");

    parallaxImage.forEach((section) => {
        var value1 = section.getAttribute('data-value-1');
        var value2 = section.getAttribute('data-value-2');

        gsap.fromTo(section, {
            ease: 'sine',
            y: value1,

        }, {
            y: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    // skill
    const skillProg = document.querySelectorAll(".mil-skill-prog");

    skillProg.forEach((section) => {
        var value1 = section.getAttribute('data-value-1');
        var value2 = section.getAttribute('data-value-2');

        gsap.fromTo(section, {
            width: value1,
            ease: 'sine',
        }, {
            width: value2,
            duration: 2,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    // counters
    const counters = document.querySelectorAll(".mil-counter");

    counters.forEach((element) => {
        var count = element,
            zero = {
                val: 0
            },
            num = element.dataset.number,
            split = (num + "").split("."), // to cover for instances of decimals
            decimals = split.length > 1 ? split[1].length : 0;

        gsap.to(zero, {
            val: num,
            duration: 2,
            scrollTrigger: {
                trigger: element,
                toggleActions: 'play none none reverse',
            },
            onUpdate: function () {
                count.innerHTML = zero.val.toFixed(decimals);
            }
        });
    });

    // progressbar
    gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
            scrub: 0.3
        }
    });

    // top panel
    const milTopPanel = document.querySelector('.mil-top-panel');
    if ( milTopPanel != undefined ) {
        window.addEventListener("scroll", (e) => {
            if( window.scrollY > 10 ) {
                milTopPanel.classList.add('mil-active');
            } else {
                milTopPanel.classList.remove('mil-active');
            }
        });
    }
}