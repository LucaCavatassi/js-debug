// BARRA INPUT
const input = document.querySelector('input');

// ARRAY VUOTO
const array = [];

// AGGIUNGO LISTENER DI TASTIERA AD INPUT
input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter') return;
    if (input.value == '')     return;

    // PUSHO IL VALORE DELL'INPUT IN ARRAY VUOTO
    array.push(input.value);

    // APPENDO LI AD UL - CON LIST GROUP ITEM CLASS e INPUT VALUE COME INNER
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value;
    document.querySelector('ul').append(li);


    let counter = 0;
    let max     = 0;
    let item    = array[0];
    const elems = [];

    for (let i = 0; i < array.length; i++) {
        // ASSEGNO a VAL L'ELEMENTO INTERNO DELL'ARRAY
        let val = array[i];

        // SE L'ELEMENTO INTERNO DI ELEMS OVVERO L'ELEMENTO INTERNO DELL'ARRAY NON C'È
            // ALLORA L'ELEMENTO INTERNO DI ELEMS CHE È ARRAY [I] = 1
            // ALTRIMENTI
            // LO AUMENTO
        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

// PER J = i FINO  A CHE J é MINORE DI ARRAY LENGTH; J++
        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) {
                    max  = counter;
                    item = array[i];
                }
            }
        }
        counter = 0;
    }

    const alert = document.getElementsByClassName('alert')[0];

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`);
});