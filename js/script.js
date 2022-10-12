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

const nameList = ['Leonardo','Valentina','Alessio','Simone','Fabio','Giada','Stefania','Lorenzo','Mattia','Marco'];
const lastNameList = ['Pozzan','Zussino','Bonadonna','Carrabba','Martinelli','Volpin','Sperani','Castiglion','Fasulo','Sbrascia'];


