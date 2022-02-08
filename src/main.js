import './style.css';
import {home, homeComponent} from './home';
import {menu, menuComponent} from './menu';

const mainComponent = (content) => {

    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    content.appendChild(main);

    homeComponent(main);
    menuComponent(main);

    
}

export {home, menu, mainComponent};