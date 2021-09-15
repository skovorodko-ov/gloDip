'use strict';

const headerInterective = () => {
    const header = document.querySelector('.header'),
        headerContactsPhoneNumberAccord = header.querySelector('.header-contacts__phone-number-accord'),
        headerContactsArrow = header.querySelector('.header-contacts__arrow'),
        headerContactsPhoneNumberWrap = header.querySelector('.header-contacts__phone-number-wrap'),
        popupDialogMenu = document.querySelector('.popup-dialog-menu'),
        closeMenu = document.querySelector('.close-menu');

    popupDialogMenu.style.visibility = 'hidden';

    header.addEventListener('click', (event)=> {
        let target = event.target;

        if (target.getAttribute('alt') === 'arrow' || target.classList.contains('header-contacts__arrow')) {
            if (headerContactsPhoneNumberAccord.firstChild.style.opacity === '1') {
                headerContactsPhoneNumberAccord.removeAttribute('style');
                headerContactsPhoneNumberAccord.firstChild.removeAttribute('style');
                headerContactsArrow.firstChild.removeAttribute('style');
            } else {
                headerContactsPhoneNumberAccord.style.top = `${headerContactsPhoneNumberWrap.clientHeight}px`;
                headerContactsPhoneNumberAccord.firstChild.style.opacity = 1;
                headerContactsArrow.firstChild.style.transform = `rotate(180deg)`;
            }
        }

        if (target.classList.contains('menu__icon')) {
            popupDialogMenu.style.visibility = 'visible';
            popupDialogMenu.style.transform = `translate3d(0, 0, 0)`;
        }
    });
    closeMenu.addEventListener('click', () => {
        popupDialogMenu.removeAttribute('style');
        popupDialogMenu.style.visibility = 'hidden';
    });
};

export default headerInterective;