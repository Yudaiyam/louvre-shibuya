// slider
//Slider top_info
$(document).ready(function () {
  "use strict";
  // $('#slider01').slick({
  //     dots: false,
  //     arrows: false,
  //     fade: true,
  // 	infinite: true,
  //     speed: 2000,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     pauseOnHover: false,
  //     pauseOnFocus: false,
  // 	focusOnSelect:true,
  // });
  var transition = "2s linear"; //transition value

  //Default setting
  $("#slider01 .slick-slide img").css("transition", transition); //select to image on slide

  $("#slider01 .slick-slide:first-child img").addClass("zoom");
  $("#slider01").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(
        "#slider01 .slick-slide:nth-child(" + (nextSlide + 1) + ") img"
      ).addClass("zoom");
    }
  );
  $("#slider01").on("afterChange", function (event, slick, currentSlide) {
    var number = currentSlide;
    if (number === 0) {
      number = $("#slider01 .slick-slide").length;
    }
    $("#slider01 .slick-slide:nth-child(" + number + ") img").removeClass(
      "zoom"
    );
  });
});

$(document).ready(function (e) {
  $(".news1").mCustomScrollbar();
});
/*===========box link==========*/
$(document).ready(function (e) {
  $(
    ".box07_sub02,.box07_sub01 li:nth-child(1), .box07_sub01 li:nth-child(2) .box07_gray, .box08_sub, .box09_list li, .box12_list li, .box14_list li"
  ).click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
  });
});
$(".banner-slide").slick({
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  arrows: false,
});
