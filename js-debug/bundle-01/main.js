/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
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


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]