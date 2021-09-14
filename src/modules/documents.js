'use strict';

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
    })
};

const documents = () => {
    if (document.documentElement.clientWidth < 1090) {
        slider('#transparency', '.transparency-slider', '#transparency-arrow_right', '#transparency-arrow_left');
    }
    window.addEventListener('resize', () => {
        let windowWidth = document.documentElement.clientWidth;
        if (windowWidth < 1090) {
            slider('#transparency', '.transparency-slider', '#transparency-arrow_right', '#transparency-arrow_left');
        } else {
            const slider = document.querySelector('.transparency-slider');
            for (let i = 0; i < slider.children.length; i++) {
                slider.children[i].removeAttribute('style');
            }
        }
    });
};

export default documents;