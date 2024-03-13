if ($(window).width() > 767) {
  if ($(document).find("section").hasClass("home-hero")) {
    const tl = gsap.timeline();
    tl.from(".head-text-wrapper span", 1, {
      y: 120,
      ease: "Expo.easeOut",
      delay: 1,
      skewY: 5,
      stagger: {
        amount: 0.2,
      },
    });
  }
  if ($(document).find("div").hasClass("translateY-parent")) {
    gsap.to(".translateY-top", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".translateY-parent",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
    gsap.to(".translateY-bottom", {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".translateY-parent",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }
  if ($(document).find("div").hasClass("translateX-right")) {
    const translateXBox = gsap.utils.toArray(".translateX-right");
    translateXBox.forEach((box) => {
      gsap.to(box, {
        x: 250,
        ease: "none",
        scrollTrigger: {
          trigger: box,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
  }
  if ($(document).find("div").hasClass("clippath-item")) {
    gsap.to(".clippath-item", {
      "clip-path": "inset(0 0 0 0)",
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".clippath-item",
        start: "top bottom",
        end: "bottom 100px",
        duration: 1,
      },
    });
  }
  if ($(document).find("div").hasClass("height-transition-parent")) {
    var groupedheight = gsap.utils.toArray(".height-transition-parent");
    groupedheight.forEach(function (group) {
      var Heights = group.querySelectorAll(".height-transition");
      Heights.forEach(function (height) {
        var delayValue = height.getAttribute("data-delay");
        gsap.from(height, {
          transform: "translate(0%, 150px) scale(1, 1.4)",
          ease: Power1.easeOut,
          duration: 0.65,
          delay: delayValue,
          scrollTrigger: {
            trigger: height,
            stagger: {
              each: 1,
            },
            start: "top 80%",
          },
        });
      });
    });
  }
  if ($(document).find("div").hasClass("opacity-transition-parent")) {
    var groupedFade = gsap.utils.toArray(".opacity-transition-parent");
    groupedFade.forEach(function (group) {
      var elements = group.querySelectorAll(".opacity-transition");
      elements.forEach(function (element) {
        var delayValue = element.getAttribute("data-delay");
        gsap.from(element, {
          opacity: "0",
          ease: "none",
          duration: 0.5,
          delay: delayValue,
          stagger: {
            each: 1,
          },
          scrollTrigger: {
            trigger: element,
            stagger: {
              each: 1,
            },
            start: "top 85%",
          },
        });
      });
    });
  }
  if ($(document).find("div").hasClass("skew-transition-parent")) {
    var skewFade = gsap.utils.toArray(".skew-transition-parent");
    skewFade.forEach(function (skew) {
      var elements = skew.querySelectorAll(".skew-transition");
      elements.forEach(function (element) {
        var delayValue = element.getAttribute("data-delay");
        gsap.from(element, {
          autoAlpha: 0,
          visibility: "hidden",
          y: 50,
          ease: Expo.easeInOut,
          duration: 0.75,
          delay: delayValue,
          scrollTrigger: {
            trigger: element,
            stagger: {
              each: 0.3,
            },
            start: "top 90%",
          },
        });
      });
    });
  }
}
