let db = require('./db-calls.js');

let parkInfo = {};

function buildParkInfo(name, location, hoursopening, hoursclosing, description){
    let parkInfoCard = 
    `<div class="parkInfoCard">
        <h2>${name}</h2>
        <h3>${location}</h3>
        <h4>Hours of Operation: ${hoursopening} - ${hoursclosing}</h4>
        <p>${description}</p>
    </div>`
    return parkInfoCard;
}



db.fetchParkInfo()
   .then((result) => {
   parkInfo = result;
   let parkInfoDiv = document.querySelector(".park-info-container");
   parkInfoDiv.innerHTML = buildParkInfo(parkInfo[0].name, parkInfo[0].location, parkInfo[0].operating_hours[0].opening, parkInfo[0].operating_hours[0].closing, parkInfo[0].description);
});

module.exports = parkInfo;
