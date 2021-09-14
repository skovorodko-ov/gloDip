'use strict';

const popupConsultation = () => {
  const popup = document.querySelector('.popup-consultation'),
      buttons = document.querySelectorAll('.button_wide');

  buttons.forEach(elem => {
    elem.addEventListener('click', () => {
      popup.style.visibility = 'visible';
    });
  });

  popup.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('popup-consultation') || target.classList.contains('close')) {
      popup.removeAttribute('style');
    }
  });
};

export default popupConsultation;
