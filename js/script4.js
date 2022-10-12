// **Snack4 (Bonus)**
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi 
// fino a quando ne avrà tanti quanti l’altro.

let arrayRandom1 = [];
let arrayRandom2 = [];

const button4 = document.querySelector('#btn4');
const btn4 = function(){
    const result3 = document.querySelector('#result4-1');
    result3.innerHTML = '';
    const result4 = document.querySelector('#result4-2');
    result4.innerHTML = '';
    let numberMax = 100;
    let numbersToGenerate1 = parseInt(document.querySelector('#number4-1').value);
    let numbersToGenerate2 = parseInt(document.querySelector('#number4-2').value);
    let numbersToGenerateArray = [numbersToGenerate1,numbersToGenerate2];
    let mainArrayRandom = [arrayRandom1,arrayRandom2];
    if( numbersToGenerate1 > 100 || numbersToGenerate2 > 100){
        result3.innerHTML = 'Scegli un numero minore o uguale a 100'
    }else{
        for(let k = 0 , z = 0; k<numbersToGenerateArray.length && z<mainArrayRandom.length; k++, z++){
            for (let i = 1; i <= numbersToGenerateArray[k]; i++) {
                let check = false;
                let generatedNumber = Math.floor(Math.random() * numberMax);
                for (let j = 0; j < mainArrayRandom[z].length; j++) {
                    if (generatedNumber == mainArrayRandom[z][j]) {
                        check = true;
                        i--;
                    }
                }
                if (!check) {
                    mainArrayRandom[z].push(generatedNumber);
                }
            }
        }
    
        if(numbersToGenerate1 > numbersToGenerate2){
            for(let i =0; i<(numbersToGenerate1 - numbersToGenerate2); i++){
                arrayRandom2.push('-');
            }
        }else if(numbersToGenerate2 > numbersToGenerate1){
            
            for(let i =0; i<(numbersToGenerate2 - numbersToGenerate1); i++){
                arrayRandom1.push('/');
            }
        }
    
        let text1 = arrayRandom1.toString();
        let text2 = arrayRandom2.toString();
        let message1 = 'Lista 1: ' + text1;
        let message2 = 'Lista 2: ' + text2;
    
        result3.innerHTML = message1;
        result4.innerHTML = message2;
    
        arrayRandom1 =[];
        arrayRandom2 =[]; 
    }
    
}
button4.addEventListener('click', btn4);