let btnElem = $.querySelector(".res");
let imgElem = $.querySelector(".i");
let p2Elem = $.querySelector(".p1");


btnElem.addEventListener("click", () => {
    p2Elem.innerHTML = "just touch me baby";
    imgElem.src = "./images/bo.jpg";
})
