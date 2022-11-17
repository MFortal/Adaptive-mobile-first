import "./main.scss";

import $ from "jquery";
import "slick-slider";

$(function () {
  $(".top-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
