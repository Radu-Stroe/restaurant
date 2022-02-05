import headerComponent from './header';
import footerComponent from './footer';

const mainComponent = (() => {
    const content = document.querySelector('#content');


    //HEADER
    
    headerComponent(content, homeEvent, menuEvent, contactEvent);

    function homeEvent() {console.log('Home');} 
    function menuEvent() {console.log('Menu');}
    function contactEvent() {console.log('Contact')};

    //FOOTER

    footerComponent(content);

})();
  