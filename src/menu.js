import './style.css';

const menu = document.createElement('div');

const menuComponent = (main) => {

    menu.classList.add('menu');
    main.appendChild(menu);

    const pizzas = [
        { name: 'Con Carne', description: 'Tomato sauce, Mozarella, Sausage, Bacon, Garlic, Chilli' },
        { name: 'Bueno', description: 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil' },
        { name: 'Gamberi', description: 'Tomato sauce, Mozarella, Shrimps, Cheese, Olives, Basil' },
        { name: 'Pesti', description: 'White sauce, Mozarella, Shrimps, Salmon, Olives, Basil' },
        { name: 'Peperroni', description: 'Tomato sauce, Mozarella, Chilli flakes, Pepperoni, Basil' },
        { name: 'Mexican', description: 'Tomato sauce, Mozarella, Onion, Pepper, Corn, Basil' },
        { name: 'Pomodoro', description: 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli' },
        { name: 'Pineapple', description: 'Tomato sauce, Bacon, Pineapple, Olives, Basil' }
    ]

    for(let i=0; i < pizzas.length; i++) {

        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        menu.appendChild(menuItem);

        const pizzaImage = document.createElement('img');
        pizzaImage.setAttribute('src', `/src/pizza_images/pizza${i+1}.png`)
        menuItem.appendChild(pizzaImage);

        const pizzaName = document.createElement('h2');
        pizzaName.textContent = pizzas[i].name;
        menuItem.appendChild(pizzaName);

        const pizzaDescription = document.createElement('p');
        pizzaDescription.textContent = pizzas[i].description;
        menuItem.appendChild(pizzaDescription);

    }

}

export {menu, menuComponent};