/* exported beerList */

'use strict';

function Beer(name, image, brewery, abv, color, quantity) {
    this.name = name;
    this.image = image;
    this.brewery = brewery;
    this.abv = abv;
    this.color = color;
    this.quantity = quantity;
    this.increaseQuantity = function() {
        this.quantity++;
    };
    this.decreaseQuantity = function() {
        this.quantity--;
    };
}

const wanderlust = new Beer(
    'Wanderlust',
    'wanderlust.jpg',
    'Breakside',
    '6.2%',
    'brown',
    '18'
);

const lunchBreak = new Beer(
    'Lunch Break',
    'lunchBreak.jpg',
    'Breakside',
    '4.7%',
    'blue',
    '36'
);

const breakside = new Beer(
    'Breakside',
    'breakside.jpg',
    'Breakside',
    '6.2%',
    'white',
    '0'
);

const beerList = [
    wanderlust,
    lunchBreak,
    breakside
];