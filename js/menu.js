document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("closeNav").addEventListener("click", closeNav);
    document.getElementById("openNav").addEventListener("click", openNav);
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
});

/*
document.addEventListener("DOMContentLoaded", (event) => {
    addClickFunction('closeNav',openNav);
    addClickFunction('openNav',closeNav);
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function addClickFunction(elementId, func) {
    let element = document.getElementById(elementId);
    element.addEventListener("click", func);
}*/

