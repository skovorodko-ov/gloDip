'use strict';

import headerInterective from './modules/headerInterective';
import lowScroll from './modules/lowScroll';
import popupLinkList from './modules/popupLinkList';
import maskPhone from './modules/maskPhone';
import popupPrivacy from './modules/popupPrivacy';
import formulaItemPopup from './modules/formulaItemPopup';
import accordionQuations from './modules/accordionQuations';
import repairTypes from './modules/repairTypes';
import slider from './modules/slider';
import documents from './modules/documents';
import popupDocuments from './modules/popupDocuments';


headerInterective();
lowScroll();
popupLinkList();
maskPhone();
popupPrivacy();
formulaItemPopup();
accordionQuations();
repairTypes();
slider('#reviews', '.reviews-slider', '#reviews-arrow_right', '#reviews-arrow_left');
documents();
popupDocuments();