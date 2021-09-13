'use strict';

const formulaItemPopup = () => {
  const formulaItemIcon = document.querySelectorAll('.formula-item__icon');

  formulaItemIcon.forEach(item => {
    item.addEventListener('mouseenter', (event) => {
      let target = event.target;
      target.children[0].style.visibility = 'visible';
      target.children[0].style.opacity = 1;

      let heightParent = target.parentNode.getBoundingClientRect().height,
        heightPopup = heightParent + target.children[0].getBoundingClientRect().height;

      if (target.children[0].getBoundingClientRect().top <= 0) {
        target.children[0].style.transform = `translate3d(0, ${heightPopup}px, 0)`;
        console.dir(target.children[0]);
      }

    });
    item.addEventListener('mouseleave', (event) => {
      let target = event.target;
      target.children[0].removeAttribute('style');
    });
  });
};

export default formulaItemPopup;