'use strict';

const popupPrivacy = () => {
  const linkPrivacy = document.querySelectorAll('.link-privacy'),
    popupPrivacy = document.querySelector('.popup-privacy');

  linkPrivacy.forEach(item => {
    item.addEventListener('click', () => {
      popupPrivacy.style.visibility = 'visible';
    });
  });

  popupPrivacy.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('close') || target.classList.contains('popup-privacy')) {
      popupPrivacy.removeAttribute('style');
    }
  });
};

export default popupPrivacy;