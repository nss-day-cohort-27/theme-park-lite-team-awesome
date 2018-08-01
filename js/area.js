let db = require("./db-calls.js");


let areaTypes = {};

db.fetchAreas()
    .then((result) => {
        parkArea = result;
        console.log(parkArea);


        makeAreas(parkArea);

  })

function makeAreas(parkArea) {
    let areaContainer = document.querySelector(".area-container");
    parkArea.forEach((item) => {
        areaContainer.innerHTML +=
            `<div id="areaType${item.id}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>sty
            </div>`
    })
}
    
module.exports =makeAreas;