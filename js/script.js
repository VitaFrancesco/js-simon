// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// *** funzione
// timer: a ogni secondo (serInterval) innerHTML variabile+1 impostata precedentemante a 0
// quando arriva a 30 fermo 

// *** funzione
// genera 5 numeri random e li pusha in un array se non è gia contenuto altrimenti rigenera
// visalizza i numeri contenuti nell'array in elementi html li (vedere fragment per visualizzarli assieme)

// nascondi timer
// cambia il contenuto di p con id instructions
// mostra il form per inviare dati
// all'invio disabled tutti gli imput e il button

// *** funzione che controlla quanti numeri sono corretti
// inserire il contenuto in p con id message visualizzando il numero di numeri corretti

// funzione timer (che ritorna true quando finisce)
function timer (timerTime) {
    let seconds = timerTime;
    countdown.innerHTML = seconds;
    const time = setInterval(function () {
        seconds -= 1;
        countdown.innerHTML = seconds;
        if (seconds === 0) {
            clearInterval(time);
            // porzione di codice specifica per questo progetto
            numberListGenerate.classList.add('d-none');
            answerForm.classList.remove('d-none');
            instructions.innerHTML = 'Quanti numeri ricordi?';
        }
    }, 1000)
}


// funzione che mi genera tot numeri compresi tra un minimo e un massimo diversi tra loro
function randomNumber (min, max, many) {
    const remembNumber = [];
    while (remembNumber.length < many) {
        const iNumber = parseInt((Math.random() * (max - min + 1)) + min);
        if (!remembNumber.includes(iNumber)) {
            remembNumber.push(iNumber);
        }
    }
    return remembNumber;
}


// funzione che mi genera tot elementi html passandogli tipo array e id dove aggiungerli
function generateHtml (type, array, id) {
    // Create a document fragment:
    const dFrag = document.createDocumentFragment();

    // Add li elements to the fragment:
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement(type);
        li.textContent = array[i];
        dFrag.appendChild(li);
    }

    // Add fragment to a list:
    document.getElementById(id).appendChild(dFrag);
}


// funzione che valida il contenuto di un array di input e restituisce gli input in un nuovo array
function validateForm(formInputArray) {
    const result = [];
    for (let i = 0; i < formInputArray.length; i++) {
      const currentElement = parseInt(formInputArray[i].value);
      if (
        !isNaN(currentElement) && currentElement >= 1 && currentElement <= 50 && !result.includes(currentElement)) {
        result.push(currentElement);
      };
    };
    return result;
}


// funzione che compara due array e restituisce quanti numeri hanno in comune (si da per scontato siano lunghi uguali e non abbiano numeri doppi)
function howManyCommon (array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            result.push( array1[i]);
        };
    };
    return result;
};


// **** processo **** //

// creo 5 numeri e li visualizzo in pagina
const remembNumber = randomNumber (1, 50, 5);
generateHtml ('li', remembNumber, 'numbers-list');

// parte il timer (e lo salvo in una costante)
// nascondo numeri generati e mostro il form
const answerForm = document.getElementById ('answers-form');
const numberListGenerate = document.getElementById('numbers-list');
const instructions = document.getElementById('instructions');
const countdown = document.getElementById('countdown');


timer (30);

// seleziono tutti gli input del form e li salvo in un array
const formElement = document.querySelectorAll('#answers-form input');

const finalMessage = document.getElementById('message')
// coontrollo che tutti gli input siano validi e stampo il risultato dell'utente
answerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //salvo i valori in input in una costante e li valido
    const userNumber = validateForm (formElement);

    //se valori inseriti non validi stampo messaggio
    if (userNumber.length !== remembNumber.length) {
        instructions.innerHTML = `Qualcosa non va, controlla i numeri inseriti`;
        return;
    }

    // funzione che controlla quanti numeri in comune
    const countCommonNum = howManyCommon(userNumber, remembNumber)

    //nascondo tutto e mostro il risultato
    answerForm.classList.add('d-none');
    instructions.classList.add('d-none');
    countdown.classList.add('d-none');

    finalMessage.innerText = `Hai indovinato ${countCommonNum.length} numeri. (${countCommonNum.join('; ')})`;
    finalMessage.classList.remove('d-none');
});












