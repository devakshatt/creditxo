;(function ($) {
  'use strict'
  $('#headerComp').load('/components/header.html')
  $('#footerComp').load('/components/footer.html')
  $('#cibilForm').load('/components/cibilform.html')
  $('#moreServices').load('/components/moreServices.html')
  $('#pricingComp').load('/components/pricing.html')
  $('#ourservicesComp').load('/components/ourservices.html')

  waitForElement('.mean-menu', function () {
    console.log('loaded')
    // Mean Menu JS
    jQuery('.mean-menu').meanmenu({
      meanScreenWidth: '991',
      // meanMenuTarget
    })
  })

  // Navbar Area
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 150) {
      $('.navbar-area').addClass('sticky-nav')
    } else {
      $('.navbar-area').removeClass('sticky-nav')
    }
  })

  // FAQ Accordion JS
  $('.accordion')
    .find('.accordion-title')
    .on('click', function () {
      // Adds Active Class
      $(this).toggleClass('active')
      // Expand or Collapse This Panel
      $(this).next().slideToggle('fast')
      // Hide The Other Panels
      $('.accordion-content').not($(this).next()).slideUp('fast')
      // Removes Active Class From Other Titles
      $('.accordion-title').not($(this)).removeClass('active')
    })

  const brandImages = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.jpg',
    '17.jpg',
    '18.png',
    '19.jpg',
    '20.webp',
  ]
  brandImages.forEach((img) => {
    $('#partnerBrands').append(`<div class="brand-item">
            <a href="#">
                <img src="assets/img/partnerbrands/${img}" alt="Brand Images">
            </a>
        </div>`)
  })

  // Brand Slider
  $('.brand-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true, // time for slides changes
    slideTransition: 'linear',
    autoplaySpeed: 1200,
    smartSpeed: 1200,
    autoplayTimeout: 1200,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      568: {
        items: 3,
      },
      768: {
        items: 5,
      },
      1000: {
        items: 5,
      },
    },
  })

  // Portfolio Slider
  $('.portfolio-slider').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  })

  // Testimonial Slider
  $('.testimonial-item-slider').owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>",
    ],
  })

  // Service Slider
  $('.service-slider').owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  })

  // Tabs
  $('#tabs-item li a').on('click', function (e) {
    $('#tabs-item li, #prices-content .active')
      .removeClass('active')
      .removeClass('fadeInUp')
    $(this).parent().addClass('active')
    var activeTab = $(this).attr('href')
    $(activeTab).addClass('active fadeInUp')
    e.preventDefault()
  })

  // Popup Video
  $('.play-btn').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  })

  // Client Slider
  $('.client-slider').owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  })

  // Search Botton
  $('.close-btn').on('click', function () {
    $('.search-overlay').fadeOut()
    $('.search-btn').show()
    $('.close-btn').removeClass('active')
  })
  $('.search-btn').on('click', function () {
    $(this).hide()
    $('.search-overlay').fadeIn()
    $('.close-btn').addClass('active')
  })

  // Subscribe form
  $('.newsletter-form')
    .validator()
    .on('submit', function (event) {
      if (event.isDefaultPrevented()) {
        // Handle The Invalid Form...
        formErrorSub()
        submitMSGSub(false, 'Please enter your email correctly')
      } else {
        // Everything Looks Good!
        event.preventDefault()
      }
    })
  function callbackFunction(resp) {
    if (resp.result === 'success') {
      formSuccessSub()
    } else {
      formErrorSub()
    }
  }
  function formSuccessSub() {
    $('.newsletter-form')[0].reset()
    submitMSGSub(true, 'Thank you for subscribing!')
    setTimeout(function () {
      $('#validator-newsletter').addClass('hide')
    }, 4000)
  }
  function formErrorSub() {
    $('.newsletter-form').addClass('animated shake')
    setTimeout(function () {
      $('.newsletter-form').removeClass('animated shake')
    }, 1000)
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = 'validation-success'
    } else {
      var msgClasses = 'validation-danger'
    }
    $('#validator-newsletter').removeClass().addClass(msgClasses).text(msg)
  }

  // AJAX MailChimp
  $('.newsletter-form').ajaxChimp({
    url:
      'https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9', // Your url MailChimp
    callback: callbackFunction,
  })

  // Back To Top Js
  $('body').append(
    '<a target="_blank" href="https://wa.me/9310524253?text=Hello%20Creditxo%2C%20I%20have%20a%20question%20about%20your%20service.%20can%20you%20please%20help%20me%3F" ><div id="waBtn" class="wa-btn"><i class="bx bxl-whatsapp"></i></div></a>',
  )
  $('body').append(
    '<div id="toTop" class="top-btn"><i class="bx bx-chevrons-up"></i></div>',
  )
  $(window).on('scroll', function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn()
    } else {
      $('#toTop').fadeOut()
    }
  })
  $('#toTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600)
    return false
  })

  // WOW JS
  new WOW().init()

  // Preloader JS
  // $(window).on('load', function () {
  //     jQuery(".preloader").fadeOut(100);
  // });
  $('.preloader').css('display', 'block')

  setTimeout(function () {
    $('.preloader').css('display', 'none')
  }, 1000) // it will remove after 5 seconds

  //   setTimeout(function () {
  //     $(document).ready(function () {
  //       if (window.localStorage.getItem('popState') != 'shown') {
  //         showNewsletter()
  //       }
  //     })
  //   }, 6000) // it will remove after 5 seconds
})(jQuery)

function waitForElement(elementPath, callBack) {
  window.setTimeout(function () {
    if ($(elementPath).length) {
      callBack(elementPath, $(elementPath))
    } else {
      waitForElement(elementPath, callBack)
    }
  }, 500)
}

function showNewsletter() {
  //   var newsletterModal = new bootstrap.Modal(
  //     document.getElementById('newsletterModal'),
  //   )
  //   newsletterModal.show()
  //   console.log('open newsletter')
  //   window.localStorage.setItem('popState', 'shown')
}
