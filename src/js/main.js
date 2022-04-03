import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import modalStateChanges from "./modules/modalStateChanges";
import timer from "./modules/timer";

document.addEventListener('DOMContentLoaded', () => {
'use strict';

const deadline = '2022-05-03';
const stateObject = {};

timer(deadline);
modals();
tabs();
forms(stateObject);
modalStateChanges(stateObject);
});



