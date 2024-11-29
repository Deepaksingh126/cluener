
function contactFormAnimation() {
    const contactForm = document.getElementById('contact-form');
    const button = document.querySelectorAll('.product button');
    const closeButton = document.querySelector('.contact-form i');

    button.forEach(button => {
        button.addEventListener('click', () => {
            contactForm.style.display = 'block';
            contactForm.style.display = 'flex';
        });
    });



    closeButton.addEventListener('click', () => {
        contactForm.style.display = 'none';
    });
}



function navanimation() {

    var menu = document.querySelector("nav i");
    var cross = document.querySelector(".full i");

    var tl = gsap.timeline();

    tl.to(".full", {
        right: 0,
        duration: 0.4,
    })
    tl.from(".full h4", {
        x: 150,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
    })
    tl.from(".full i", {
        opacity: 0,
        duration: 0.2
    })
    tl.pause()

    menu.addEventListener("click", function () {
        tl.play()
    })

    cross.addEventListener("click", function () {
        tl.reverse()
        full.style.display = "none";
    })

}



contactFormAnimation();
navanimation();
// page2animation();
// page3animation();
// page4animation();
