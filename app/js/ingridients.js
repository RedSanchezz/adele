let ingridients = document.querySelectorAll(".ingredients__list-item");
let descList = document.querySelectorAll(".desc-list__item");

for (let i = 0; i < ingridients.length; i++) {
    ingridients[i].addEventListener("mouseover", function(e) {

        setAllUnActiveIngridients(ingridients);
        setAllUnActiveDesc(descList);
        descList[i].classList.add("active");
        ingridients[i].classList.add("active__ingridients");
    }, false);
}


function setAllUnActiveIngridients(mas) {

    for (let key of mas) {
        key.classList.remove("active__ingridients");
    }
}

function setAllUnActiveDesc(mas) {
    for (let key of mas) {
        key.classList.remove("active");
    }
}