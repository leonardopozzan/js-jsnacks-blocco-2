// **Snack2**
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

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
