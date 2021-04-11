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
    })

    fetch("organic-01.svg")
    .then( response => response.text() )
    .then( svgData => {
        console.log("SVG loaded");

        // TODO: put the SVG into the DOM
        document.querySelector("#organic").innerHTML = svgData;
        // TODO: Start the animation
    })
    }