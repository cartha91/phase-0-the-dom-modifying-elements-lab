const element = document.getElementById("main");
element.remove();

let newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "Cartha is the champion";

//review of DOM modification