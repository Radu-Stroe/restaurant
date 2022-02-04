import './style.css';
import {homeButton, menuButton, contactButton, headerComponent} from './header';

const content = document.querySelector('#content');

const mainComponent = (() => {
    //HEADER
    headerComponent();
    homeButton.addEventListener('click', () => console.log('Home'));
    menuButton.addEventListener('click', () => console.log('Menu'));
    contactButton.addEventListener('click', () => console.log('Contact'));

})();
  