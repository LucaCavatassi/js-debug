/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
const myAge = 32;
function checkAge(number) {
    let message = '';
    if (number < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message;
}
checkAge(myAge);

// TEST
// console.log(checkAge(myAge));

// La funzione controlla l'età se minore di 18 stampa sei troppo giovane altrimenti stampa hai più di 18 anni.
// L'errore principale sta nell'aver messo le variabili all'interno della funzione vincolandole a quel parametro, ma le funzioni devono essere più assolutistiche possibili, quindi porto myAge fuori e do come parmetro un number, di conseguenza anche nell'invocazione assegno la variabile myage che contiene il number. Inoltre anche message è impostata come costante ma per poter cambiare deve essere una variabile let, e cosa fondamentale non ritorna niente questa funzione, metto come return il messaggio.


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// Questa funzione vuole dire quanti elementi ci sono nell'array definito al suo interno.
// L'errore principale è che "lenght" scritto così è sbagliato ma va scritto "length"


// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// Dato in prompt un numero dall'utente, questa funzione ti fa il log del numero + 12
// Il problema è che il prompt da sempre come dato in output una stringa quindi facendo stringa + number, otterremo sempre la concatenzione, quindi per risolvere, basta trasformare il prompt in number invece che string.


// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     if (addresses.includes(userEmail)) {
//         grantAccess = true;
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// La funzione controlla se l'email è contenuta nell'array, se è contenuta stampa acceso consentito, altrimenti stampa accesso negato. 
// L'errore sta nel fatto che usiamo una variabile flag che di base è false ma che poi diventa true se l'email è inclusa, la logica è giusta soltanto true e false sono valori booliani, e non vanno scritti fra gli apici. 


// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
} 
    checkAccessImproved();



// Fa la stessa cosa di Esercizio 4, mancava la graffa a chiudere in fondo e di nuovo la flag boolian valore scritto fra apici.























