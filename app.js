const $ = document;

const imageElem = $.querySelector(".i"); 
const pElem = $.querySelector(".p1");

const urlGentelman = "./images/gentleman.jpg";

imageElem.addEventListener("click", () => {
    pElem.innerHTML = "Hello World";
    imageElem.src = urlGentelman;
    imageElem.alt = "gentleman"
})