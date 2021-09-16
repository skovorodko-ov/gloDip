'use strict';

const sliderPortfolio = (section, selectorWrap, next, prev, counter = '', total = '', whatSlideFirst = 0) => {
    const sectionWrpa = document.querySelector(section),
        wrapSlides = sectionWrpa.querySelector(selectorWrap),
        nextBtn = sectionWrpa.querySelector(next),
        prevBtn = sectionWrpa.querySelector(prev),
        texts = sectionWrpa.querySelectorAll('.popup-portfolio-text');
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
            texts[i].style.display = 'none';
            if (count === i) {
                wrapSlides.children[i].style.display = 'flex';
                texts[i].style.display = 'flex';
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


const portfolioBlockSlider = () => {
    const portfolio = document.getElementById('portfolio'),
        sliderWrap = portfolio.querySelector('.sliderWrap'),
        arrowRight = document.getElementById('portfolio-arrow_right'),
        arrowLeft = document.getElementById('portfolio-arrow_left'),
        portfolioSlider = document.querySelector('.portfolio-slider');
    const popupPortfolio = document.querySelector('.popup-portfolio'),
        portfolioSliderMobile = portfolio.querySelector('.portfolio-slider-mobile');


    let step = 0;
    let index = 0;

    const arr = [];
        for (let i = 0; i < sliderWrap.children.length; i++) {
            for (let y = 0; y < sliderWrap.children[i].children.length; y++) {
                arr.push(sliderWrap.children[i].children[y]);
            }
        }

    const arrMobile = [];
        
        for (let i = 0; i < portfolioSliderMobile.children.length; i++) {
            arrMobile.push(portfolioSliderMobile.children[i]);
        }


        portfolio.addEventListener('click', (event) => {
            let target = event.target;

            const wrapContainerWeidth = portfolioSlider.clientWidth,
                wrapWeidth = sliderWrap.clientWidth;

            if (target === arrowRight || target.parentNode === arrowRight||
                target.parentNode.parentNode === arrowRight) {
                    if ((wrapWeidth - 100) > (wrapContainerWeidth + step)) {
                        step += 352;
                        sliderWrap.style.transform = `translateX(-${step}px)`;
                        arrowLeft.style.display = 'flex';
                    }
            }
            if (target === arrowLeft || target.parentNode === arrowLeft||
                target.parentNode.parentNode === arrowLeft) {
                  if (step > 0) {
                      step -= 352;
                      sliderWrap.style.transform = `translateX(-${step}px)`;
                      arrowRight.style.display = 'flex';
                  }
                }
          if ((wrapWeidth - 100) < (wrapContainerWeidth + step)) {
            arrowRight.style.display = 'none';
          }
          if (step === 0) {
            arrowLeft.style.display = 'none';
          }

          if (target.classList.contains('portfolio-slider__slide-frame')) {
                popupPortfolio.style.visibility = 'visible';

                arr.forEach((elem, i) => {
                    if (elem === target) {
                        index = i;
                    }
                });

                arrMobile.forEach((elem, i) => {
                    if (elem === target) {
                        index = i;
                    }
                });

                sliderPortfolio('.popup-portfolio',
                        '.popup-portfolio-slider',
                        '#popup_portfolio_right',
                        '#popup_portfolio_left',
                            '.slider-counter-content__current',
                            '.slider-counter-content__total',
                            index);
          }
        });
    
    popupPortfolio.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup-portfolio') || event.target.classList.contains('close')) {
            popupPortfolio.style.visibility = 'hidden';
        }
    });

};

export default portfolioBlockSlider;