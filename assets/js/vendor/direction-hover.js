const getHoverDirection = function (event) {
  var directions = ["top", "right", "bottom", "left"];
  var item = event.currentTarget;
  var w = item.offsetWidth;
  var h = item.offsetHeight;
  var x =
    (event.clientX - item.getBoundingClientRect().left - w / 2) *
    (w > h ? h / w : 1);
  var y =
    (event.clientY - item.getBoundingClientRect().top - h / 2) *
    (h > w ? w / h : 1);
  var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  return directions[d];
};
document.addEventListener("DOMContentLoaded", function (event) {
  var items = document.getElementsByClassName("faq__Slider--slideWrapper");
  for (var i = 0; i < items.length; i++) {
    ["mouseenter", "mouseleave"].forEach(function (eventname) {
      items[i].addEventListener(
        eventname,
        function (event) {
          var dir = getHoverDirection(event);
          event.currentTarget.classList.remove("mouseenter");
          event.currentTarget.classList.remove("mouseleave");
          event.currentTarget.classList.remove("top");
          event.currentTarget.classList.remove("right");
          event.currentTarget.classList.remove("bottom");
          event.currentTarget.classList.remove("left");
          event.currentTarget.className += " " + event.type + " " + dir;
        },
        false
      );
    });
  }
});
