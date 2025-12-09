let isDark = localStorage.getItem("isDark") === "true";
// Checkes if user previously saved dark mode in browser storage (Equal value and equal type)
body.style.backgroundColor = isDark ? dark : light; // Sets background color (if true uses dark mode) (Short for if-else)
// head.style.backgroundColor = isDark ? eleDark : eleLight;

function theme() {
    if (isDark) {
        body.style.backgroundColor = light; // Changes the background color of the page
        // head.style.backgroundColor = eleLight;
        isDark = false; // Updates isDark
        localStorage.setItem("isDark", "false"); // Saves theme in local storage
    } else {
        body.style.backgroundColor = dark; // Changes the background color of the page
        // head.style.backgroundColor = eleDark;
        isDark = true; // Updates isDark
        localStorage.setItem("isDark", "true"); // Saves theme in local storage
    }
}