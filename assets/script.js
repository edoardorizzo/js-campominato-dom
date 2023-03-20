/**
 * Al click sul pulsante start game generare una griglia di gioco
 */
const mainCont = document.querySelector('.main_container')
const startGame = document.querySelector('.start_game');
const resetGame = document.querySelector('.reset')

startGame.addEventListener('click', function(){
    mainCont.classList.remove('d-none')
})

resetGame.addEventListener('click', function(){
    mainCont.classList.add('d-none')
})

/**generare una griglia di 100 celle
 * selezioniamo il nodo della dom in cui inserire le 100 celle
 * ciclo n volte per generare le celle
 * rigenerare il markup
 */

const containerElm = document.querySelector('.container');
const maxCellNumber100 = 100;
const maxCellNumber81 = 81;
const maxCellNumber49 = 49;

for (let i = 0; i < maxCellNumber100; i++) {
    const cellMarkup = `<div class="cell">${i + 1}</div>`;
    containerElm.innerHTML += cellMarkup;
}

for (let i = 0; i < maxCellNumber81; i++) {
    const cellMarkup = `<div class="cell d-none">${i + 1}</div>`;
    containerElm.innerHTML += cellMarkup;
}

for (let i = 0; i < maxCellNumber49; i++) {
    const cellMarkup = `<div class="cell d-none">${i + 1}</div>`;
    containerElm.innerHTML += cellMarkup;
}

/**Ogni volta che cliccko su un quadrato la cella si colora di rosso
 * seleziono la cella che ha la classe cell e active
 * sulla cella selezionata aggiungo un event listener
 * recupero l'elemento della dom che ho cliccato e associo il colore rosso
 * al click su ogni cella, emetto un messaggio in console con il numero della cella cliccata.
 */

const cells = document.querySelectorAll('.cell');
for (let i = 0; i < cells.length; i++) {
    const thisCell = cells[i];
    console.log(thisCell);

    thisCell.addEventListener('click', function(){
        this.classList.toggle('bg-red')
        console.log(thisCell);
    })
}

/* Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

/*const selectLevel = document.querySelector('section');
const easyLevel = document.getElementById('easy');
const mediumLevel = document.getElementById('medium');
const hardLevel = document.getElementById('hard');

mediumLevel.addEventListener('click', function(){
    maxCellNumber81.classList.remove('d-none');
    maxCellNumber100.classList.add('d-none');
})*/