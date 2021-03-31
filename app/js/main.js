$(function () {
  $('.view__btn').on('click', function () {
    $('.view__btn').removeClass('view__btn--active')
    $(this).addClass('view__btn--active')
  })

  $('.view__btn--list').on('click', function () {
    $('.catalog__item').addClass('catalog__item--list')
    $('.product').addClass('product--list')
  })

  $('.view__btn--grid').on('click', function () {
    $('.catalog__item').removeClass('catalog__item--list')
    $('.product').removeClass('product--list')
  })

  $('.price__input').ionRangeSlider({
    type: 'double',
    step: 0.01,
    prefix: '$',
    onStart: function (data) {
      $('.price__from').text('$' + data.from.toFixed(2))
      $('.price__to').text('$' + data.to.toFixed(2))
    },
    onChange: function (data) {
      $('.price__from').text('$' + data.from.toFixed(2))
      $('.price__to').text('$' + data.to.toFixed(2))
    },
  })

  $('.recent__rate').rateYo({
    starWidth: '12px',
    ratedFill: '#ffcc00',
    normalFill: '#d6d6d6',
    spacing: '6px',
    readOnly: true,
  })

  $('.product__rate').rateYo({
    starWidth: '18px',
    ratedFill: '#ffcc00',
    normalFill: '#d6d6d6',
    spacing: '13px',
    readOnly: true,
  })

  function toggleSidebar() {
    $('.burger').toggleClass('active')
    $('.menu__items').toggleClass('active')
    $('.over').toggleClass('active')
  }

  $('.burger').on('click tap', toggleSidebar)

  $('.slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  })

  // $('.partners__items').slick('setPosition')
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

  const products = document.querySelector('.products__items')
  if (products) {
    mixitup(products, {
      selectors: {
        target: '.products__item',
      },
    })
  }

  const design = document.querySelector('.design__items')
  if (design) {
    mixitup(design, {
      selectors: {
        target: '.design__item',
      },
    })
  }
})
