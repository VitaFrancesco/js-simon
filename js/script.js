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
// inserire il contenuto in p con id messade visualizzando il numero di numeri corretti

// funzione timer
function timer () {
    const countdown = document.getElementById('countdown')
    let seconds = 30;
    const time = setInterval(function () {
        seconds -= 1;
        countdown.innerHTML = seconds;
        if (seconds === 0) {
            clearInterval(time);
        }
    }, 1000)

    
}

timer()