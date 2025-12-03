const body = document.body;
const dark = "#1E1E1E";
const light = "#e7e7e7";

let isDark = localStorage.getItem("isDark") === "true"; // Stets isDark as true (Equal value and equal type)
body.style.backgroundColor = isDark ? dark : light; // Checkes if isDark is light or dark (Short for if-else)

function theme() {
    if (isDark) {
        body.style.backgroundColor = light;
        isDark = false;
        localStorage.setItem("isDark", "false");
    } else {
        body.style.backgroundColor = dark;
        isDark = true;
        localStorage.setItem("isDark", "true");
    }
}