import './style.css';
import {home, homeComponent} from './home';
import {menu, menuComponent} from './menu';
import {contact, contactComponent } from './contact';

const mainComponent = (content) => {

    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    content.appendChild(main);

    homeComponent(main);
    menuComponent(main);
    contactComponent(main);
}

const showHome = () => {
    home.style.display = 'block';
    menu.style.display = 'none';
    contact.style.display = 'none';
}

const showMenu = () => {
    home.style.display = 'none';
    menu.style.display = 'grid';
    contact.style.display = 'none';
}

const showContact = () => {
    home.style.display = 'none';
    menu.style.display = 'none';
    contact.style.display = 'block';
}

export {showHome, showMenu, showContact, mainComponent};