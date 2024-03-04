function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco();
function upr_jane_wala_anime() {
    var asd = document.querySelectorAll(".uprjana")
    asd.forEach(function (elem) {
        let parent = document.createElement("span")
        let child = document.createElement("span")

        parent.classList.add("parent")
        child.classList.add("child")

        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML = "";
        elem.appendChild(parent);
    })
}
upr_jane_wala_anime();

function navanime() {
    gsap.to("#nav2 #yhi", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#nav2 #yhi",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            stagger: 0.2,
            scrub: 0.5
            // markers:true
        }
    })
    gsap.to("#nav2 #twogoodlogo", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#nav2 #twogoodlogo",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            stagger: 0.2,
            scrub: 0.5
            // markers:true
        }
    })
    gsap.to("#nav #bhejna", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: 0.5
        }
    })
}

function loadanime() {
    gsap.from(".parent .child", {
        y: "100%",
        duration: 1,
        opacity: 0,
        ease: Expo.ease,
        stagger: 0.2
    })
    gsap.from("#nav2 #yhi", {
        y: -100,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.2
    })
    gsap.from("#nav", {
        y: -100,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.2
    })
    gsap.from("#imagee img", {
        scale: -0.5,
        opacity: 0,
        duration: 0.7,
        delay: 0.6
    })

}

function backwala() {
    document.querySelectorAll(".baksa").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to("#back", {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to("#back", {
                left: dets.x,
                top: dets.y,
                transform: 'translate(-50%, -50%)'
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to("#back", {
                opacity: 0,
                scale: 0
            })
        })

    })
}

function scrollanime() {
    gsap.from("#page2 .box", {
        duration: 0.7,
        opacity: 0,
        scale: 0.9,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page2 .box",
            scroller: "#main",
            // markers:true,
            start: "top 60%"
        }
    })
    gsap.from("#page4 .baksa", {
        duration: 0.7,
        opacity: 0,
        scale: 0.9,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page4 .baksa",
            scroller: "#main",
            // markers:true,
            start: "top 80%"
        }
    })
    gsap.from("#page5 .baksa", {
        duration: 0.7,
        opacity: 0,
        scale: 0.9,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page5 .baksa",
            scroller: "#main",
            // markers:true,
            start: "top 60%"
        }
    })
    gsap.from("#page6 div img", {
        duration: 0.7,
        opacity: 0,
        scale: 0.9,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page6 div img",
            scroller: "#main",
            start: "top 60%",
        }
    })


}

function nicheScroll() {
    gsap.from("#page7 #upr", {
        duration: 0.7,
        opacity: 0,
        x: -100,
        scrollTrigger: {
            trigger: "#page7 #upr",
            scroller: "#main",
            start: "top 60%",
        }
    })
    gsap.from("#page7 #niche #niche1", {
        duration: 0.9,
        opacity: 0,
        x: -100,
        scrollTrigger: {
            trigger: "#page7 #niche #niche1",
            scroller: "#main",
            start: "top 60%",
        }
    })
    gsap.from("#page7 #niche #niche2", {
        duration: 0.9,
        opacity: 0,
        y: -200,
        scrollTrigger: {
            trigger: "#page7 #niche #niche2",
            scroller: "#main",
            start: "top 60%",
        }
    })
    gsap.from("#page7 #niche #niche3", {
        duration: 0.9,
        opacity: 0,
        x: 100,
        scrollTrigger: {
            trigger: "#page7 #niche #niche3",
            scroller: "#main",
            start: "top 60%",
        }
    })
}

navanime();
loadanime();
backwala();
scrollanime();

function menu() {
    var blacc = document.getElementById("menu");
    var blacc2 = document.getElementById("black");
    var blacc3 = document.getElementById("nav");
    var logo1 = document.getElementById("yhi");
    var logo2 = document.getElementById("twogoodlogo");
    var series = document.getElementById("black-in");

    let i = 1;
    blacc.addEventListener("click", () => {
        if (i == 1) {
            blacc2.style.height = "100%";
            blacc3.style.zIndex = "-1";
            logo1.style.color = "white";
            logo2.style.color = "white";
            series.style.opacity = "1";
            series.style.scale = "1";
            i = 0;
        } else {
            blacc2.style.height = "0%";
            logo1.style.color = "black";
            logo2.style.color = "black";
            series.style.opacity = "0";
            series.style.scale = "0";
            i = 1;
        }
    })
}
menu();

function checkAndExecuteFunction() {
    if (window.innerWidth <= 740) {
        return;
    } else {
        nicheScroll();
    }
}
checkAndExecuteFunction();
window.addEventListener('resize', checkAndExecuteFunction);

