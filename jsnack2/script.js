//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

let array = [];
let verify = true;
for (let i = 0; i < 6; i++) {
    number = parseInt(prompt("Inserisci un numero"));
    if (isNaN(number)) { alert("Non ha inserito un numero. Ricomincia!"); verify = false; break; }
    else {
        if (number % 2 != 0) {
            array.push(number);
        }
        console.log(number);
    }
}

if (verify) {
    document.getElementById("oddnumber").innerHTML = "Array con numeri dispari: " + array;
}