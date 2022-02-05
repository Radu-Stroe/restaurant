import './style.css';

const footerComponent = (content) => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    content.appendChild(footer);
    
    const p = document.createElement('p');
    p.innerText = 'Copyright © 2022 Radu';
    footer.appendChild(p);

    p.innerHTML = p.innerText + ' <i class="fab fa-github-square"></i>';
}

export default footerComponent;