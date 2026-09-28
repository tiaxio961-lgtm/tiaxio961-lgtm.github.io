const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

document.getElementById("toggle-nav").onclick = toggleNav;