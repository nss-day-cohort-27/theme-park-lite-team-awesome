let db = require("./db-calls.js");


let areaTypes = {};

db.fetchAreas()
    .then((result) => {
        parkArea = result;
        console.log(parkArea);


        makeAreas(parkArea);

  })

function makeAreas(parkArea) {
    const body = document.querySelector("body");
    const script = document.querySelector("script");
    const areaContainer = document.createElement("div");
    areaContainer.setAttribute("class", "area-container");
    body.insertBefore(areaContainer, script);
    parkArea.forEach((item) => {
        areaContainer.innerHTML +=
            `<div id="areaType${item.id}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>sty
            </div>`
    }
    )}
    module.exports =makeAreas;