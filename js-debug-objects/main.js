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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];



const gasolineCars = cars.filter((auto) => auto.type.toLowerCase() === 'benzina');

const dieselCars = cars.filter((auto) => auto.type.toLowerCase() === 'diesel');

const otherCars = cars.filter((auto) => {
    return auto.type.toLowerCase() !== 'benzina' && auto.type.toLowerCase() !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);


// 1 - manca una virgola negli object
// 2 - arrow function scritta al contrario in gasoline cars
// 3 - parametro cars nell'arrow function non va bene perché poi utilizziamo auto, e giustamente non è definita perché lo legge come una variabile non come il valore dell'array ad ogni ciclo.
// 4 - nell'array di oggetti il valore dell type è scritto a volte con delle maiuscole e minuscole, per questo non prende tutte le benzina, perché non è scritto perfettamente uguale, devo convertire tutto in minuscolo prima di confrontarlo, questo vale anche negli altri filter.
// 5 - nel filtro per le auto diesel, essendo nell'arrow function che ritorna direttamente una sola espressione ovver fa solo un confronto allora le graffe si possono omettere
// 6 - invece di booliano or va usato and perché ora basta che solo una della due condizioni sia true allora passa con and devono essere true entrambe