'use sctrict';

const slider = (section, selectorWrap, next, prev, counter = '', total = '', whatSlideFirst = 0) => {
    const sectionWrpa = document.querySelector(section),
        wrapSlides = sectionWrpa.querySelector(selectorWrap),
        nextBtn = sectionWrpa.querySelector(next),
        prevBtn = sectionWrpa.querySelector(prev);
    let counterTag,
        totalTag;

    if (counter) {
        counterTag = sectionWrpa.querySelector(counter);
        counterTag.textContent = 1;
    }
    if (total) {
        totalTag = sectionWrpa.querySelector(total);
        totalTag.textContent = wrapSlides.children.length;
    }
    
    let count = whatSlideFirst; 

    const activeSlide = (count) => {
        for (let i = 0; i < wrapSlides.children.length; i++) {
            wrapSlides.children[i].style.display = 'none';
            if (count === i) {
                wrapSlides.children[i].style.display = 'flex';
                counter ? counterTag.textContent = (i + 1) : counter = '';
            }
        }
    };

    activeSlide(count);

    nextBtn.addEventListener('click', () => {
        count += 1;
        if (count === wrapSlides.children.length) {
            count = 0;
        }
        activeSlide(count);
    });

    prevBtn.addEventListener('click', () => {
        count -= 1;
        if (count < 0) {
            count = wrapSlides.children.length - 1;
        }
        activeSlide(count);
    });
};

const popupDocuments = () => {

    const transparencyItemsImg = document.querySelectorAll('.transparency-item__img'),
        popupTransparency = document.querySelector('.popup-transparency');
    transparencyItemsImg.forEach(item => {
        item.addEventListener('click', (event) => {
            let index;
            popupTransparency.style.visibility = 'visible';

            for (let i = 0; i < transparencyItemsImg.length; i++) {
                if (event.target === transparencyItemsImg[i]) {
                    index = i;
                }
            }

            slider('.popup-transparency',
            '.popup-transparency-slider',
            '#transparency_right',
            '#transparency_left',
            '.slider-counter-content__current',
            '.slider-counter-content__total',
            index);

        });
    });
    popupTransparency.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-transparency') || target.classList.contains('close')) {
            popupTransparency.removeAttribute('style');
        }
    });
};

export default popupDocuments;

