/* exported beerList */

'use strict';
function Beer(name, image, brewery, abv) {
    this.name = name;
    this.image = image;
    this.brewery = brewery;
    this.abv = abv;
}

const wanderlust = new Beer(
    'Wanderlust',
    'wanderlust.jpg',
    'Breakside',
    '6.2%'
);

const lunchBreak = new Beer(
    'Lunch Break',
    'lunchBreak.jpg',
    'Breakside',
    '4.7%'
);

const breakside = new Beer(
    'Breakside',
    'breakside.jpg',
    'Breakside',
    '6.2%'
);

const beerList = [
    wanderlust,
    lunchBreak,
    breakside
];