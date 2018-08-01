"use-strict";

let buildAttractions = require('./attraction-cards.js');


function makeAttractionCards(dataArray){
    let attractionDiv = document.querySelector(".attraction-container");
    dataArray.forEach((item) => {
        attractionDiv.innerHTML += 
        buildAttractions(item.name, item.description);
   })
}

module.exports = makeAttractionCards;