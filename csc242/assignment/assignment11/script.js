class Vacation {
    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    getCard() {
        const section = document.createElement("section");
        section.classList.add("vacation-card");

        section.innerHTML = `
            <img src="${this.image}" alt="${this.title}">
            <h3>${this.title}</h3>
            <p>${this.type}</p>
        `;

        section.onclick = () => {
            this.showVacation();
        };

        return section;
    }

    showVacation() {
        const modal = document.getElementById("vacation-modal");
        const info = document.getElementById("modal-info");

        info.innerHTML = `
            <h2>${this.title}</h2>
            <p><strong>Type:</strong> ${this.type}</p>
            <p>${this.description}</p>

            <h3>Things to Do</h3>
            <p>${this.thingsToDo}</p>

            <img src="${this.image}" alt="${this.title}">

            <iframe
                src="${this.mapSrc}"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin">
            </iframe>
        `;

        modal.style.display = "block";
    }
}


const vacations = [
    new Vacation(
        "Midlands Mountains Trail",
        "Mountain",
        "A mountain trail in South Carolina with outdoor views.",
        "Hiking, walking, and enjoying the outdoors",
        "images/midlands.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211636.8897716245!2d-81.39768485581754!3d34.02266670455233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a3e8868f47cb%3A0xfc61d7c6f77c7fe8!2sMidlands%20Mountains%20Trail!5e0!3m2!1sen!2sus!4v1790537647679!5m2!1sen!2sus"
    ),

    new Vacation(
        "Brice Hill",
        "Mountain",
        "A quiet mountain area to visit and spend time outside.",
        "Walking, hiking, and sightseeing",
        "images/bricehill.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211480.95113730695!2d-81.21766818359373!3d34.08515180000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a3f83091c523%3A0xf8c13d551fefa6ce!2sBrice%20Hill!5e0!3m2!1sen!2sus!4v1790537681542!5m2!1sen!2sus"
    ),

    new Vacation(
        "Little Mountain",
        "Mountain",
        "A small town and mountain area in South Carolina.",
        "Exploring, walking, and sightseeing",
        "images/littlemountain.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211227.08280010923!2d-81.55346938359374!3d34.1866628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f883607bb15225%3A0x4641fa56ed18a28a!2sLittle%20Mountain!5e0!3m2!1sen!2sus!4v1790537709341!5m2!1sen!2sus"
    ),

    new Vacation(
        "West Dam Beach",
        "Beach",
        "A beach area where you can relax near the water.",
        "Swimming, relaxing, and having a picnic",
        "images/westdam.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850149.380392476!2d-82.76926443437506!3d33.659856100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f829e729ba8da5%3A0x8042e5149c3a2f7a!2sWest%20Dam%20Beach!5e0!3m2!1sen!2sus!4v1790537770295!5m2!1sen!2sus"
    ),

    new Vacation(
        "Bomb Island",
        "Beach",
        "An island on Lake Murray that is known for its wildlife and water views.",
        "Boating, sightseeing, and watching birds",
        "images/bombisland.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d843055.7132726886!2d-82.22563723437493!3d34.37117959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f89ae5a7e14331%3A0xcaecb16c12c9e9f3!2sBomb%20Island!5e0!3m2!1sen!2sus!4v1790537811672!5m2!1sen!2sus"
    ),

    new Vacation(
        "Pebble Beach",
        "Beach",
        "A beach area where you can spend time by the water.",
        "Swimming, relaxing, and enjoying the view",
        "images/pebblebeach.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849872.6545845504!2d-82.79481133437503!3d33.68785270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f78718e889b7e7%3A0x79ddbbcb77e3c670!2sPebble%20Beach!5e0!3m2!1sen!2sus!4v1790537872907!5m2!1sen!2sus"
    )
];


const vacationList = document.getElementById("vacation-list");
const modal = document.getElementById("vacation-modal");
const closeModal = document.getElementById("close-modal");


vacations.forEach((vacation) => {
    vacationList.appendChild(vacation.getCard());
});


closeModal.onclick = () => {
    modal.style.display = "none";
};


window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};