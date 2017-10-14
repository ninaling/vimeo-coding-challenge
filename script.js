var carousel = document.getElementById('slides');
var carouselSlides = carousel.children;
var current = 0;

var nextButton = document.getElementById('next-button');
var prevButton = document.getElementById('prev-button');
prevButton.addEventListener(
  'click',
  function(e) {
    carouselPrevSlide();
  });
nextButton.addEventListener(
  'click',
  function(e) {
    carouselNextSlide();
  });

window.onresize = function(event) {
  carousel.classList.add('notransition');
  updateView();
  carousel.classList.remove('notransition');
};

function carouselPrevSlide() {
  if (current <= 0) {
    current = carouselSlides.length - 1;
  }
  else {
    current--;
  }
  updateView();
}

function carouselNextSlide() {
  if (current >= carouselSlides.length - 1) {
    current = 0;
  }
  else {
    current++;
  }
  updateView();
}

function updateView() {
  carousel.style.marginLeft = - 1 * (current * document.documentElement.clientWidth) + 'px';
}
