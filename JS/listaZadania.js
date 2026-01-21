// Sprawdzenie czy w localStorage istnieje klucz "lista"
if (localStorage.getItem("lista") == null){
    // Jeśli nie istnieje, tworzymy domyślną tablicę z dwoma elementami
    let lista = ["Sprzątanie", "Zakupy"]
    // Zapisujemy tablicę w localStorage (konwertując ją na JSON)
    localStorage.setItem("lista", JSON.stringify(lista))
}
// Pobieramy listę z localStorage i konwertujemy z JSON na tablicę JavaScript
let lista1 = JSON.parse(localStorage.getItem("lista"))
// Deklaracja zmiennej dla elementu <li>
let li

// Funkcja do odświeżania (renderowania) całej listy
function odswiezListe() {
    // Wyczyść całą zawartość elementu o id "list" (usuń wszystkie <li>)
    document.getElementById("list").innerHTML = "";
    // Pobierz aktualną listę z localStorage (na wypadek zmian)
    lista1 = JSON.parse(localStorage.getItem("lista"));
    
    // Pętla przechodząca przez wszystkie elementy w tablicy lista1
    for (let i = 0; i < lista1.length; i++){
        // Tworzenie nowego elementu <li>
        li = document.createElement("li");
        // Ustawienie unikalnego id dla elementu listy (np. "lista-0", "lista-1")
        li.id = "lista-" + i;
        // Wstawienie tekstu z tablicy do elementu <li>
        li.innerText = lista1[i]
        // Tworzenie nowego przycisku
        let btn = document.createElement("button")
        // Ustawienie unikalnego id dla przycisku (np. "del-0", "del-1")
        btn.id = "del-" + i;
        // Ustawienie tekstu przycisku na "Usuń"
        btn.innerText = "Usuń";
        // Dodanie klasy CSS "usuń" do przycisku
        btn.setAttribute('class', "usuń");
        // Dodanie atrybutu data-index z numerem indeksu elementu w tablicy
        btn.setAttribute('data-index', i);
        
        // Dodanie funkcji obsługującej kliknięcie przycisku usuwania
        btn.onclick = function() {
            // Pobranie indeksu elementu z atrybutu data-index
            let index = this.getAttribute('data-index');
            // Usunięcie elementu z tablicy (1 element od pozycji index)
            lista1.splice(index, 1);
            // Zapisanie zaktualizowanej tablicy w localStorage (konwersja na JSON)
            localStorage.setItem("lista", JSON.stringify(lista1));
            // Ponowne wyrenderowanie całej listy z nowymi danymi
            odswiezListe();
        }
        
        // Dodanie przycisku jako dziecko elementu <li>
        li.appendChild(btn)
        // Dodanie całego elementu <li> (z tekstem i przyciskiem) do listy w HTML
        document.getElementById("list").appendChild(li);
    }
}

// Pierwsze wywołanie funkcji - wyświetlenie listy przy załadowaniu strony
odswiezListe();

// Dodanie funkcji obsługującej kliknięcie przycisku dodawania (id "li1")
document.getElementById("li1").onclick = function() {
    // Wyświetlenie okna prompt z prośbą o wpisanie nowego elementu
    let li1 = prompt("Dodaj rzecz do listy");
    // Sprawdzenie czy użytkownik wpisał coś (nie anulował i nie zostawił pustego pola)
    if (li1 !== null && li1 !== "") {
        // Dodanie nowego elementu na koniec tablicy
        lista1.push(li1)
        // Zapisanie zaktualizowanej tablicy w localStorage (konwersja na JSON)
        localStorage.setItem("lista", JSON.stringify(lista1))
        // Ponowne wyrenderowanie całej listy z nowym elementem
        odswiezListe();
    }
}










/*if (localStorage.getItem("lista") == null){
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
}*/