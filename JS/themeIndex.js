const body = document.body; // Reference to the HTML body
const cont = document.getElementById("container") // Reference to the HTML div by id container
const bor = document.getElementById("header") // Reference to the HTML header by id header
const dark = "#1E1E1E"; // Saves color as variable
const light = "#e7e7e7"; // Saves color as variable
const eleLight = "#c9c6c6ff"; // Saves color as variable
const eleDark = "#494949ff"; // Saves color as variable
const borColD = "#949393ff";

let isDark = localStorage.getItem("isDark") === "true";
// Checkes if user previously saved dark mode in browser storage (Equal value and equal type)
body.style.backgroundColor = isDark ? dark : light; // Sets background color (if true uses dark mode) (Short for if-else)
cont.style.backgroundColor = isDark ? eleDark : eleLight; // Sets color of list background (if true uses dark mode) (Short for if-else)
bor.style.borderColor = isDark ? borColD : eleLight; // Sets color of header border (if true uses dark mode) (Short for if-else)


function theme() {
    if (isDark) {
        body.style.backgroundColor = light; // Changes the background color of the page
        cont.style.backgroundColor = eleLight; // Changes the background color of the container
        bor.style.borderColor = eleLight; // Changes the color of the header border
        isDark = false; // Updates isDark
        localStorage.setItem("isDark", "false"); // Saves theme in local storage
    } else {
        body.style.backgroundColor = dark; // Changes the background color of the page
        cont.style.backgroundColor = eleDark; // Changes the background color of the container
        bor.style.borderColor = borColD; // Changes the color of the header border
        isDark = true; // Updates isDark
        localStorage.setItem("isDark", "true"); // Saves theme in local storage
    }
}