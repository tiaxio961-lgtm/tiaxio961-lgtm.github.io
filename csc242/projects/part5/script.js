const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

document.getElementById("toggle-nav").onclick = toggleNav;
const easyButton = document.getElementById("easy-button");
const normalButton = document.getElementById("normal-button");
const hardButton = document.getElementById("hard-button");

const easy = document.getElementById("easy");
const normal = document.getElementById("normal");
const hard = document.getElementById("hard");


const showLevel = (level) => {
    easy.classList.add("hide-level");
    normal.classList.add("hide-level");
    hard.classList.add("hide-level");

    level.classList.remove("hide-level");
};


if (easyButton) {

    easyButton.onclick = () => {
        showLevel(easy);
    };

    normalButton.onclick = () => {
        showLevel(normal);
    };

    hardButton.onclick = () => {
        showLevel(hard);
    };


    document.getElementById("easy-notes-button").onclick = () => {
        document.getElementById("easy-notes").classList.toggle("hide-answer");
    };

    document.getElementById("normal-notes-button").onclick = () => {
        document.getElementById("normal-notes").classList.toggle("hide-answer");
    };

    document.getElementById("hard-notes-button").onclick = () => {
        document.getElementById("hard-notes").classList.toggle("hide-answer");
    };
}