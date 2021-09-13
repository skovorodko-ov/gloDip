'use strict';

const popupLinkList = () => {
    const linkList = document.querySelectorAll('.no-overflow'),
        popupRepairTypes = document.querySelector('.popup-repair-types'),
        popupDialogMenu = document.querySelector('.popup-dialog-menu');

    linkList.forEach(item => {
        item.addEventListener('click', (event) => {
          event.preventDefault();
          popupRepairTypes.style.visibility = 'visible';
          popupDialogMenu.removeAttribute('style');
        });
    });
};

export default popupLinkList;