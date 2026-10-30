import { gsap } from "gsap";

export const HoverImages = () => {

    // hovers
    let navLinks = gsap.utils.toArray(".mil-hover-item"),
        imgWrap = document.querySelector(".mil-img-wrapper"),
        imgItem = document.querySelector(".mil-img-wrapper img");

    function moveImg(e) {
        let mouseX = e.clientX,
            mouseY = e.clientY,
            tl = gsap.timeline();
        /*
        tl.to(imgWrap, {
            duration: 0.3,
            x: mouseX,
            y: mouseY,
            ease: 'sine',
        })
        */
    }

    function linkHover(e) {
        if (e.type === "mouseenter") {
            let imgSrc = e.target.dataset.src;
            let tl = gsap.timeline();

            tl.set(imgItem, {
                attr: {
                    src: imgSrc
                }
            }).to(imgWrap, {
                autoAlpha: 1,
                scale: 1
            });
        } else if (e.type === "mouseleave") {
            let tl = gsap.timeline();

            tl.to(imgWrap, {
                autoAlpha: 0,
                scale: 0.3
            });
        }
    }

    function initAnim() {
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', linkHover);
            link.addEventListener('mouseleave', linkHover);
            link.addEventListener('mousemove', moveImg);
        });
    }

    function init() {
        initAnim();
    }

    init();
}