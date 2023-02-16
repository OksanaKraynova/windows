import Swiper from 'swiper/bundle';

// import Swiper styles
import 'swiper/swiper-bundle.css';
const glazingSlider = new Swiper('.glazing__slider', {
    navigation: {
        nextEl: '.glazing__button-next',
        prevEl: '.glazing__button-prev',
    },
    observer: true,
    observeParents: true,
    // watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        429: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        629: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        789: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 120
        },
    }
});
// init Swiper:
const sliderDecorartion = new Swiper('.slider-decoration', {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        599: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        789: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1078: {
            slidesPerView: 4,
            spaceBetween: 10
        },
    },
    navigation: {
        nextEl: '.decoration__button-prev',
        prevEl: '.decoration__button-next',
      },
});


glazingSlider.init()
sliderDecorartion.init()