
let slideIndex = 1;
showSlides(slideIndex);

//USE OF NEXT/PREV BUTTONS
/**
 * 
 * @param {number} n 
 */
function plusSlide(n) {
    showSlides(slideIndex += n );
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

//FOR LOOP TO SLIDE PIC
/**
 * 
 * @param {number} n 
 */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slidePic");
        
    if (n > slides.length) {
        slideIndex = 1;}

    if (n < 1 ) {
        slideIndex = slides.length;}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}
