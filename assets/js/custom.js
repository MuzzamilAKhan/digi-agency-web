var sw = $(window).width();
var sh = $(window).height();
function fontResizer() {
  var perc = parseInt(sw) / 118.9375;
  $("body").css("font-size", perc);
}
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader-first").fadeOut();
    $("html").removeClass("loadjs");
  }, 400);
  if (sw > 1025) {
    fontResizer();
  }
  if (sw > 767) {
    let bt = $(".case-studies__tabs-wrapper .button:first-child");
    if (bt) {
      bt.addClass("active");
    }
  }
  setTimeout(function () {
    if (window.location.href.indexOf("blog") === -1) {
      var e, s;
      (e = document.createElement("script")),
        (s = document.getElementsByTagName("script")[0]),
        (e.async = !0),
        (e.src = "https://embed.tawk.to/62ea1f9937898912e960f844/1g9h8msp3"),
        (e.charset = "UTF-8"),
        e.setAttribute("crossorigin", "*"),
        s.parentNode.insertBefore(e, s);
    }
  }, 10000);
  setTimeout(function () {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-MGSRDSF");
  }, 8000);
  if ($(document).find("img").hasClass("svg-convert")) {
    $(".svg-convert").svgConvert({
      onComplete: function () {},
    });
  }
  if ($(document).find("div").hasClass("video-wrapper")) {
    setTimeout(function () {
      if (sw > 767) {
        let srcVideo =
          "https://player.vimeo.com/video/771916988?h=d7bec5dce4&background=1";
        document.getElementById("video").innerHTML =
          '<iframe src="' +
          srcVideo +
          '" allow="autoplay" allowfullscreen frameborder="0"></iframe>';
      } else {
        let srcVideo1 = "/assets/video/hero-bg.mp4";
        $("#video").html(
          '<video loop playsinline autoplay muted><source src="' +
            srcVideo1 +
            '" type="video/mp4"></video>'
        );
      }
    }, 3000);
  }
});
function mobSliderheight() {
  var slideWidth = $(".servicesBrandsSlider .swiper-slide").outerWidth();
  $(".servicesBrandsSlider .mob-frame").css("width", slideWidth);
}
$(document).ready(function () {
  $("#toggle").click(function () {
    $(this).toggleClass("active");
    $(".mobNav").toggleClass("open");
    $("html").toggleClass("overflow-hidden");
  });
  if (sw > 767) {
    if ($(document).find("div").hasClass("services-thumb-slider")) {
      var services_thumb_slider = new Swiper(".services-thumb-slider", {
        slidesPerView: 5,
        speed: 400,
        direction: "vertical",
        centeredSlides: true,
        mousewheel: true,
        initialSlide: "2",
      });
      $(".services-thumb-slider .swiper-slide").click(function () {
        services_thumb_slider.slideTo($(this).index());
      });
    }
  }
  if (sw > 767) {
    if ($(document).find("div").hasClass("services-slider")) {
      var services_slider = new Swiper(".services-slider", {
        slidesPerView: 1,
        initialSlide: "2",
        speed: 400,
        centeredSlides: true,
        effect: "fade",
        fadeEffect: {
          crossFade: false,
        },
      });
      services_slider.controller.control = services_thumb_slider;
      services_thumb_slider.controller.control = services_slider;
    }
  }
  if ($(document).find("div").hasClass("ourWork__Slider")) {
    var ourWork_Slider = new Swiper(".ourWork__Slider", {
      slidesPerView: 1.1,
      spaceBetween: 10,
      speed: 2000,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 25,
        },
      },
    });
  }
  if ($(document).find("div").hasClass("collabCompanies__Slider")) {
    var collabCompanies_Slider = new Swiper(".collabCompanies__Slider", {
      slidesPerView: 2,
      speed: 2000,
      grid: {
        rows: 1,
      },
      scrollbar: {
        el: ".collabCompanies__Slider .swiper-scrollbar",
        draggable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        },
        768: {
          slidesPerView: 4,
          grid: {
            rows: 2,
          },
        },
        1024: {
          slidesPerView: 7,
          grid: {
            rows: 2,
          },
        },
      },
    });
  }
  if ($(document).find("div").hasClass("faq__Slider")) {
    var faq_Slider = new Swiper(".faq__Slider", {
      slidesPerView: 1.1,
      spaceBetween: 10,
      speed: 2000,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1025: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });
  }
  if ($(document).find("div").hasClass("worth-read__Slider")) {
    var worth_read_slider = new Swiper(".worth-read__Slider", {
      slidesPerView: 1.25,
      spaceBetween: 30,
      centeredSlides: false,
      speed: 2000,
      loop: true,
      loopedSlides: 10,
      scrollbar: {
        el: ".worth-read__Slider .swiper-scrollbar",
        draggable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 80,
          centeredSlides: true,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 80,
          centeredSlides: false,
        },
        1025: {
          slidesPerView: 4.5,
        },
      },
    });
  }
  if ($(document).find("div").hasClass("our-services__services-slider")) {
    var ourServices = new Swiper(".our-services__services-slider", {
      freeMode: true,
      slidesPerView: "auto",
      speed: 12000,
      autoplay: {
        delay: 1,
        enable: true,
      },
      loop: true,
      grabCursor: false,
      shortSwipes: false,
      longSwipes: false,
      allowTouchMove: false,
      watchSlidesProgress: true,
    });
  }
  if (sw < 576) {
    if ($(document).find("div").hasClass("serviceHelp__slider")) {
      var serviceHelp__slider = new Swiper(".serviceHelp__slider", {
        slidesPerView: 1,
        spaceBetween: 5,
        loop: false,
        speed: 2000,
      });
    }
  }
  if ($(document).find("div").hasClass("serviceDevelopment__thumb")) {
    var serviceDevelopment__thumb = new Swiper(".serviceDevelopment__thumb", {
      slidesPerView: 1,
      loop: false,
      speed: 1200,
      spaceBetween: 30,
      breakpoints: {
        576: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
  if ($(document).find("div").hasClass("serviceDevelopment__gallery")) {
    var serviceDevelopment__gallery = new Swiper(
      ".serviceDevelopment__gallery",
      {
        slidesPerView: 1,
        loop: false,
        speed: 1200,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        thumbs: {
          swiper: serviceDevelopment__thumb,
        },
        navigation: {
          nextEl: ".serviceDevelopment__galleryWrapper .swiper-button-next",
          prevEl: ".serviceDevelopment__galleryWrapper .swiper-button-prev",
        },
      }
    );
  }
  if ($(document).find("div").hasClass("happyEmplyees__slider")) {
    var happyEmplyees__slider = new Swiper(".happyEmplyees__slider", {
      slidesPerView: 1,
      loop: false,
      speed: 800,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".happyEmplyees__rightsec .swiper-button-next",
        prevEl: ".happyEmplyees__rightsec .swiper-button-prev",
      },
    });
  }
  if ($(document).find("div").hasClass("servicesBrandsSlider")) {
    var servicesBrandsSlider = new Swiper(".servicesBrandsSlider", {
      slidesPerView: 1.85,
      spaceBetween: 0,
      loop: true,
      speed: 1000,
      centeredSlides: true,
      slideToClickedSlide: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      breakpoints: {
        576: {
          spaceBetween: 0,
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      },
    });
  }
  if ($(document).find("div").hasClass("uiPortfolio__slider")) {
    var uiPortfolio__slider = new Swiper(".uiPortfolio__slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      speed: 500,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".uiPortfolio .swiper-button-next",
        prevEl: ".uiPortfolio .swiper-button-prev",
      },
    });
  }
  if ($(document).find("div").hasClass("research-design__slider")) {
    var researchDesign__slider = new Swiper(".research-design__slider", {
      slidesPerView: 2,
      spaceBetween: 0,
      loop: false,
      speed: 500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      breakpoints: {
        576: {
          spaceBetween: 0,
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      },
    });
  }
  setTimeout(function () {
    mobSliderheight();
  }, 1500);
  $(".experties__tabs-wrapper--small-cards").on("click", function () {
    var target = $(this).attr("data-rel");
    $(".experties__tabs-wrapper--small-cards").removeClass("active");
    $(this).addClass("active");
    $("#" + target)
      .fadeIn("slow")
      .siblings(".experties__tabs-wrapper--detail-tab")
      .hide();
    return false;
  });
  $(".experties__tabs-wrapper--small-cards:first").addClass("active");
});
$(".toggle-btn > p").on("click", function () {
  if (sw < 992) {
    var tag = $(this).parent().find("ul");
    if ($(this).hasClass("opened")) {
      $(this).removeClass("opened");
      $(".toggle-btn > .qlinks-menu").slideUp();
    } else {
      $(".toggle-btn > p").removeClass("opened");
      $(".toggle-btn > .qlinks-menu").slideUp();
      $(this).addClass("opened");
      tag.slideDown();
    }
  }
});
$(".menu-toggleBtn").on("click", function () {
  var tag2 = $(this).siblings(".inner-menu");
  var taglink = $(this).siblings(".menu-link");
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".menu-link").removeClass("active");
    $(".inner-menu").slideUp();
  } else {
    $(".menu-toggleBtn").removeClass("active");
    $(".menu-link").removeClass("active");
    $(".inner-menu").slideUp();
    $(this).addClass("active");
    tag2.slideDown();
    taglink.addClass("active");
  }
});
$(".inner-menu-toggleBtn").on("click", function () {
  var tag3 = $(this).siblings(".sub-inner-menu");
  var taglink2 = $(this).siblings(".inner-menu__item--link");
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".inner-menu__item--link").removeClass("active");
    $(".sub-inner-menu").slideUp();
  } else {
    $(".inner-menu-toggleBtn").removeClass("active");
    $(".inner-menu__item--link").removeClass("active");
    $(".sub-inner-menu").slideUp();
    $(this).addClass("active");
    tag3.slideDown();
    taglink2.addClass("active");
  }
});
$(window).on("resize orientation", function () {
  sw = $(window).width();
  sh = $(window).height();
  if (sh < 450 && sw > 480 && sw < 820) {
    $("#portrait-warnning").css("display", "flex");
  } else {
    $("#portrait-warnning").css("display", "none");
  }
  setTimeout(function () {
    if (sw > 1025) {
      if (sw < 1400 && sw > 1300 && sh > 900) {
      } else {
        fontResizer();
      }
    }
    var slideWidth = $(".servicesBrandsSlider .swiper-slide").outerWidth();
    $(".servicesBrandsSlider .mob-frame").css("width", slideWidth);
  }, 1000);
});
$(window).scroll(function () {
  var header1 = $(".header");
  var sticky1 = 0;
  if (window.pageYOffset > sticky1) {
    header1.addClass("sticky");
  } else {
    header1.removeClass("sticky");
  }
});
if (sw > 991) {
  $(".menu__menuitem").hover(function () {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children(".dropdown-js").stop().slideToggle();
      $(this).closest(".menu__menuitem").addClass("dropdown-open");
    } else {
      $(this).children(".dropdown-js").stop().slideToggle();
      $(this).closest(".menu__menuitem").removeClass("dropdown-open");
    }
  });
}
if (sw < 992) {
  $(".menu__menuitem--menulink").click(function () {
    var tag2 = $(this).siblings(".dropdown-js");
    if ($(this).parent(".menu__menuitem").hasClass("dropdown-open")) {
      $(this).parent(".menu__menuitem").removeClass("dropdown-open");
      $(this).siblings(".dropdown-js").slideUp(600);
    } else {
      $(".menu > .menu__menuitem ").removeClass("dropdown-open");
      $(".menu__menuitem > .dropdown-js").slideUp(600);
      $(this).parent().addClass("dropdown-open");
      tag2.slideDown();
    }
  });
}
$(".menu-slider-thumb li:first-child").addClass("active");
$(".menu-slider-gallery-slide").hide();
$(".menu-slider-gallery-slide:first-child").show();
$(".menu-slider-thumb li").mouseenter(function () {
  var $mainmenu = $(this).attr("data-menu");
  $(this).addClass("active").siblings().removeClass("active");
  if ($mainmenu == "all") {
  } else {
    $(".menu-slider-gallery-slide").css("display", "none");
    $(".menu-slider-gallery-slide[data-menu=" + $mainmenu + "]")
      .css("display", "block")
      .fadeIn(10);
  }
});
$(".serviceBrands__menu li:first-child a").addClass("active");
$(".serviceBrands__tabBoxWrapper .serviceBrands__tabBox").hide();
$(".serviceBrands__tabBoxWrapper .serviceBrands__tabBox:first-child").show();
$(".newserviceBrands li:first-child a").addClass("active");
$(".newserviceBrands__tabBoxWrapper .newserviceBrands__tabBox").hide();
$(
  ".newserviceBrands__tabBoxWrapper .newserviceBrands__tabBox:first-child"
).show();
$(".serviceBrands__menu li a").on("click", function () {
  var target = $(this).attr("data-rel");
  $(".serviceBrands__menu li a").removeClass("active");
  $(this).addClass("active");
  $("#" + target)
    .fadeIn(1000)
    .siblings(".serviceBrands__tabBox")
    .hide();
});
$(".newserviceBrands__menu li a").on("click", function () {
  var target = $(this).attr("data-rel");
  $(".newserviceBrands__menu li a").removeClass("active");
  $(this).addClass("active");
  $("#" + target)
    .fadeIn(1000)
    .siblings(".newserviceBrands__tabBox")
    .hide();
});
$(".moreless-button").click(function () {
  $(".moretext").toggleClass("active");
  if ($(this).children("span").text() == "Read more") {
    $(this).children("span").text("Read less");
  } else {
    $(this).children("span").text("Read more");
  }
});
$(document).ready(function () {
  function toggle_video_modal() {
    $(".js-trigger-video-modal").on("click", function (e) {
      e.preventDefault();
      var id = $(this).attr("data-youtube-id");
      var autoplay = "?autoplay=1";
      var related_no = "&rel=0";
      var src = "//www.youtube.com/embed/" + id + autoplay + related_no;
      $("#youtube").attr("src", src);
      $("body").addClass("show-video-modal noscroll");
    });
    function close_video_modal() {
      event.preventDefault();
      $("body").removeClass("show-video-modal noscroll");
      $("#youtube").attr("src", "");
    }
    $("body").on(
      "click",
      ".close-video-modal, .video-modal .overlay",
      function (event) {
        close_video_modal();
      }
    );
    $("body").keyup(function (e) {
      if (e.keyCode == 27) {
        close_video_modal();
      }
    });
  }
  toggle_video_modal();
  var checkClass = function () {
    if ($(".item").hasClass("hide")) {
      $(".item").removeClass("hide");
    }
  };
  $(".case-studies__tabs-wrapper").on("click", ".button", function (e) {
    let flag = $(this).attr("data-menu");
    filterjson(flag);
    e.stopPropagation();
    e.preventDefault();
    if (sw > 767) {
      $(this).addClass("active").siblings().removeClass("active");
    } else {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $(".case-studies__tabs-wrapper li").first().addClass("mob-first-active");
      if ($(this).hasClass("active")) {
        $(this).siblings(".button").slideToggle();
      }
    }
  });
  $(".apply-btn").click(function () {
    $(".career-detail-form").fadeIn(200);
    $("html").css("overflow", "hidden");
  });
  $(".cross-times").click(function () {
    $(".career-detail-form").fadeOut(200);
    $("html").css("overflow-y", "scroll");
  });
  var path = window.location.pathname;
  var target2 = $('.mobNav__menu--item  a[href="' + path + '"]');
  target2
    .addClass("active-menu")
    .parents(".mobNav__menu--item")
    .addClass("active-menu");
  var target3 = $('.menu__menuitem  a[href="' + path + '"]');
  target3.addClass("active").parents(".menu__menuitem").addClass("active");
  $(".counting").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
  const block = document.querySelectorAll(".block");
  window.addEventListener("load", function () {
    block.forEach((item) => {
      let numElement = item.querySelector(".num");
      let num = parseInt(numElement.innerText);
      let count = 0;
      let time = 2000 / num;
      let circle = item.querySelectorAll(".circle");
      setInterval(() => {
        if (count == num) {
          clearInterval();
        } else {
          count += 1;
          numElement.innerText = count;
        }
      }, time);
      circle.forEach(function (e) {
        console.log("======", e);
        e.style.strokeDashoffset = 503 - 503 * (num / 100);
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");
  customSelects.forEach((selectContainer) => {
    const selectElement = selectContainer.querySelector("select");
    const selectSelected = document.createElement("div");
    selectSelected.classList.add("select-selected");
    selectSelected.innerHTML =
      selectElement.options[selectElement.selectedIndex].innerHTML;
    selectContainer.appendChild(selectSelected);
    const selectItems = document.createElement("div");
    selectItems.classList.add("select-items", "select-hide");
    for (let i = 1; i < selectElement.length; i++) {
      const optionDiv = document.createElement("div");
      optionDiv.innerHTML = selectElement.options[i].innerHTML;
      optionDiv.addEventListener("click", function () {
        selectElement.selectedIndex = i;
        selectSelected.innerHTML = this.innerHTML;
        const sameAsSelected =
          selectItems.getElementsByClassName("same-as-selected");
        for (const el of sameAsSelected) {
          el.classList.remove("same-as-selected");
        }
        this.classList.add("same-as-selected");
        selectSelected.click();
      });
      selectItems.appendChild(optionDiv);
    }
    selectContainer.appendChild(selectItems);
    selectSelected.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelects(this);
      selectItems.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  });
  function closeAllSelects(exceptElement) {
    const selectItems = document.querySelectorAll(".select-items");
    const selectSelecteds = document.querySelectorAll(".select-selected");
    selectSelecteds.forEach((selected, index) => {
      if (selected !== exceptElement) {
        selected.classList.remove("select-arrow-active");
      }
    });
    selectItems.forEach((item, index) => {
      if (selectSelecteds[index] !== exceptElement) {
        item.classList.add("select-hide");
      }
    });
  }
  document.addEventListener("click", function () {
    closeAllSelects();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const logoSliderBox = document.querySelector(".js-logoSliderBox");
  if (logoSliderBox) {
    const logoTabsSwiper = new Swiper(".js-logoSliderBox .swiper-container", {
      centeredSlides: false,
      loop: true,
      speed: 2000,
      slidesPerView: 2,
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".js-logoSliderBox .swiper-button-next",
        prevEl: ".js-logoSliderBox .swiper-button-prev",
      },
      autoplay: {
        delay: 1000,
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 7,
        },
        1600: {
          slidesPerView: 8,
        },
      },
    });
  }
});
(function () {
  if (document.querySelector(".js-agencySlider")) {
    const agencytextSlider = new Swiper(".js-agencytextSlider", {
      slidesPerView: 1,
      loop: true,
      speed: 1200,
      effect: "fade",
      observer: true,
      observeParents: true,
      fadeEffect: {
        crossFade: true,
      },
    });
    let agencyimgSliderTotalSlide = document.querySelectorAll(
      ".agencyimgSlider .swiper-slide"
    ).length;
    const agencyimgSwiper = new Swiper(".js-agencyimgSlider .swiper", {
      centeredSlides: false,
      loop: true,
      speed: 1000,
      slidesPerView: "auto",
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      thumbs: {
        swiper: agencytextSlider,
      },
      navigation: {
        nextEl: ".js-agencyimgSlider .swiper-button-next",
        prevEl: ".js-agencyimgSlider .swiper-button-prev",
      },
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        576: {
          centeredSlides: false,
        },
      },
      on: {
        init: function () {
          var currentSlide = document.querySelector(
            ".homeHero__bgNavigation .current-slide"
          );
          var allSlides = document.querySelector(
            ".homeHero__bgNavigation .total-slides"
          );
          var current = this.realIndex + 1;
          if (current > agencyimgSliderTotalSlide) current = 1;
          var idx = current < 10 ? "0" + current : current;
          var tdx =
            agencyimgSliderTotalSlide < 10
              ? "0" + agencyimgSliderTotalSlide
              : agencyimgSliderTotalSlide;
          currentSlide.innerHTML = idx;
          allSlides.innerHTML = tdx;
        },
        resize: function () {
          this.update();
        },
      },
    });
    agencyimgSwiper.on("slideChange", function () {
      var currentSlide = document.querySelector(
        ".homeHero__bgNavigation .current-slide"
      );
      var allSlides = document.querySelector(
        ".homeHero__bgNavigation .total-slides"
      );
      var current = this.realIndex + 1;
      if (current > agencyimgSliderTotalSlide) current = 1;
      var idx = current < 10 ? "0" + current : current;
      var tdx =
        agencyimgSliderTotalSlide < 10
          ? "0" + agencyimgSliderTotalSlide
          : agencyimgSliderTotalSlide;
      currentSlide.innerHTML = idx;
      allSlides.innerHTML = tdx;
    });
  }
})();
document.addEventListener("DOMContentLoaded", function () {
  const brandsSlider = document.querySelector(".js-BrandsSlider");
  if (brandsSlider) {
    const brandsSwiper = new Swiper(".js-BrandsSlider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      centeredSlides: false,
      autoplay: {
        delay: 1000,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: "auto",
          centeredSlides: false,
        },
      },
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const testimonialsSlider = document.querySelector(".js-testimonialsSlider");
  if (testimonialsSlider) {
    const testimonialsSwiper = new Swiper(
      ".js-testimonialsSlider .swiper-container",
      {
        loop: true,
        speed: 1000,
        slidesPerView: "auto",
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".js-testimonialsSlider .swiper-button-next",
          prevEl: ".js-testimonialsSlider .swiper-button-prev",
        },
        autoplay: {
          delay: 1000,
        },
        breakpoints: {
          576: {},
          992: {
            centeredSlides: true,
          },
        },
      }
    );
  }
});
if ($(document).find("div").hasClass("servicenDevelopment__thumb")) {
  var servicenDevelopment__thumb = new Swiper(".servicenDevelopment__thumb", {
    slidesPerView: 1,
    loop: false,
    speed: 1200,
    spaceBetween: 30,
    breakpoints: {
      576: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}
if ($(document).find("div").hasClass("servicenDevelopment__gallery")) {
  var servicenDevelopment__gallery = new Swiper(
    ".servicenDevelopment__gallery",
    {
      slidesPerView: 1,
      loop: false,
      speed: 1200,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: servicenDevelopment__thumb,
      },
      navigation: {
        nextEl: ".servicenDevelopment__galleryWrapper .swiper-button-next",
        prevEl: ".servicenDevelopment__galleryWrapper .swiper-button-prev",
      },
    }
  );
}
document.addEventListener("DOMContentLoaded", function () {
  const techSliderBox = document.querySelector(".js-techSliderBox");
  if (techSliderBox) {
    const techTabsSwiper = new Swiper(".js-techSliderBox .swiper-container", {
      speed: 1000,
      slidesPerView: 2,
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".js-techSliderBox .swiper-button-next",
        prevEl: ".js-techSliderBox .swiper-button-prev",
      },
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        576: {},
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: "auto",
        },
      },
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const serviceListingWrapperTab = document.querySelector(
    ".service-listing-wrapper-tab"
  );
  if (serviceListingWrapperTab) {
    const menuItems =
      serviceListingWrapperTab.querySelectorAll(".menu .menu__item");
    const screenWidth = window.innerWidth;
    if (screenWidth > 1099) {
      if (serviceListingWrapperTab) {
        const menuItems =
          serviceListingWrapperTab.querySelectorAll(".menu .menu__item");
        if (!serviceListingWrapperTab.querySelector(".menu__item.active")) {
          menuItems[0].classList.add("active");
        }
        menuItems.forEach((menuItem) => {
          menuItem.addEventListener("mouseover", handleMouseOver);
          menuItem.addEventListener("mouseout", handleMouseOut);
        });
        function handleMouseOver() {
          menuItems.forEach((item) => {
            item.classList.remove("active");
          });
          this.classList.add("active");
        }
        function handleMouseOut() {
          menuItems.forEach((item) => {
            item.classList.remove("active");
          });
          menuItems[0].classList.add("active");
        }
      }
    } else {
      const firstMenuItem = menuItems[0];
      const menuLinks =
        serviceListingWrapperTab.querySelectorAll(".menu__item--link");
      if (!serviceListingWrapperTab.querySelector(".menu__item.active")) {
        firstMenuItem.classList.add("active");
      }
      menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", function (event) {
          event.preventDefault();
          menuItems.forEach((item) => {
            item.classList.remove("active");
          });
          const menuItem = menuLink.parentElement.parentElement;
          menuItem.classList.add("active");
        });
      });
    }
  }
});
