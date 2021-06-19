'use strict';
import menuCardTemplate from "./templates/menu-card.hbs";
import menu from "./menu.json";


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    menuContainer: document.querySelector('.js-menu'),
    switchInput: document.querySelector('#theme-switch-toggle'),
    // btnAddToBasket: document.querySelector('menu .card__button')
};

// создание разметки меню
const cardsMenu = createMenuCardsMarkup(menu);
refs.menuContainer.insertAdjacentHTML('beforeend', cardsMenu);

function createMenuCardsMarkup(menu) {
    return menu.map(item => menuCardTemplate(item)).join('');
    // аналог записи return menu.map(menuCardTemplate).join('');
};

// смена темы сайта
refs.switchInput.addEventListener('change', onSwitchChange);

function onSwitchChange(event) {
    console.log("onSwitchChange", onSwitchChange)

    if (event) {
        document.body.classList.toggle(Theme.DARK);
    }
    console.log("event", event);

};