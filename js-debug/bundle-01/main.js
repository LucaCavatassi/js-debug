/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    // console.log(i);
}
// Questo è un ciclo for, in cui si va ad aumentare il numero i, finche i è maggiore di 5.
// L'errore logico e di sintassi sta nel i > 5, facendo partire il ciclo succederà che l'algoritmo procederà così - i = 0, 0 è maggiore di 5? NO, fine ciclo.


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
// Questa funzione dice che dato come parametro un numero, se questo numero diviso per 2 da resto 0 allora restituisci il numero +5.
// C'è l'operatore assegnazione quando bisognerebbe usare quello di identità, in quanto num % 2 = 0 non ha nessun senso logico.

// TEST
console.log(addIfEven(2));


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
// Questa funzione void, quindi senza nessun parametro definito, applica un ciclo for che fa cinque iterazioni. 
// Logicamente non vedo errori l'unica cosa è che sono state usate le "," invece che ";" nel ciclo for questo è un errore sintattico.

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function displayEvenNumbers (array) {
    let evenNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        }
    }
    return evenNumbers;
}
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(displayEvenNumbers(numbers));


// Questa funzione vuole far si che, dato un array pieno di numero venga ritornato un nuovo array con solo i numeri pari. 
// Errori sintattici e logici ne vedo diversi: 
// 1 - non è stato dato come parametro l'array da cui voglio estrapolare i numeri pari. 
// 2 - appunto l'array è stato messo dentro e va fuori, quindi sostituisco numbers con il parametro array.
// 3 - nel ciclo for è stata messa un ";" dopo l'incremento, questo è un errore sintattico.
// 4 - come nell' esercizio 2 è stato dato l'operatore di assegnazione che non ha senso in questo caso, e va messo l'operatore identità
// 5 - numbers diviso per due da resto 0, è sbagliato sintatticamente perché numbers di per se è un array, quindi e come se stessi dividendo per 2 l'intero array ma io devo farlo per i numeri all'interno di esso, quindi va messo "numbers[i]"
// 6 - nel ciclo for i < array.length - 1, il  - 1 non serve in quanto essendo minore no va mai oltre il penultimo numero nella lunghezza.
// 7 - quando pushiamo nell'array vuoto anche li non dobbiamo pushare l'iteratore i ma il numero corrispondente nell'array quindi array[i]
// 8 - il return è nel ciclo for
