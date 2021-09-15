'use strict';

const formulaPopup = () => {

    const style = document.createElement('style');
      style.id = 'stylePopupFormula';

    const formula = document.getElementById('formula'),
        itemsIcon = formula.querySelectorAll('.formula-item__icon');

    itemsIcon.forEach((elem) => {
        elem.addEventListener('mouseenter', () => {
          const screenWeidth = window.innerWidth;
          if (screenWeidth > 1024) {
            elem.children[0].style.visibility = 'visible';
            elem.children[0].style.opacity = 1;

            const topElem = elem.getBoundingClientRect().top;
            const heightElemPopup = elem.children[0].getBoundingClientRect().height;

            if (topElem < heightElemPopup) {
                elem.children[0].style.transform =
                `translateY(${elem.parentNode.getBoundingClientRect().height + heightElemPopup + 10}px)`;
                
                style.innerText = `
                    .formula-item-popup-${elem.children[2].textContent}:before {
                        transform: rotate(180deg);
                    }
                `;
                document.head.append(style);
            }
          }
        });
    });

    itemsIcon.forEach(elem => {
        elem.addEventListener('mouseleave', () => {
          const screenWeidth = window.innerWidth;
          if (screenWeidth > 1024) {
            elem.children[0].removeAttribute('style');
            const headStyle = document.getElementById('stylePopupFormula');
            if (headStyle) {
                document.head.removeChild(style);
            }
          }
        });
    });

    const sliderFormula = (section, selectorWrap, next, prev, counter = '', total = '', whatSlideFirst = 0) => {
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
                wrapSlides.children[i].children[0].children[0].style.visibility = 'hidden';
                wrapSlides.children[i].children[0].children[0].style.opacity = 0.1;
                if (count === i) {
                    wrapSlides.children[i].style.display = 'flex';
                    wrapSlides.children[i].children[0].children[0].style.visibility = 'visible';
                    wrapSlides.children[i].children[0].children[0].style.opacity = 1;
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

    sliderFormula('#formula', '.formula-slider', '#formula-arrow_right', '#formula-arrow_left');

};

export default formulaPopup;