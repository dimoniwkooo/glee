$(function () {
  function toggleSidebar() {
    $('.burger').toggleClass('active')
    $('.menu__items').toggleClass('active')
    $('.over').toggleClass('active')
  }

  $('.burger').on('click tap', toggleSidebar)

  $('.shop__tab').on('click', function (e) {
    e.preventDefault()
    $('.shop__tab').removeClass('shop__tab--active')
    $(this).addClass('shop__tab--active')

    $('.shop__list').removeClass('shop__list--active')
    $($(this).attr('href')).addClass('shop__list--active')
  })

  $('.shop__count').styler()

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

  $('.shop__rate').rateYo({
    starWidth: '18px',
    ratedFill: '#ffcc00',
    normalFill: '#d6d6d6',
    spacing: '13px',
    readOnly: true,
  })

  $('.product__rate').rateYo({
    starWidth: '18px',
    ratedFill: '#ffcc00',
    normalFill: '#d6d6d6',
    spacing: '13px',
    readOnly: true,
  })

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

  $('.slide__small').slick({
    asNavFor: '.slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          vertical: false,
        },
      },
    ],
  })
  $('.slide__big').slick({
    asNavFor: '.slide__small',
    draggable: false,
    arrows: false,
    fade: true,
  })

  $('.related__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: '.related__button',
    prevArrow:
      '<button class="related__btn related__btn--prev slick-prev" type="button"></button>',
    nextArrow:
      '<button class="related__btn related__btn--next slick-next" type="button"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
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
        control: '.filter-1',
      },
    })
  }

  const design = document.querySelector('.design__items')
  if (design) {
    mixitup(design, {
      selectors: {
        control: '.filter-2',
      },
    })
  }
})
