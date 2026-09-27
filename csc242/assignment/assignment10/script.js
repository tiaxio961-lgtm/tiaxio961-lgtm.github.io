const mountains = {
    "Midlands Mountains Trail": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211636.8897716245!2d-81.39768485581754!3d34.02266670455233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a3e8868f47cb%3A0xfc61d7c6f77c7fe8!2sMidlands%20Mountains%20Trail!5e0!3m2!1sen!2sus!4v1790537647679!5m2!1sen!2sus",

    "Brice Hill": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211480.95113730695!2d-81.21766818359373!3d34.08515180000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a3f83091c523%3A0xf8c13d551fefa6ce!2sBrice%20Hill!5e0!3m2!1sen!2sus!4v1790537681542!5m2!1sen!2sus",

    "Little Mountain": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211227.08280010923!2d-81.55346938359374!3d34.1866628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f883607bb15225%3A0x4641fa56ed18a28a!2sLittle%20Mountain!5e0!3m2!1sen!2sus!4v1790537709341!5m2!1sen!2sus",

    "Johns Mountain Branch": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d843055.7132726886!2d-82.22563723437493!3d34.37117959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8857d043a08efacd%3A0x41750a989393e3fe!2sJohns%20Mountain%20Branch!5e0!3m2!1sen!2sus!4v1790537736442!5m2!1sen!2sus"
};

const beaches = {
    "West Dam Beach": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850149.380392476!2d-82.76926443437506!3d33.659856100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f829e729ba8da5%3A0x8042e5149c3a2f7a!2sWest%20Dam%20Beach!5e0!3m2!1sen!2sus!4v1790537770295!5m2!1sen!2sus",

    "Bomb Island": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d843055.7132726886!2d-82.22563723437493!3d34.37117959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f89ae5a7e14331%3A0xcaecb16c12c9e9f3!2sBomb%20Island!5e0!3m2!1sen!2sus!4v1790537811672!5m2!1sen!2sus",

    "Persimmon Beach": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d842628.7360264146!2d-83.38935353437502!3d34.413582500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88587df7adda340b%3A0x2b759bf23addd8b2!2sPersimmon%20Beach!5e0!3m2!1sen!2sus!4v1790537845723!5m2!1sen!2sus",

    "Pebble Beach": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849872.6545845504!2d-82.79481133437503!3d33.68785270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f78718e889b7e7%3A0x79ddbbcb77e3c670!2sPebble%20Beach!5e0!3m2!1sen!2sus!4v1790537872907!5m2!1sen!2sus"
};

const destinationType = document.getElementById("destination-type");
const destinationList = document.getElementById("destination-list");
const map = document.getElementById("map");

const showDestinations = () => {
    destinationList.innerHTML = "";
    map.innerHTML = "";

    let destinations;

    if (destinationType.value === "mountains") {
        destinations = mountains;
    } else if (destinationType.value === "beaches") {
        destinations = beaches;
    } else {
        return;
    }

    for (const destination in destinations) {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = destination;

        link.onclick = (event) => {
            event.preventDefault();
            showMap(destinations[destination]);
        };

        destinationList.appendChild(link);
    }
};

const showMap = (mapSource) => {
    map.innerHTML = `
        <iframe
            src="${mapSource}"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin">
        </iframe>
    `;
};

destinationType.onchange = showDestinations;