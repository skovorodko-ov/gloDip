'use strict';

const accordionQuations = () => {
  const accordion = document.querySelector('.accordion'),
    titleElements = accordion.querySelectorAll('.title_block');

  titleElements.forEach(elem => {
    elem.addEventListener('click', () => {
      elem.classList.toggle('msg-active');
    });
  });

};

export default accordionQuations;