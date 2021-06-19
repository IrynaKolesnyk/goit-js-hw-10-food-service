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
    containerThemeSwitch: document.querySelector('.theme-switch'),

    iconMoon: document.querySelector('.js-moon'),
    iconSun: document.querySelector('.js-sun'),
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
populateTheme();

function onSwitchChange(event) {

    const darkThemeChange = document.body.classList.toggle(Theme.DARK);
    localStorage.setItem('dark', darkThemeChange);
};

function populateTheme() {
    const getKeyLocalStorage = localStorage.getItem('dark');
    const stringD = JSON.parse(getKeyLocalStorage);

    if (stringD) {
        refs.switchInput.checked = true;
        document.body.classList.add(Theme.DARK);
    }
};

// смена темы при нажатии на солнце или луну (работает, но есть проблемы с <use>)
refs.iconMoon.addEventListener('click', onClickThemeSwitch);
refs.iconSun.addEventListener('click', onClickThemeSwitch);

function onClickThemeSwitch(event) {

    if (event.target === refs.iconMoon) {
        document.body.classList.add(Theme.DARK);
        refs.switchInput.checked = true;
        localStorage.setItem('dark', true);
    } else if (event.target === refs.iconSun) {
        document.body.classList.remove(Theme.DARK);
        refs.switchInput.checked = false;
        localStorage.setItem('dark', false);
    }
};