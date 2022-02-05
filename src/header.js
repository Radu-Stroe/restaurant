import './style.css';

const headerComponent = (content, homeEvent, menuEvent, contactEvent) => {
    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    content.appendChild(header);

    const heading1 = document.createElement('h1');
    heading1.innerText = 'Regianno';
    header.appendChild(heading1);

    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');
    header.appendChild(navBar);

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.classList.add('home');
    menuButton.classList.add('menu');
    contactButton.classList.add('contact');

    homeButton.innerText = 'Home';
    menuButton.innerText = 'Menu';
    contactButton.innerText = 'Contact';

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);

    homeButton.addEventListener('click', homeEvent);
    menuButton.addEventListener('click', menuEvent);
    contactButton.addEventListener('click', contactEvent);
}

export default headerComponent;