particlesJS("hero", {
    particles: {
        number: {
            value: 15, //number of particles(count)
            density: {
                enable: true,
                value_area: 300, //area where particles will be distributed
            },
        },
        color: {
            value: "#ffffff", //particles colour
        },
        shape: {
            type: "triangle",
        },
        opacity:{
            value: 0.8,
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacit_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5, //base size of particles
            random: true,
            anim: {
                enable: true,
                speed: 1,
                size_min: 0.3,
                sync: false,
            },
        },
        //connecting lines
        line_linked: {
            enable: true,
            distance: 150, //maximum distance between linked particles
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        //particle movement
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", //behaviour when particles move out of the canvas
            bounce: false,
        },
    },
    //Interactivity settings
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true, //enable hover interactivity
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true, //resize particles on windows resize
        },
    },
    //detect retina displays
    retina_detect: true,
});