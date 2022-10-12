// **Snack1**
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
// **Snack2**
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.
// **Snack3**
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
// **Snack4 (Bonus)**
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi 
// fino a quando ne avrà tanti quanti l’altro.

const number = document.querySelector('#number1');
const button1 = document.querySelector('#btn1');
const btn1 = function(){
    const result1 = document.querySelector('#result1');
    if (number.value%2 == 0){
        result1.innerHTML = number.value
    }else{
        result1.innerHTML = (parseInt(number.value) + 1);
    }
    number.value = '';
}
button1.addEventListener('click', btn1);

const nameList = ['Leonardo','Valentina','Alessio','Simone','Fabio','Giada','Stefania','Lorenzo','Mattia','Marco','Andrea','Pietro','Gabriel','Simone','Clelia'];
const lastNameList = ['Pozzan','Zussino','Bonadonna','Carrabba','Martinelli','Volpin','Sperani','Castiglion','Fasulo','Sbrascia','Gallini','Brighella','Spanu','Allegra','Fradella'];

const button2 = document.querySelector('#btn2');
const btn2 = function(){
    const result2 = document.querySelector('#result2');
    result2.innerHTML = '';
    let nameListCopia = nameList.slice();
    let lastNameListCopia = lastNameList.slice();
    for( let i = 0; i < nameList.length && i < lastNameList.length; i++){
        let randomName = Math.floor(Math.random()*nameListCopia.length);
        let randomLastName = Math.floor(Math.random()*lastNameListCopia.length);
        const liElement = document.createElement('li');
        result2.append(liElement);
        liElement.innerHTML += (nameListCopia[randomName] + ' '+ lastNameListCopia[randomLastName])
        nameListCopia.splice(randomName,1);
        lastNameListCopia.splice(randomLastName,1);
    }

}
button2.addEventListener('click', btn2);

const button3 = document.querySelector('#btn3');
let arrayRandom = [];
const btn3 = function(){
    const result3 = document.querySelector('#result3-1');
    result3.innerHTML = '';
    const result4 = document.querySelector('#result3-2');
    result4.innerHTML = '';
    let numberMax = document.querySelector('#number3-1').value;
    let numbersToGenerate = document.querySelector('#number3-2').value;
    if (numbersToGenerate > numberMax){
        result3.innerHTML = 'Inserisci un massimo più grande'
    }else{
        for (let i = 1; i <= numbersToGenerate; i++) {
            let check = false;
            let generatedNumber = Math.floor(Math.random() * numberMax);
            for (let j = 0; j < arrayRandom.length; j++) {
                if (generatedNumber == arrayRandom[j]) {
                    check = true;
                    i--;
                }
            }
            if (!check) {
                arrayRandom.push(generatedNumber);
            }
        }
        let sum = 0;
        console.log(arrayRandom);
        for(let i = 0; i<arrayRandom.length; i++){
            if(i%2 != 0){
                sum += arrayRandom[i];
            } 
        }
        let text = arrayRandom.toString();
        result3.innerHTML = 'La lista creata è: ' + text;
        result4.innerHTML = 'La somme degli indici dispari è: ' + sum;
        arrayRandom =[];
    }
    
}
button3.addEventListener('click', btn3);

