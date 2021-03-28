$(function () {
  $('.slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  })

  $('.partners__items').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  function toggleSidebar() {
    $('.burger').toggleClass('active')
    $('.menu__items').toggleClass('active')
    $('.over').toggleClass('active')
  }

  $('.burger').on('click tap', function () {
    toggleSidebar()
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
