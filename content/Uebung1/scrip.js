document.addEventListener("DOMContentLoaded", (event) => {

    addClickFunction('confirm',countChars);
    addClickFunction('wordAscending',sortLettersAscending);
    // addClickFunction('wordDescending',sortLettersDescending);
    // addClickFunction('NumberAscending',sortNumbersAscending);
    // addClickFunction('NumberDescending',sortNumbersDescending);
});

function countChars() {
    const inputString = document.querySelector('#textInput').value;
    const charList = inputString.toLowerCase().split('');

    arrayMagic(charList);
    mapMagic(charList);
}

function addClickFunction(elementId, func) {
    let element = document.getElementById(elementId);
    element.addEventListener("click", func);
}

//Wörter zählen Map Logik
let loopCounterMap1 = 0;
function mapMagic(charList){
    //Hier wird die funktion mapMagic initialisiert und der input Parameter charList mitgegeben
    let resultMap = {};

    for(let char of charList){
        //char = char.toLowerCase();
        if(resultMap[char] == null){
            resultMap[char] = 1;
        } else {
            resultMap[char]++;
        }
        loopCounterMap1++;
    }
    for(let key in resultMap){

        displayOutput("outputMap", key,  resultMap[key]);
        loopCounterMap1++;
    }
    displayOutputCounterMap("outputCounterMap", loopCounterMap1);
}


let countLoop = 0;
//Buchstaben zählen 2 For Schleifen
function arrayMagic(charList){
    //Hier wird die funktion arrayMagic  initialisiert und der input Parameter charList mitgegeben
    const charSet = new Set(charList);
    //Speichert jeden Wert nur einmal
    for(let char of charSet){
        let charCounter = 0;

        for(let checkChar of charList){
            if(char == checkChar){
                charCounter++;
            }
            countLoop++;
        }
        displayOutput("output", char, charCounter);
         displayOutputCounter("outputCounter", countLoop);
        sortLettersAscending( charCounter);
    }

}

//Ausgabe
 function displayOutputCounter(outputCounter, countLoop){
     document.getElementById(outputCounter).innerHTML = `Anzahl  Loop:${countLoop}<br> <hr>`;
 }
 function displayOutputCounterMap(outputCounterMap, loopCounterMap){
    document.getElementById(outputCounterMap).innerHTML = `Anzahl  Map Loop:${loopCounterMap} <br>`;
 }
function displayOutput(domId, char, charCounter){
    document.getElementById(domId).innerHTML += `Output: ${char} Amount: ${charCounter} <br>`;
}



//Sort
function sortLettersAscending(charCounter){
    let bubbleSort = (charCounter) => {
        let len = charCounter.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (charCounter[j] > charCounter[j + 1]) {
                    let tmp = charCounter[j];
                    charCounter[j] = charCounter[j + 1];
                    charCounter[j + 1] = tmp;
                }
            }
        }
        return charCounter;
    };
    document.getElementById("demo").innerHTML += `${charCounter}`;
}
//
// function sortLettersDescending(demo, char){
//     char.sort(function(a, b) {
//         return a - b;
//     });
//
//     document.getElementById('demo').innerHTML = char;
// }
//
// function sortNumbersAscending(charCounter){
//     charCounter.sort(function(a, b) {
//         return a - b;
//     });
//
//     document.getElementById('demo').innerHTML = charCounter;
// }
//
// function sortNumbersDescending(demo, charCounter){
//     console.log("hallogad");
//     charCounter.sort(function(a, b) {
//         return a - b;
//     });
//
//
//     document.getElementById('demo').innerHTML = "TEst funkt";
//}


