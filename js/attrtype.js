"use strict";
let db = require("./db-calls.js");

let types = {};

function makeTypeArea(){
    let typeDiv = document.querySelector(".type-container");
    types.forEach((item) => {
    //document.createElement("button")
        typeDiv.innerHTML +=`<button id="type${item.id}">${item.name}</button>`;
    });
}

db.fetchTypes()
   .then((result) => {
   types = result;
   console.log("types",types);
   makeTypeArea();
});

module.exports = types;

