document.getElementById("logbtn").onclick = function(){
    let login = document.getElementById("logInput").value;
    let password = document.getElementById("psswrdInput").value;
    if (document.getElementById("logInput").value == login && document.getElementById("psswrdInput").value == password){
        window.open("listaZakupów.html", "_self")
    }
}
