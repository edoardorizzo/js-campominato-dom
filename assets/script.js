/**
 * Al click sul pulsante start game generare una griglia di gioco
 */
const mainCont = document.querySelector('.main_container')
const startGame = document.querySelector('.start_game');
const resetGame = document.querySelector('.reset')

startGame.addEventListener('click', function () {
    mainCont.classList.remove('d-none')
})

resetGame.addEventListener('click', function () {
    mainCont.classList.add('d-none')
})

/**generare una griglia di 100 celle
 * selezioniamo il nodo della dom in cui inserire le 100 celle
 * ciclo n volte per generare le celle
 * rigenerare il markup
 */

const containerElm = document.querySelector('.container');
const maxCellNumber100 = 100;

for (let i = 0; i < maxCellNumber100; i++) {
    const cellMarkup = `<div class="cell">${i + 1}</div>`;
    containerElm.innerHTML += cellMarkup;
}

/**Ogni volta che cliccko su un quadrato la cella si colora di rosso
 * seleziono la cella che ha la classe cell e active
 * sulla cella selezionata aggiungo un event listener
 * recupero l'elemento della dom che ho cliccato e associo il colore rosso
 * al click su ogni cella, emetto un messaggio in console con il numero della cella cliccata.
 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati
abbiamo calpestato una bomba
la cella si colora di rosso e la partita termina.

Altrimenti
la cella cliccata si colora di azzurro
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */

const cells = document.querySelectorAll('.cell');
const bombNumbers = [];
let click = 0;
let youLose = false;

for (let i = 0; i < 16; i++) {
    let aNumber = Math.floor(Math.random() * 100 + 1);
    if (!bombNumbers.includes(aNumber)) {
        bombNumbers.push(aNumber);
    }

    console.log(aNumber);
}


for (let i = 0; i < cells.length; i++) {
    const thisCell = cells[i];
    if (bombNumbers.includes(i)) {
        thisCell.isBomb = 'true';
    }

    thisCell.addEventListener('click', function () {

        if (thisCell.isBomb === 'true') {
            thisCell.classList.add('bg-red');
            thisCell.innerHTML += ('<i class="fa-solid fa-bomb"></i>')
            alert(`ESPLOSIONE! Il tuo punteggio è di ${click} click`);
            document.location.reload();
        } else {
            thisCell.classList.add('bg-blue');
            click++;
        }

        if (click === cells.length - bombNumbers.length && !youLose) {
            alert('Nessuna bomba esplosa, hai vinto!');
        }
    });
}

