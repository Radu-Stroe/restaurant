import './style.css';

const contact = document.createElement('div');

const contactComponent = (main) => {

    contact.classList.add('contact');
    main.appendChild(contact);

    const title = document.createElement('h3');
    title.textContent = 'Contact us';
    contact.appendChild(title);

    const address = document.createElement('p');
    address.textContent = 'Bv. Tudor Vladimirescu 35, București';
    contact.appendChild(address);

    const tel = document.createElement('p');
    tel.textContent = '0748848444';
    contact.appendChild(tel);

    const map = document.createElement('div');
    map.setAttribute('id', 'map');
    contact.appendChild(map);
}

export {contact, contactComponent}

