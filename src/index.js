import './index.html';
import './scss/blocks/header.scss';
import './scss/blocks/header-burger.scss';
import './scss/blocks/promo.scss';
import './scss/blocks/form.scss';
import './scss/blocks/glazing.scss';
import './scss/blocks/decoration.scss';
import './scss/blocks/works.scss';
import './scss/blocks/garantees.scss';
import './scss/blocks/pay.scss';
import './scss/blocks/sale.scss';
import './scss/blocks/contacts.scss';
import './scss/blocks/feedback.scss';
import './scss/blocks/footer.scss';
import './scss/blocks/popup.scss';
import './scss/blocks/popup-calc.scss';
import './scss/blocks/popup-type.scss';
import './scss/style.scss';
import './scss/null.scss';
import './scss/mixins.scss';

import './js/burger'
import './js/sliders'
import timer from './js/timer'
import modals from './js/modal'
import tabs from './js/tabs'
import images from './js/images'
import forms from './js/forms'
import changeModalState from './js/changeModalState'

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let deadline = '2021-09-18'
    let modalState = {}
    changeModalState(modalState)
    modals()
    images()
    forms(modalState)
    timer('.timer-sale__block', deadline)
    tabs('.slider-decoration__wrapper', '.slider-decoration__btn', '.tabs-decoration__item', 'active')
    tabs('.popup-calc__tabs', '.popup-calc__item', '.big-image', '.show-more')
})