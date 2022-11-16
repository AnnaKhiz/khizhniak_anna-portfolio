var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiperTwo = new Swiper(".mySwiper-2", {
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1441: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        // when window width is >= 640px
        1601: {
            slidesPerView: 5,
            spaceBetween: 25
        }
    }
});