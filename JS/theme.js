function theme() {
    const body = document.body
    const dark = "#1E1E1E"
    const light = "#FFFF"
    let currentColor = body.getPropertyValue('background-color')
    if (currentColor == dark ) {
        console.log(1)
        body.style.backgroundColor = light
    }
    if(currentColor == light) {
        console.log(2)
        body.style.backgroundColor = dark
    }
}