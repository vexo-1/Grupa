const body = document.body
const dark = "#1E1E1E"
const light = "#FFFF"

function theme() {
    localStorage.removeItem("isDark")
localStorage.setItem("isDark", "false")
    let isDark = localStorage.getItem("isDark")
    console.log(isDark)
    localStorage.setItem("isDark", "true")
    if (isDark) {
        body.style.backgroundColor = light
        localStorage.setItem("isDark", "false")
    } else{
        body.style.backgroundColor = dark
        localStorage.setItem("isDark", "true")
    }
}