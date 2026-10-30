
if (('#particles-js').length) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 180,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#e1dee5"   //mh--------- dot color
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 1,  //// dot width mh
                    "color": "#e1dee5"  //// dot border color mh
                },
                "polygon": {
                    "nb_sides": 5  
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1.0,      //// mh opacity
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 1.0,
                    "sync": false
                }
            },
            "size": {
                "value": 2,    // width dot
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 10,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,      // dot many mh
                "color": "#e1dee5",  //  line color mh--------
                "opacity": 1.0,      //--------
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
};





