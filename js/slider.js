//Funkcja document.ready() - wersja skrocona

var slider = $('#slider');
var slideshow = $('.slide-show');
var slideCount = $('.single-slide').lenght;
var slideWidth = 100/slideCount;
var slideIndex = 0;

slideshow.css('width', slideCount * 100 + '%');



/*$(function(){
'use strict';
  }); */