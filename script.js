document.addEventListener("DOMContentLoaded", loadSVG);

// const text = document.querySelector(".written").textContent;
// const text1 = document.querySelector(".write2").textContent;
// let n = 1

//  init()

// function init() {
//     console.log("init");
//     // get the text from somewhere
//     document.querySelector(".written").textContent;
//     document.querySelector(".write2").textContent;

//     // clear the HTML area
//     document.querySelector(".written").textContent = "";
//     document.querySelector(".write2").textContent = "";

//     // start loop
//     loop();
// }


// function end() {
//     console.log("end!")
// }



// function loop() {
//     console.log("loop");
   
//     document.querySelector(".written").textContent = text.substring(0,n);
//     document.querySelector(".write2").textContent = text1.substring(0,n);
//     // increment N
//     n++;
//     // wait before calling loop() again
//     if (n <= text.length) {
//         console.log("wait before calling loop() again");
//         setTimeout(loop, 200); 
//     }

//     if (n <= text1.length) {
//         console.log("wait before calling loop() again");
//         setTimeout(loop, 200); 
//     }
// secondtext()
// }






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


    