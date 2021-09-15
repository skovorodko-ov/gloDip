'use strict';

import headerInterective from './modules/headerInterective';
import lowScroll from './modules/lowScroll';
import popupLinkList from './modules/popupLinkList';
import maskPhone from './modules/maskPhone';
import popupPrivacy from './modules/popupPrivacy';
import accordionQuations from './modules/accordionQuations';
import repairTypes from './modules/repairTypes';
import slider from './modules/slider';
import documents from './modules/documents';
import popupDocuments from './modules/popupDocuments';
import sendForm from './modules/sendForm';
import popupConsultation from './modules/popupConsultation';
import popapRepair from './modules/popapRepair';
import formulaPopup from './modules/formulaPopup';


headerInterective();
lowScroll();
popupLinkList();
maskPhone();
popupPrivacy();
accordionQuations();
repairTypes();
slider('#reviews', '.reviews-slider', '#reviews-arrow_right', '#reviews-arrow_left');
documents();
popupDocuments();
sendForm();
popupConsultation();
popapRepair();
slider('.popup-repair-types', '.nav-list-popup-repair', '#nav-arrow-popup-repair_right', '#nav-arrow-popup-repair_left');
formulaPopup();