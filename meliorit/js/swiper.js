var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        1280: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var swiperSecond = new Swiper(".mySwiper-2", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        1280: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
            pagination: {
                el: '.swiper-pagination-second',
                type: 'bullets',
            },
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination-second',
                type: 'bullets',
            },
        }
    },
    navigation: {
        nextEl: '.swiper-button-next-second',
        prevEl: '.swiper-button-prev-second',
    },
});