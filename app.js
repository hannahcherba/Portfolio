// ==================
// Swiper JS
// ==================
let swiper = new Swiper(".slide-content", {
    slidesPerView:3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});


/*-----------------------------
The JS Search
------------------------------*/

//Create an input variable

const input = document.getElementById('search');

//listen for search event

input.addEventListener('keyup', e => {
    let currentValue= e.target.value.toLowerCase();
    let captions= document.querySelectorAll("h2");
    captions.forEach(caption => {
        if (caption.textContent.toLowerCase().includes(currentValue)) {
            caption.parentNode.parentNode.style.display = 'block';
        }else {
            caption.parentNode.parentNode.style.display = 'none';
        }
    });

});
