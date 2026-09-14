// Tianao Xiong - CSCE 242 - Assignment 7

const showSpeech = () => {
    const bubble = document.getElementById("speech-bubble");
    bubble.classList.remove("hidden");
};

const showBeverage = () => {
    const beverage = document.getElementById("beverage").value;
    const message = document.getElementById("beverage-message");

    if (beverage !== "") {
        message.innerHTML = `${beverage}: Nice Choice!`;
    } else {
        message.innerHTML = "";
    }
};

const addSticker = () => {
    const stickerArea = document.getElementById("sticker-area");

    const sticker = document.createElement("span");

    sticker.innerHTML = "🌞";
    sticker.classList.add("sticker");

    sticker.style.left = "20px";
    sticker.style.top = "45px";

    stickerArea.append(sticker);
};

document.getElementById("speech-section").onclick = showSpeech;

document.getElementById("beverage").onchange = showBeverage;

document.getElementById("sun").onclick = addSticker;