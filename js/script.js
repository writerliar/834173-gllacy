var link = document.querySelector(".button-map");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-close");
var form = popup.querySelector(".feedback-form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
        
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-feedback-show");
    overlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-show");
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-error");
});
       
form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !message.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});
       
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-feedback-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-feedback-show");
            overlay.classList.remove("modal-overlay-show");
            popup.classList.remove("modal-error");
        }
    }
});
        
overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-show");
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-error");
});

window.onload = function() {
    ymaps.ready(initMap);
    initSlider();
    initModal();
};

function initMap() {
    var gllacyMap = new ymaps.Map("gllacy-map", {
        center: [59.939355, 30.329410],
        zoom: 16,
        controls: ["zoomControl"]
    }),
        gllacyPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
            hintContent: "GllacyShop"
        }, {
            iconLayout: "default#image",
            iconImageHref: "../img/pin.svg",
            iconImageSize: [218, 142],
            iconImageOffset: [-38, -142]
        });
    gllacyMap.behaviors.disable("scrollZoom");
    gllacyMap.geoObjects.add(gllacyPlacemark);
}