let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.getElementsByClassName("review-card");
    const dots = document.getElementsByClassName("dot");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

const dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        showSlides(slideIndex = i);
    });
}

setInterval(() => {
    showSlides(slideIndex += 1);
}, 5000); // Change slide every 5 seconds