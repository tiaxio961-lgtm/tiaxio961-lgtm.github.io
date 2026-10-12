const toggleNav = document.getElementById("toggle-nav");

if (toggleNav) {
    toggleNav.onclick = () => {
        document.getElementById("nav-items").classList.toggle("hide-small");
    };
}

const practiceList = document.getElementById("practice-list");

const showLevel = (level) => {
    document.querySelectorAll(".practice-level").forEach((section) => {
        section.classList.toggle("hide-level", section.dataset.level !== level);
    });
};

const loadPractice = async () => {
    try {
        const response = await fetch(
            "https://tiaxio961-lgtm.github.io/csc242/projects/part7/practice.json"
        );

        if (!response.ok) {
            throw new Error("Could not load practice exercises.");
        }

        const exercises = await response.json();
        practiceList.innerHTML = "";

        exercises.forEach((exercise) => {
            const section = document.createElement("section");
            section.classList.add("practice-level");
            section.dataset.level = exercise.level;
            section.id = `exercise-${exercise._id}`;

            const heading = document.createElement("h2");
            heading.textContent = `${exercise.level} - ${exercise.title}`;
            section.append(heading);

            const image = document.createElement("img");
            image.src = exercise.img_name;
            image.alt = "Note-taking example";
            image.classList.add("practice-image");
            section.append(image);

            const text = document.createElement("p");
            text.classList.add("practice-text");
            text.textContent = exercise.text;
            section.append(text);

            const button = document.createElement("button");
            button.type = "button";
            button.classList.add("notes-button");
            button.textContent = "Show Important Notes";
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-controls", `notes-${exercise._id}`);
            section.append(button);

            const answer = document.createElement("div");
            answer.id = `notes-${exercise._id}`;
            answer.classList.add("answer", "hide-answer");

            const answerHeading = document.createElement("h3");
            answerHeading.textContent = "Important Notes";
            answer.append(answerHeading);

            const notes = document.createElement("ul");

            exercise.notes.forEach((note) => {
                const item = document.createElement("li");
                item.textContent = note;
                notes.append(item);
            });

            answer.append(notes);
            section.append(answer);

            button.onclick = () => {
                const hidden = answer.classList.toggle("hide-answer");
                button.textContent = hidden
                    ? "Show Important Notes"
                    : "Hide Important Notes";
                button.setAttribute("aria-expanded", String(!hidden));
            };

            practiceList.append(section);
        });

        showLevel("Easy");
    } catch (error) {
        practiceList.textContent =
            "Unable to load practice exercises. Please try again later.";
        console.log(error);
    }
};

if (practiceList) {
    document.getElementById("easy-button").onclick = () => showLevel("Easy");
    document.getElementById("normal-button").onclick = () => showLevel("Normal");
    document.getElementById("hard-button").onclick = () => showLevel("Hard");

    loadPractice();
}