"use strict";

function makeTypeArea(dataArray){
    let typeDiv = document.querySelector(".type-container");
    dataArray.forEach((item) => {
    //document.createElement("button")
        typeDiv.innerHTML +=`<button id="type${item.id}">${item.name}</button>`
    });
}


module.exports= makeTypeArea;
