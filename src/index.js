'use strict';
import menuCardTemplate from "./templates/menu-card.hbs";
import menu from "./menu.json";


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    menuContainer: document.querySelector('.js-menu'),
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