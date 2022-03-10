// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

var a = parseInt(prompt("Inserisci numero di 4 cifre"));
var sum = 0;
if (!isNaN(a)) {
    while (a > 0) {
        sum += a % 10;
        a = Math.floor(a / 10);
    }
    alert("La somma delle cifre è: " + sum);
}
else {
    alert("Non hai inserito un numero!");
}