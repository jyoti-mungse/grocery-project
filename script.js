let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
};
let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

var Swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPreView: 1
    },
    769: {
      slidesPreView: 2
    },
    1020: {
      slidesPreView: 3
    }
  }
});
var Swiper1 = new Swiper(".review-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPreView: 1
    },
    769: {
      slidesPreView: 2
    },
    1020: {
      slidesPreView: 3
    }
  }
});
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
