import headerComponent from './header';
import {home, menu, mainComponent} from './main';
import footerComponent from './footer';

const content = document.querySelector('#content');


//HEADER

headerComponent(content, homeEvent, menuEvent, contactEvent);

function homeEvent() {console.log('Home');} 
function menuEvent() {console.log('Menu');}
function contactEvent() {console.log('Contact')};

//MAIN

mainComponent(content);

//FOOTER

footerComponent(content);


  