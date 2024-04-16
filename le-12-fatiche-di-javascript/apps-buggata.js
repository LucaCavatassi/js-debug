const input = document.querySelector('input');

// ARRAY DOVREBBE ESSERE VUOTO NON NULL
// const array = null;
const array = [];

input.addEventListener('keypress', function(event) {
    if (event.code != 'Enter')    return;
    // INPUT NON DEVE RITORNARMI LENGTH DEL INPUT MA IL SUO VALORE
    // if (input.value.length == '') return;
    if (input.value == '') return;

    // QUI CI VUOLE PUSH NON ADD PER METTERLO IN UN ARRAY
    // array.add(input.value);
    array.push(input.value);


    const li = document.createElement('li');
    li.classList.add('list-group-item');
    // INNERTEXT NON TEXT
    // li.text = input.value;
    li.innerText = input.value;
    // CI VUOLE APPEND NON PUSH
    // document.querySelector('ul').push(li);
    document.querySelector('ul').append(li);

    // COUNTER = 0, DEVE AUMENTARE DEVE ESSERE NUM
    // let counter = "";
    let counter = 0;
    let item = array[0];
    // MAX DEVE ESSERE ZERO E LET SENNO AUMENTA DI 1 QUANDO ASSEGNATO AL COUNTER
    // const max   = 1;
    let max = 0;

    const elems = [];

    // VA AGGIUNTO LENGTH AD ARRAY
    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        // J DEVE AUMENTARE NON I
        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter)
                max  = counter;
                item = array[i];
            }
        }
        counter = 0;
    }


    // USO QUERY SELECTOR INVECE DI GET ELEMENT BY CLASS
    const alert = document.querySelector('.alert');

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    // CI VUOLE BACKTIC
    console.log(`${item} trovato ${max} volte`);
});