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

    
    
    
    }

  

