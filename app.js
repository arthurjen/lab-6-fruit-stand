/* globals beerList */

'use strict';

addBeer();

function addBeer() {
    for(let i = 0; i < beerList.length; i++) {
        createDivs(i);
        addName(i);
        addImage(i);
        addDetails(i);
        addQuantityButton(i);
    }
}

function createDivs(i) {
    const parent = document.getElementById('beer-list');
    const div = document.createElement('div');
    div.setAttribute('id', 'beer-' + i);
    div.setAttribute('class', 'beer');
    parent.appendChild(div);
}

function addName(i) {
    const parent = document.getElementById('beer-' + i);
    const child = document.createElement('h2');
    child.textContent = beerList[i].name;
    parent.appendChild(child);
}

function addImage(i) {
    const parent = document.getElementById('beer-' + i);
    const image = document.createElement('img');
    image.src = './images/' + beerList[i].image;
    parent.appendChild(image);
}

function addDetails(i) {
    const parent = document.getElementById('beer-' + i);
    let child = document.createElement('p');
    child.textContent = beerList[i].brewery;
    parent.appendChild(child);

    child = document.createElement('p');
    child.textContent = beerList[i].abv;
    parent.appendChild(child);

    
}

function addQuantityButton(i) {
    const parent = document.getElementById('beer-' + i);
    let child = document.createElement('button');
    child.setAttribute('onclick', 'decreaseQuantity()');
    // child.setAttribute('id', 'beer-btn-' + i);
    child.textContent = '-';
    parent.appendChild(child);

    child = document.createElement('span');
    child.setAttribute('id', i);
    child.textContent = beerList[i].quantity;
    parent.appendChild(child);

    child = document.createElement('button');
    child.setAttribute('onclick', 'increaseQuantity()');
    // child.setAttribute('id', 'beer-btn-' + i);
    child.textContent = '+';
    parent.appendChild(child);
}



function increaseQuantity() {
    let quantity = document.querySelector('span');
    const index = quantity.getAttribute('id');
    beerList[index].increaseQuantity();
    console.log(beerList[index].quantity);
    quantity.textContent = beerList[index].quantity;
}

function decreaseQuantity() {
    let quantity = document.querySelector('span');
    let index = quantity.getAttribute('id');
    beerList[index].decreaseQuantity();
    console.log(beerList[index].quantity);
    quantity.textContent = beerList[index].quantity;
}