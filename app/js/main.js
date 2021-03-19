$(function () {
  $('.slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
  })

  mixitup('.products__items', {
    selectors: {
      target: '.products__item',
    },
  })

  mixitup('.design__items', {
    selectors: {
      target: '.design__item',
    },
  })
})
