import modals from './modules/modals';
import form from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let modalState = {};


    modals();

    form(modalState);

    slider('.customer_wrapper','horizontal', '.customer_arrow_prev', '.customer_arrow_next');
});