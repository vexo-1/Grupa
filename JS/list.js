document.getElementById("li1").onclick = function() { // Funkcja wywołana gdy przyciśnięty przycisk z id "li1"
    let li1 = prompt("Dodaj rzecz do listy"); // Zmienna tworząca prompt do wpisania elementu do listy
    if (li1 !== null && li1 !== "") { // Warunek sprawdzający czy urzytkownik wpisał coś w prompt
        let li = document.createElement("li"); // 
        let li1Node = document.createTextNode(li1); //
        li.appendChild(li1Node); //
        document.getElementById("1").appendChild(li); //
    }
}