document.querySelector(".categories-button").addEventListener("click", showCategory);

function showCategory(){
    let categoryOpener = document.querySelector(".categoriesMenu");
    categoryOpener.classList.toggle("visible");
}

document.querySelector(".teleport-button").addEventListener("click", teleport)

function teleport(){
    let teleportOpener = document.querySelector(".teleportMenu");
    teleportOpener.classList.toggle("visible");
    let clickAnimation = document.querySelector(".teleport-button")
    clickAnimation.classList.toggle("lighten");
    let activateSound = document.querySelector("#blipblip")
    activateSound.volume = 0.4;
    activateSound.play();
    }

