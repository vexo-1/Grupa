const body = document.body; //Reference to the HTML body
const dark = "#1E1E1E";
const light = "#e7e7e7";

let isDark = localStorage.getItem("isDark") === "true";
// Checkes if user previously saved dark mode in browser storage (Equal value and equal type)
body.style.backgroundColor = isDark ? dark : light; // Sets background color (if true uses dark mode) (Short for if-else)

function theme() {
    if (isDark) {
        body.style.backgroundColor = light; // Changes the background color of the page
        isDark = false; // Updates isDark
        localStorage.setItem("isDark", "false"); // Saves theme in local storage
    } else {
        body.style.backgroundColor = dark; // Changes the background color of the page
        isDark = true; // Updates isDark
        localStorage.setItem("isDark", "true"); // Saves theme in local storage
    }
}