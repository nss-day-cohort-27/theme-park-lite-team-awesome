"use-strict";

let buildAttractions = require('./attraction-cards.js');

// function addTypes(area){
//     let mainAttractionDiv = document.querySelector(".attraction-container");
//     mainAttractionDiv.innerHTML =
//     `<div class="attraction-filter">
//         <button id="area-return">Choose Another Area</button>
//         <h2>${area}</h2>
//         <h4>Choose an Attraction Type!</h4>
//     </div>
//     <div class="attraction-type-filter">
//         <button id="attractionType1">Rides</button>
//         <button id="attractionType2">Restaurants</button>
//         <button id="attractionType3">Shows</button>
//         <button id="attractionType4">Vendors</button>
//         <button id="attractionType5">Character Meets</button>
//         <button id="attractionType6">Animals</button>
//         <button id="attractionType7">Games</button>
//         <button id="attractionType8">Special Events</button>
//     </div>
//     <div class="attraction-content"></div>`;
//     let areaReturnButton = document.querySelector("#area-return");
//     areaReturnButton.addEventListener("click", makeAttractionCards);
// }

function makeAttractionCards(dataArray){
    let attractionDiv = document.querySelector(".attraction-container");
    dataArray.forEach((item) => {
        attractionDiv.innerHTML += 
        buildAttractions(item.name, item.description);
        
    });
}
//             });
// }

// function makeAttractionCards(dataArray){
//     let mainAttractionDiv = document.querySelector(".attraction-container");
//     mainAttractionDiv.innerHTML = 
//     `<div class="area-filter">
//         <button id="area1">Main Street U.S.A.</button>
//         <button id="area2">Adventureland</button>
//         <button id="area3">Frontierland</button>
//         <button id="area4">Liberty Square</button>
//         <button id="area5">Fantasyland</button>
//         <button id="area6">Tomorrowland</button>
//         <button id="area7">Cinderella Castle</button>
//     </div>`;
    
//     let areaFilter = document.querySelector(".area-filter");
//     areaFilter.addEventListener("click", (e) => {
//         if (e.target.id === "area1"){
//             addTypes("Main Street U.S.A.");
//             let attractionDiv = document.querySelector(".attraction-content");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 1){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType2"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 2){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType3"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 3){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType4"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 4){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType5"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 5){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType6"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 6){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType7"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 7){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType8"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 8){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area2"){
//             addTypes("Adventureland");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 2 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area3"){
//             addTypes("Frontierland");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 3 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area4"){
//             addTypes("Liberty Square");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 4 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area5"){
//             addTypes("Fantasyland");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 5 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area6"){
//             addTypes("Tomorrowland");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 6 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area7"){
//             addTypes("Cinderella Castle");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 7 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         }
//     });
// }

module.exports = makeAttractionCards;