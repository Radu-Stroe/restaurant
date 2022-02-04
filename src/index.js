import './style.css';
import headerComponent from './header';

const content = document.querySelector('#content');

const mainComponent = (() => {
    //HEADER
    
    headerComponent(homeEvent, menuEvent, contactEvent);

    function homeEvent() {console.log('Home');} 
    function menuEvent() {console.log('Menu');}
    function contactEvent() {console.log('Contact')};

})();
  