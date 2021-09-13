'use strict';

const repairTypes = () => {
  const repairTypes = document.getElementById('repair-types'),
    buttons = repairTypes.querySelectorAll('button'),
    repairTypesSlider = repairTypes.querySelector('.repair-types-slider'),
    arrowRight = document.getElementById('repair-types-arrow_right'),
    arrowLeft = document.getElementById('repair-types-arrow_left'),
    sliderCounterContentCurrent = repairTypes.querySelector('.slider-counter-content__current'),
    sliderCounterContentTotal = repairTypes.querySelector('.slider-counter-content__total'),
    navListRepair = repairTypes.querySelector('.nav-list'),
    navArrowRepairRightBase = document.getElementById('nav-arrow-repair-right_base'),
    navArrowRepairLeftBase = document.getElementById('nav-arrow-repair-left_base');

    console.dir(navListRepair);

  let count = 0,
  whatSlider = 0,
  slider = repairTypesSlider.children[0];
  const step = navListRepair.offsetWidth / 4;
  let offsetLeft = 0;

  sliderCounterContentTotal.textContent = slider.children.length;

  repairTypes.addEventListener('click', (event) => {

    let target = event.target;

    
    if (target === navArrowRepairRightBase || target.parentNode === navArrowRepairRightBase ||
      target.parentNode.parentNode === navArrowRepairRightBase) {
        offsetLeft += step;
        if (offsetLeft > 720) {
          offsetLeft = 0;
        }
        navListRepair.style.transform = `translateX(-${offsetLeft}px)`;
    }
    if (target === navArrowRepairLeftBase || target.parentNode === navArrowRepairLeftBase ||
      target.parentNode.parentNode === navArrowRepairLeftBase) {
        offsetLeft -= step;
        if (offsetLeft < 0) {
          offsetLeft = 720;
        }
        navListRepair.style.transform = `translateX(-${offsetLeft}px)`;
    }

    if (target.tagName === 'BUTTON') {
      count = 0;
      buttons.forEach((elem) => {
        elem.classList.remove('active');
      });
      target.classList.add('active');

      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('active')) {
          whatSlider = i;
          repairTypesSlider.children[i].style.display = 'block';
        } else {
          repairTypesSlider.children[i].style.display = 'none';
        }
      }
    }

    slider = repairTypesSlider.children[whatSlider];

    sliderCounterContentTotal.textContent = slider.children.length;

    if (target === arrowRight || target.parentNode === arrowRight || target.parentNode.parentNode === arrowRight) {
      count +=1;
    }
    if (target === arrowLeft || target.parentNode === arrowLeft || target.parentNode.parentNode === arrowLeft) {
      count -=1;
    }
    if (count === slider.children.length) {
        count = 0;
    }
    if (count < 0) {
      count = slider.children.length - 1;
    }
    for (let i = 0; i < slider.children.length; i++) {
      if (i === count) {
        slider.children[i].style.display = 'block';
        sliderCounterContentCurrent.textContent = i + 1;
      } else {
        slider.children[i].style.display = 'none';
      }
    }


  });
};

export default repairTypes;