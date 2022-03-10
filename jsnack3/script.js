// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let sum = 0;
let valid = false;


do {
    let number = prompt("Inserisci numero di 4 cifre");
    const array = number.split("");
    if (array.length == 4 && !isNaN(parseInt(number))) {
        valid = true;

        for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);
        }
    }
    else { alert("Il numero inserito non è di 4 cifre oppure non hai inserito un numero") }


} while (!valid);
alert(sum);