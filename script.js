/*============== FACILITIES SWIPER ==============*/
let swiperFacilities = new Swiper('.facilities-container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*============== REVIEW SWIPER ==============*/
let swiperReview = new Swiper('.review-container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    }
  }
});

/*============== ABOUT SWIPER ==============*/
let swiperAbout = new Swiper('.about-container', {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// hamburger to open and close
hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// nav links to close menu
navLinks.forEach(function(navLink){
  navLink.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');  
  });
});

