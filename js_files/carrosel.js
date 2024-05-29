const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

function nextSlider() {
  //remove a classe on de todos os sliders
  hideSlider();
  //caso for o último slider, volta pro primeiro
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
    //se não foi o último slider, somamos +1 a ele.
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  //remove a classe on de todos os sliders
  hideSlider();
  //caso seja o primeiro, slider atual será o último
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
    //caso não seja, subtraia 1 do currentSlide
  } else {
    currentSlide--;
  }
  showSlider();
}
btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);
