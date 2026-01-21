if (localStorage.getItem("lista") == null){
    let lista = ["Sprzątanie", "Zakupy"]
    localStorage.setItem("lista", JSON.stringify(lista))
}
let lista1 = JSON.parse(localStorage.getItem("lista"))
let li
for (let i = 0; i < lista1.length; i++){
    li = document.createElement("li");
    li.id = "lista-" + i;
    li.innerText = lista1[i]
    let btn = document.createElement("button")
        btn.id = "del-" + i;
        btn.innerText = "Usuń";
        btn.setAttribute('class', "usuń");
        li.appendChild(btn)
    document.getElementById("list").appendChild(li);
}
document.getElementById("li1").onclick = function() { // Funkcja wywołana gdy przyciśnięty przycisk z id "li1"
    let li1 = prompt("Dodaj rzecz do listy"); // Zmienna tworząca prompt do wpisania elementu do listy
    if (li1 !== null && li1 !== "") { // Warunek sprawdzający czy urzytkownik wpisał coś w prompt
        li = document.createElement("li"); // Tworzy element listy w local storage
        let li1Node = document.createTextNode(li1); // tworzy miejce w elemencie listy na tekst
        li.appendChild(li1Node); // wstawia tekst do listy (jako dziecko)
        let btn = document.createElement("button") // Stworzemie Przycisku
        btn.innerText = "Usuń" // Z tekstem "Usuń"
        li.appendChild(btn) // wstawia przycisk jako element listy (jako dziecko listy)
        document.getElementById("list").appendChild(li); // dodaje cały element do listy w HTML
        lista1.push(li1) // zapisywanie w local storage, żeby nie zniknęło
        localStorage.setItem("lista", JSON.stringify(lista1)) // dodaje tekst do listy i zapisuje w local storage
    }
}

document.getElementById("del-" + i).onclick = function(){
    remove(document.getElementById("lista-" + 1))
}
