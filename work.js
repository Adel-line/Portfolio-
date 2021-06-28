// Define Components

const modal = document.querySelector(".modal1");
const modal1 = document.querySelector(".modal2");
const modal2 = document.querySelector(".modal3");
const modal3 = document.querySelector(".modal4");

// Open buttons
const btn1 = document.querySelector(".openM").addEventListener('click', openModal);
const btn2 = document.querySelector(".openM2").addEventListener('click', openModal1);
const btn3 = document.querySelector(".openM3").addEventListener('click', openModal2);
const btn4 = document.querySelector(".openM4").addEventListener('click', openModal3);

// Close  Buttons
var closeBTN = document.querySelector(".close").addEventListener('click', closeModall);
var closeBTN1 = document.querySelector(".close2").addEventListener('click', closeModal2);
var closeBTN2 = document.querySelector(".close3").addEventListener('click', closeModal3);
var closeBTN3 = document.querySelector(".close4").addEventListener('click', closeModal4);

// window.addEventListener('click', outsideClick)


// OPENING FUNCTIONS 

function openModal() {
    console.log("hello");
     modal.style.display = "block";
    console.log("hello");
}

function openModal1() {
    console.log("hello");
     modal1.style.display = "block";
}

function openModal2() {
    console.log("hello");
     modal2.style.display = "block";
}

function openModal3() {
    console.log("hello");
     modal3.style.display = "block";
}

// CLOSING FUNCTIONS 

function closeModall() {
    console.log("hell");
    modal.style.display = 'none';
}

function closeModal2() {
    console.log("hell");
    modal1.style.display = 'none';
}

function closeModal3() {
    console.log("hell");
    modal2.style.display = 'none';
}


function closeModal4() {
    console.log("hell");
    modal3.style.display = 'none';
}


// LOOKING FOR MORE SIMPLE OPTIONS 
// const target = event.currentTarget;
    // const feature = target.id;
    // if (feature === "m1" ) {

    //     modal.style.display = "block";
    // }
    // else if (feature === "m2") {
    //     modal1.style.display = "block"; 
    // } else if (feature === "m3") {
    //     modal2.style.display = "block"; 
    // } else {
    //     modal3.style.display = "block"; 
    // }

