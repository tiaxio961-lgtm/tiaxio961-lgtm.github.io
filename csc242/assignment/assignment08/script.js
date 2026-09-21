const ex1 = document.getElementById("exercise1");
const ex2 = document.getElementById("exercise2");

const ex1Link = document.getElementById("exercise1-link");
const ex2Link = document.getElementById("exercise2-link");

const nav = document.getElementById("main-nav");
const arrow = document.getElementById("arrow");


ex1Link.onclick = () => {
    ex1.classList.remove("hidden");
    ex2.classList.add("hidden");
};

ex2Link.onclick = () => {
    ex1.classList.add("hidden");
    ex2.classList.remove("hidden");
    showDays();
};


document.getElementById("toggle-nav").onclick = () => {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        arrow.innerHTML = "&#9650;";
    } else {
        arrow.innerHTML = "&#9660;";
    }
};


document.getElementById("calculate-points").onclick = () => {
    const missed = Number(document.getElementById("days-missed").value);
    const result = document.getElementById("points-result");

    const pointsLost = (7 / 25) * missed;

    let message;

    if (missed == 0) {
        message = "You did not miss any class!";
    } else if (missed <= 2) {
        message = "Not too bad, but try not to miss more.";
    } else if (missed <= 5) {
        message = "You are starting to miss a lot of class.";
    } else {
        message = "That is a lot of class to miss!";
    }

    result.innerHTML = "You lost " + pointsLost.toFixed(2) +
        "% of your grade.<br>" + message;
};


const showDays = () => {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), 11, 4);

    const difference = lastDay - today;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    let message;

    if (days > 60) {
        message = "We still have a long way to go.";
    } else if (days > 30) {
        message = "We are getting there!";
    } else if (days > 7) {
        message = "Almost done!";
    } else if (days >= 0) {
        message = "We are almost free!";
    } else {
        message = "The semester is over!";
    }

    if (days >= 0) {
        document.getElementById("semester-result").innerHTML =
            days + " days until the last day of class.<br>" + message;
    } else {
        document.getElementById("semester-result").innerHTML = message;
    }
};