"use strict";

let db = require('./db-calls.js');

let attractions = {};

function buildAttractions(name, description){
    let attractionCard = 
        `<div class="attraction-card">
            <h3>${name}</h3>
            <p>${description}</p>
        </div>`
    return attractionCard;
}


db.fetchAttractions()
.then((result) => {
    attractions = result;
    console.log("attractions:", attractions);
    let attractionDiv = document.querySelector(".attraction-container")
    attractions.forEach((item) => {
        attractionDiv.innerHTML += 
        buildAttractions(item.name, item.description);
   })
});


module.exports = {attractions};

