var closeModal = document.querySelector(".modal__close");
var modal = document.querySelector(".main-page__modal");
var button = document.querySelector(".contacts__button");




function modalClose() {
    if (modal.style.top == "1800px") {
        modal.style.top = "-1800px";
    }
}

function modalPopup() {
    if (modal.style.top !== "1800px") {
        modal.style.top = "1800px";
    }
}


closeModal.addEventListener("click", modalClose);
button.addEventListener("click", modalPopup);



//modal map

var closeModalMap = document.querySelector(".wrapper-map__close");
var modalMap = document.querySelector(".main-page__wrapper-map");
var map = document.querySelector(".contacts__map");

function mapClose() {
    if (modalMap.style.top == "1800px") {
        modalMap.style.top = "-1800px";
    }

}

function mapPopup() {
    if (modalMap.style.top !== "1800px") {
        modalMap.style.top = "1800px";
    }
}


closeModalMap.addEventListener("click", mapClose);
map.addEventListener("click", mapPopup);








// main slider
var slideArr = document.querySelectorAll(".slider-item");
var count = 0;
var k = 0;

function dispNone() {
    for (var i = 0; i < slideArr.length; i++) {
        slideArr[i].style.display = "none";
    }
}

function carousell() {
    dispNone();
    slideArr[k].style.display = "flex";
    if (k < slideArr.length - 1) {
        k++;
    } else {
        k = 0;
    }
    setTimeOut("carousell()", 2000);
}
window.onload = setInterval("carousell()", 2000);