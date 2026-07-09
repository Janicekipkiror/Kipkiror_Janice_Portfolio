// Mobile Menu

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});



// Scroll Animation

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const visible=window.innerHeight-120;

if(top<visible){

section.classList.add("active");

section.classList.add("reveal");

}

});

});

// ================================
// EmailJS Contact Form
// ================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service04rpi_4q",
        "template_kuexg7c",
        this
    )
    .then(() => {

        alert("I'll get back to you as soon as possible. Thank you for reaching out!");

        contactForm.reset();

    })
    .catch((error) => {

        alert("Failed to send message.");

        console.error(error);

    });

});