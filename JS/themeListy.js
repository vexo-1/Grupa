let isDark = localStorage.getItem("isDark") === "true";
// Checkes if user previously saved dark mode in browser storage (Equal value and equal type)
body.style.backgroundColor = isDark ? dark : light; // Sets background color (if true uses dark mode) (Short for if-else)
body.style.color = isDark ? fontDark : fontLight;
cont.style.backgroundColor = isDark ? eleDark : eleLight; // Sets color of list background (if true uses dark mode) (Short for if-else)
head.style.borderColor = isDark ? borColD : eleLight; // Sets color of header border (if true uses dark mode) (Short for if-else)
head.style.backgroundColor = isDark ? headColDark : headColLight;



function theme() {
    if (isDark) {
        body.style.backgroundColor = light; // Changes the background color of the page
        body.style.color = fontLight;
        cont.style.backgroundColor = eleLight; // Changes the background color of the container
        head.style.borderColor = eleLight; // Changes the color of the header border
        head.style.backgroundColor = headColLight;
        isDark = false; // Updates isDark
        localStorage.setItem("isDark", "false"); // Saves theme in local storage
    } else {
        body.style.backgroundColor = dark; // Changes the background color of the page
        body.style.color = fontDark;
        cont.style.backgroundColor = eleDark; // Changes the background color of the container
        head.style.borderColor = borColD; // Changes the color of the header border
        head.style.backgroundColor = headColDark;
        isDark = true; // Updates isDark
        localStorage.setItem("isDark", "true"); // Saves theme in local storage
    }
}