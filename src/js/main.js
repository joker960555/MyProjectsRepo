'use strict';

import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {

modals();
tabs('.glazing_block' ,'.glazing_content', '.glazing_slider', 'active');
tabs('.no_click' ,'.decoration_content > div > div', '.decoration_slider', 'after_click');


});


