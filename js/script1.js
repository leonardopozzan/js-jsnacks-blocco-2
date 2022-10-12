// **Snack1**
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.


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



