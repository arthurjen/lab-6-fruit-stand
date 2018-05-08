/* globals beerList */
'use strict';
function addName(i) {
    const parent = document.getElementById('beer-list');
    const child = document.createElement('li');
    child.textContent = beerList[i].name;
    parent.appendChild(child);
}

function addImage(i) {
    const parent = document.getElementById('beer-list');
    const image = document.createElement('img');
    image.src = './images/' + beerList[i].image;
    parent.appendChild(image);
}

function addDetails(i) {
    const parent = document.getElementById('beer-list');
    let child = document.createElement('p');
    child.textContent = beerList[i].brewery;
    parent.appendChild(child);

    child = document.createElement('p')
    child.textContent = beerList[i].abv;
    parent.appendChild(child);
}

function addBeer() {
    for(let i = 0; i < beerList.length; i++) {
        addName(i);
        addImage(i);
        addDetails(i);
    }
}

addBeer();