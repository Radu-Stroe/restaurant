import './style.css';

const home = document.createElement('div');

const homeComponent = (main) => {

    home.classList.add('home');
    main.appendChild(home);

    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = 'Not just pizza, best pizza!';
    home.appendChild(firstParagraph);

    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = 'Made with passion, made for you!';
    home.appendChild(secondParagraph);

    const thirdParagraph = document.createElement('p');
    thirdParagraph.textContent = 'Since 1983';
    home.appendChild(thirdParagraph);

    const image = document.createElement('img');
    image.setAttribute('src', '../src/chef.jpg');
    home.appendChild(image);

    const fourParagraph = document.createElement('p');
    fourParagraph.textContent = 'Order online or visit us!';
    home.appendChild(fourParagraph);

}

export {home, homeComponent};