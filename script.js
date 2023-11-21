//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
//ed emetto un messaggio in console con il numero della cella cliccata.

//Creo la sezione main e il button play
const mainContentEl = document.querySelector('main section.main-content');
const playButton = document.querySelector('button#btn');

playButton.addEventListener('click', function(){
    for (let i = 1 ; i <= 100 ; i++){
        //creo un nuovo elemento quadrato, una nuova cella nel mio quadrato
        const currentSquare = getNewSquare();
    
        //inizializzo il suo contenuto per poterlo utilizzare anche piu' avanti
        const squareContent = i;
    
        //aggiungo il contenuto all'elemento che voglio popolare
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;
    
        //quando clicco su una di queste celle
        currentSquare.addEventListener('click', function(){
            // % metto o tolgo la classe css clicked allo stesso elemento
            currentSquare.classList.toggle('clicked');
            currentSquare.classList.add('bg-blue');
            console.log('hai selezionato la casella n.', );
        });
    
        // & aggiungo la cella completa all'elemento a cui voglio aggiungerla nel DOM.
        mainContentEl.appendChild(currentSquare);
    }
});



// ? ------ Functions ------ ?

/**
 * Creates a new square element, an article with class 'item-square' and returns it to the caller.
 *
 * @returns The new created square element.
 */ 
function getNewSquare(){
    const newSquareElement = document.createElement('article');
    newSquareElement.classList.add('item-square');
    return newSquareElement;
}

/** 
 * This function generates a new random number included within the given range.
 *
 * @param minNumber The minimum required number, included
 * @param maxNumber The maximum required number, included
 * @returns The new randomly generated number
 */
function getRandomNumber(minNumber, maxNumber){
    return Math.floor( Math.random() *(maxNumber - minNumber + 1) + minNumber);
}
