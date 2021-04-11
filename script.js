document.addEventListener("DOMContentLoaded", loadSVG);


function loadSVG() {
    console.log("loadSVG");

    fetch("avatar-01.svg")
    .then( response => response.text() )
    .then( svgData => {
        console.log("SVG loaded");

        // TODO: put the SVG into the DOM
        document.querySelector("section").innerHTML = svgData;
        // TODO: Start the animation
    });

    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#p1", {duration: 0.5, x: "35vw", scrollTrigger:{trigger:"#p1"},  toggleActions:"play pause resume reset"});

   
    gsap.to("#p2", {duration: 1.5, x: "48vw", scrollTrigger:{trigger:"#p2"},  toggleActions:"play pause resume reset"});

    gsap.to("#grapehunt", {duration: 1.5, x: "-40vw", y: "0", scrollTrigger:{trigger:"#grapehunt"},  toggleActions:"play pause resume reset"});
    gsap.to("#app", {duration: 2.5, x: "-22vw", y: "0", scrollTrigger:{trigger:"#app"},  toggleActions:"play pause resume reset"});
    gsap.to("#dnmedium", {duration: 2.5, x: "-44vw", y: "0", scrollTrigger:{trigger:"#dnmedium"},  toggleActions:"play pause resume reset"});
    gsap.to("#source", {duration: 1.5, x: "-28vw", y: "0", scrollTrigger:{trigger:"#source"},  toggleActions:"play pause resume reset"});

    
    }

  

