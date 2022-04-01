import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import modalStateChanges from "./modules/modalStateChanges";

document.addEventListener('DOMContentLoaded', () => {
'use strict';

const stateObject = {};

modals();
tabs();
forms(stateObject);
modalStateChanges(stateObject);
});



