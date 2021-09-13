'use strict';

const lowScroll = () => {
    const popupMenuNav = document.querySelector('.popup-menu-nav'),
        buttonFooter = document.querySelector('.button-footer'),
        popupDialogMenu = document.querySelector('.popup-dialog-menu');
    
    let target;

    const scroll = (e) => {
        if (e.target.hasAttribute('href') && !e.target.classList.contains('no-overflow')) {
            target = e.target.getAttribute('href');
        } 

        e.preventDefault();

        const block = document.querySelector(target);

        if (block) {
            window.scrollTo({
                top: block.offsetTop,
                behavior: "smooth"
            });
            popupDialogMenu.removeAttribute('style');
            popupDialogMenu.style.display = 'none';
        }
    };

    popupMenuNav.addEventListener('click', scroll);
    buttonFooter.addEventListener('click', scroll);
};

export default lowScroll;