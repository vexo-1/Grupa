document.getElementById("logbtn").onclick = function(){
    let login = document.getElementById("logInput").value;
    let password = document.getElementById("psswrdInput2").value;
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);

        if (document.getElementById("psswrdInput2").value !== document.getElementById("psswrdInput").value){
            let Mismatch = document.querySelector("#error");
            Mismatch.innerHTML = "Wprowadzone hasła, nie są takie same!";
            localStorage.removeItem("login");
            localStorage.removeItem("password");
        }
    window.open("listaZakupów.html", "_self")
}