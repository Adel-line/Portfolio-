// Define Components
const contentM = [{
    name: "Adventure Fox: Grape Hunt - Game",
    description: "was the first game I ever created. The concept is inspired by the old tale of the fox who complained about the grapes being too sour because she couldn't get them. At least, she got motivated and started an adventure to push the limits!",
    text: "",
    images: "",
    links:  ""
},
{
    name: "The Source: Company Rebranding",
    description: "",
    text: "",
    images: "",
    links:  ""
},
{
    name: "DN - Volunteer Call",
    description: "",
    text: "",
    images: "",
    description: "",
    links:  ""
},
{
    name: "Formula 1 Configurator - Build your dream team",
    description: "",
    text: "",
    images: "",
    links: ""
}
]

const modal = document.querySelector("#modal1");
// const openBTN = document.querySelectorAll("openM");
const closeBTN = document.querySelector("#close");

// Add Events
// document.querySelector(".openM").addEventListener('click', open)
document.querySelectorAll(".openM").forEach(yes => yes.addEventListener('click', openModal));
closeBTN.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Modal in action

function openModal(event) {
    console.log("hell");
    modal.style.display = 'block';
    const target = event.currentTarget;
    const feature = target.id;
    if (feature === "m1" ) {
populate(contentM [0]);
    }
    else if (feature === "m2") {
        populate(contentM [1])  
    } else if (feature === "m3") {
        populate(contentM [2])  
    } else {
        populate(contentM [3])  
    }
}

function closeModal() {
    console.log("hell");
    modal.style.display = 'none';
}

function outsideClick(e) {
if(e.target == modal) {
    modal.style.display = 'none';
}
}

function populate(data) {
    document.querySelector(".content1 h1").innerHTML = data.name; 
    document.querySelector(".content1 p").innerHTML = data.description; 
}