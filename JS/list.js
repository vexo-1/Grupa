if (localStorage.getItem("lista") == null){
    let lista = ["Butelka", "Talerz"]
    localStorage.setItem("lista", JSON.stringify(lista))
}
let lista1 = JSON.parse(localStorage.getItem("lista"))
let li
for (let i = 0; i < lista1.length; i++){
    li = document.createElement("li");
    li.innerText = lista1[i]
    let but = document.createElement("button")
        but.innerText = "Usuń"
        but.setAttribute('class', "usuń");
        li.appendChild(but)
    document.getElementById("list").appendChild(li);
}
document.getElementById("li1").onclick = function() { // Funkcja wywołana gdy przyciśnięty przycisk z id "li1"
    let li1 = prompt("Dodaj rzecz do listy"); // Zmienna tworząca prompt do wpisania elementu do listy
    if (li1 !== null && li1 !== "") { // Warunek sprawdzający czy urzytkownik wpisał coś w prompt
        li = document.createElement("li"); // 
        let li1Node = document.createTextNode(li1); // 
        li.appendChild(li1Node); // 
        let but = document.createElement("button")
        but.innerText = "Usuń"
        li.appendChild(but)
        document.getElementById("list").appendChild(li); //
        lista1.push(li1)
        localStorage.setItem("lista", JSON.stringify(lista1))
    }
}
cont.addEventListener("click", (element) => {
    if (element.target.classList.contains("usuń")){
        console.log("usuń")
    }
})