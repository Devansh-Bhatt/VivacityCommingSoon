const light = document.getElementsByClassName('light');
const dark = document.getElementsByClassName('dark');
const planet = document.getElementById('trippy');
// const planet = document.getElementById('planet');
function changePlanet() {
    planet.src = "assets/img/moon.png"
}
function darkMode() {

    var planet = gsap.timeline();
    planet.to(".trippypl", {
        opacity: 0,
        x: 100,
        duration: 1,
        onComplete: changePlanet,
    })
        .to(".trippypl", {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 2
        });
    var card = gsap.timeline();
    card.to(".middle", 2, { rotationY: 90, transformOrigin: "50% 50%", ease: Linear.easeNone, opacity: 0, duration: 0.5, })
        .to(".card", 2, { rotationY: -90, transformOrigin: "50% 50%", ease: Linear.easeNone, opacity: 0, duration: 0.1 }, "<")
        .to(".card", 2, { visibility: 'visible', rotationY: 0, transformOrigin: "50% 50%", ease: Linear.easeNone, opacity: 1, duration: 0.5 })


    var character = gsap.timeline();
    character.to(".face", {
        opacity: 0,
        rotation: 360,
        y: 100,
        duration: 1,
    })
        .to(".ninja", {
            opacity: 1,
            visibility: "visible",
        })
        .from("#character", {
            opacity: 0,
            y:1000
        })
        .from("#glow", {
            opacity: 0,
            y:1000
        },"<")
        // var landscape=gsap.timeline();
        // landscape.to(".landscape", {
        //         opacity: 0, 
        //         y:100,
        //         duration: 1,
        //     },">")
        //     .to(".darkbg", {
        //         visibility:'visible',
                
        //     })  
        //     .to(".darkbg", {
        //       opacity:1,
        //     //   y:-10
        //     })  
              
        //     .to(".mainbg",{
        //         opacity:0,
        //        // y:100,
        //         duration: 1,
        //     },">")
        //     .to(".darkbg2",{
            
        //         opacity:1,
        //     })

    var landscape = gsap.timeline();
    landscape
        .to(".landscape", {
            opacity: 0,
            y: 100,
            duration: 1,
        }, ">")
        .to(".mainbg", {
            opacity: 0,
            duration: 1,
        }, ">")
        .to(".darkbg", {
            visibility: 'visible',
        }, "<")
        .to(".darkbg", {
            opacity: 1,
            duration: 1,
            ease: Power4.easeInOut
        }, "<")


    var star = gsap.timeline();

    star.to(".star", {
        visibility: 'visible'

    }, ">+2")
        .to(".star2", {
            visibility: 'visible'

        }, ">")
        .to("#star-img", {
            opacity: 1,
            rotation: 360,
            repeat: 2000,
            duration: 0.2,

        }, ">")
        .to("#star-img", {
            opacity: 1,
            repeat: 200,
            duration: 4,
            x: -1000,
            y: -1000
        }, "<")
        .to("#star-line", {
            opacity: 1,
            repeat: 200,
            duration: 4,
            x: -1000,
            y: -1000
        }, "<")
        .to("#star-img2", {
            opacity: 1,
            rotation: 360,
            repeat: 2000,
            duration: 0.2,

        }, "<+1")
        .to("#star-img2", {
            opacity: 1,
            repeat: 200,
            duration: 4,
            x: 1000,
            y: -1000
        }, "<")
        .to("#star-line2", {
            opacity: 1,
            repeat: 200,
            duration: 4,
            x: 1000,
            y: -1000
        }, "<")

    // dark[0].style.visibility = "visible";
    // light[0].style.visibility = "hidden";


}