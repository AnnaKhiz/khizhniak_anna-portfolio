var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    autoHeight: false,
    //autoplay: true,
    lazy: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
