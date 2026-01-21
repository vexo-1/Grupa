if (localStorage.getItem("lista") == null){
    let lista = ["Butelka", "Talerz"]
    localStorage.setItem("lista", JSON.stringify(lista))
}
let lista1 = JSON.parse(localStorage.getItem("lista"))
let li
for (let i = 0; i < lista1.length; i++){
    li = document.createElement("li");
    li.innerText = lista1[i]
    let btn = document.createElement("button")
        btn.innerText = "Usuń"
        btn.setAttribute('class', "usuń");
        li.appendChild(btn)
    document.getElementById("list").appendChild(li);
}
document.getElementById("li1").onclick = function() { // Funkcja wywołana gdy przyciśnięty przycisk z id "li1"
    let li1 = prompt("Dodaj rzecz do listy"); // Zmienna tworząca prompt do wpisania elementu do listy
    if (li1 !== null && li1 !== "") { // Warunek sprawdzający czy urzytkownik wpisał coś w prompt
        li = document.createElement("li"); // 
        let li1Node = document.createTextNode(li1); // 
        li.appendChild(li1Node); // 
        let btn = document.createElement("button")
        btn.innerText = "Usuń"
        li.appendChild(btn)
        document.getElementById("list").appendChild(li); //
        lista1.push(li1)
        localStorage.setItem("lista", JSON.stringify(lista1))
    }
}