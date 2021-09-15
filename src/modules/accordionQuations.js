'use strict';

const accordionQuations = () => {
  const accordion = document.querySelector('.accordion'),
    titleElements = accordion.querySelectorAll('.title_block');

  titleElements.forEach(elem => {
    elem.addEventListener('click', (event) => {
      titleElements.forEach(elem => {
        if (elem === event.target) {
          elem.classList.toggle('msg-active');
        } else {
          elem.classList.remove('msg-active');
        }
      });
    });
  });

};

export default accordionQuations;