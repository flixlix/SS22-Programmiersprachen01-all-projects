const closeButtonInfo = document.getElementById("icon-close-info-popup");
const openButtonInfo = document.getElementById("info-button");
let popupContainerInfo = document.getElementById("info-popup-container");

function openPopupInfo() {
    popupContainerInfo.style.transform = "scale(1) translate(-50%,-50%)"
    /* show popup */
    popupContainerInfo.style.transition = "transform 700ms cubic-bezier(.58,.22,.52,1.19)";
    /* special effect when opening popup */
}


function closePopupInfo() {
    popupContainerInfo.style.transform = "scale(0) translate(-50%,-50%)";
    /* hide popup */
    popupContainerInfo.style.transition = "all 400ms ease-in";
    /* back to normal transition when closing popup */
    
}

closeButtonInfo.addEventListener('click',closePopupInfo);
/* close info popup when cross button is pressed */

openButtonInfo.addEventListener('click', openPopupInfo);
/* open info popup when info button is pressed */
