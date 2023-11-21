//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
//ed emetto un messaggio in console con il numero della cella cliccata.

//Creo la sezione main e il button play
const mainContentEl = document.querySelector('main section.main-content');
const playButton = document.querySelector('button#btn');
let numberArrey = createArreyOfNumber (1, 100);

playButton.addEventListener('click', function() {
    for (let i = 1 ; i <= 100 ; i++){
        //creo un nuovo elemento quadrato, una nuova cella nel mio quadrato
        const currentSquare = getNewSquare();
    
        //aggiungo il numero alla casella
        let randomIndex = getRandomNumber (0, numberArrey.length -1);
        let randomNumber = numberArrey [randomIndex];
        numberArrey.slice(randomIndex, 1);
        currentSquare.innerHTML += `<span> ${randomIndex} </span>`;
        
        //quando clicco su una cella si colora di azzurro
        currentSquare.addEventListener('click', function(){
        currentSquare.classList.toggle('clicked');
        currentSquare.classList.add('bg-blue');
        console.log('hai selezionato la casella n.', randomIndex);
        });
        
        //aggiungo la cella con il numero nel DOM.
        mainContentEl.appendChild(currentSquare);
    }
});


//------ Functions ------

/**
 * Creates a new square element, an article with class 'item-square' and returns it to the caller.
 * 
 * @returns The new created square element.
 */ 
function getNewSquare() {
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
function getRandomNumber(minNumber, maxNumber) {
    return Math.floor( Math.random() *(maxNumber - minNumber + 1) + minNumber);
}

function createArreyOfNumber (start, end) {
    let myArrey = [];
    for (i = start ; i <= end ; i++) {
        myArrey.push(i);
    }
    return myArrey;
}

