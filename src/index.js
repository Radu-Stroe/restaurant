import headerComponent from './header';
import {showHome, showMenu, showContact, mainComponent} from './main';
import footerComponent from './footer';

const content = document.querySelector('#content');


//HEADER

headerComponent(content, showHome, showMenu, showContact);

//MAIN

mainComponent(content);

//FOOTER

footerComponent(content);


  