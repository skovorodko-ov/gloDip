'use strict';

const popupLinkList = () => {
    const linkList = document.querySelectorAll('.link-list'),
        popupRepairTypes = document.querySelector('.popup-repair-types'),
        popupDialogMenu = document.querySelector('.popup-dialog-menu');

    linkList.forEach(item => {
        item.addEventListener('click', (event) => {
          event.preventDefault();
          popupRepairTypes.style.visibility = 'visible';
          popupDialogMenu.removeAttribute('style');
          popupDialogMenu.style.visibility = 'hidden';
        });
    });
    popupRepairTypes.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('close') || target.classList.contains('popup-repair-types')) {
        popupRepairTypes.removeAttribute('style');
      }
    });
};

export default popupLinkList;