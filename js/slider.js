"use strict";

(function () {
    var width = 100;
    var position = 0;
    var count = 1;
    var sliderToggle1 = document.querySelector('#slider__toggle-1');
    var sliderToggle2 = document.querySelector('#slider__toggle-2');
    var sliderToggle3 = document.querySelector('#slider__toggle-3');
    var sliderToggle4 = document.querySelector('#slider__toggle-4');
    var list = document.querySelector('.slider__list');


    sliderToggle1.onclick = function() {
      sliderToggle2.classList.remove('slider__toggle--active');
      sliderToggle3.classList.remove('slider__toggle--active');
      sliderToggle4.classList.remove('slider__toggle--active');
      sliderToggle1.classList.add('slider__toggle--active');
      list.style.left = '0';
    };

    sliderToggle2.onclick = function() {
      sliderToggle1.classList.remove('slider__toggle--active');
      sliderToggle3.classList.remove('slider__toggle--active');
      sliderToggle4.classList.remove('slider__toggle--active');
      sliderToggle2.classList.add('slider__toggle--active');
      list.style.left = '-50%';
    };

    sliderToggle3.onclick = function() {
      sliderToggle1.classList.remove('slider__toggle--active');
      sliderToggle2.classList.remove('slider__toggle--active');
      sliderToggle4.classList.remove('slider__toggle--active');
      sliderToggle3.classList.add('slider__toggle--active');
      list.style.left = '-100%';
    };

    sliderToggle4.onclick = function() {
      sliderToggle1.classList.remove('slider__toggle--active');
      sliderToggle2.classList.remove('slider__toggle--active');
      sliderToggle3.classList.remove('slider__toggle--active');
      sliderToggle4.classList.add('slider__toggle--active');
      list.style.left = '-150%';
    };
})();
