

// Contact Form
const contactForm = document.querySelector(".contact__form");
const formButton = document.querySelector(".contact__form__cta");
const contactSectionForm = document.querySelector(".contact--section--form");

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        contactForm.innerHTML = xhr.responseText;
    }
};

xhr.open("GET", "thankyou.html");


formButton.addEventListener("click", (e) => {
    e.preventDefault();
    xhr.send();

    contactSectionForm.style.backgroundColor = "#9a7a63";
    contactSectionForm.style.backgroundImage = "none";
});