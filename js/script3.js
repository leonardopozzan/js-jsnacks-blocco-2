// **Snack3**
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari


const button3 = document.querySelector('#btn3');
let arrayRandom = [];
const btn3 = function(){
    const result3 = document.querySelector('#result3-1');
    result3.innerHTML = '';
    const result4 = document.querySelector('#result3-2');
    result4.innerHTML = '';
    let numberMax = parseInt(document.querySelector('#number3-1').value);
    let numbersToGenerate = parseInt(document.querySelector('#number3-2').value);
    if (numberMax < numbersToGenerate){
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
        for(let i = 1; i<arrayRandom.length; i++){
            sum += arrayRandom[i];
            i++;
        }
        let text = arrayRandom.toString();
        result3.innerHTML = 'La lista creata è: ' + text;
        result4.innerHTML = 'La somme degli indici dispari è: ' + sum;
        arrayRandom =[];
    }
    document.querySelector('#number3-1').value = '';
    document.querySelector('#number3-2').value = '';
}
button3.addEventListener('click', btn3);
