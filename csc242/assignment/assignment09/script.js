// Tianao Xiong - CSCE 242 Assignment 9

const carsArea = document.getElementById("cars");

// Makes one car using multiple parameters
const createCar = (color, x, y) => {
    const car = document.createElement("div");
    car.classList.add("car");

    car.style.backgroundColor = color;
    car.style.left = `${x}px`;
    car.style.top = `${y}px`;

    const carTop = document.createElement("div");
    carTop.classList.add("car-top");

    const leftWheel = document.createElement("div");
    leftWheel.classList.add("wheel", "wheel-left");

    const rightWheel = document.createElement("div");
    rightWheel.classList.add("wheel", "wheel-right");

    car.append(carTop, leftWheel, rightWheel);
    carsArea.append(car);
};

// Loads the cars when the page opens
const loadCars = () => {
    const colors = [
        "#49c5c1",
        "#8f7bd9",
        "#ef8d72",
        "#a8cf58",
        "#7252b8",
        "#d58bd2"
    ];

    const numberOfCars = 8;

    for (let i = 0; i < numberOfCars; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Keeps the car inside the road
        const x = Math.random() * (carsArea.clientWidth - 55);

        // Randomly chooses the top or bottom lane
        const y = Math.random() < 0.5 ? 12 : 63;

        createCar(color, x, y);
    }
};

loadCars();