//Sobald das Dokument geladen ist, werden nachfolgende Funktionen ausgelöst
document.addEventListener("DOMContentLoaded", (event) => {
    //Buttons erhalten eine Funktion, die jeweils per klick ausgelöst wird
    addClickFunction('confirm',countChars);
    addClickFunction('wordAscending',sortLettersAscending);
    // addClickFunction('wordDescending',sortLettersDescending);
    // addClickFunction('NumberAscending',sortNumbersAscending);
    // addClickFunction('NumberDescending',sortNumbersDescending);
});
//Diese Funktion liest den Wert des Input Felds und wandelt alle Grossbuchstaben in kleine Buchstaben aus
//danach wird das Wort pro Buchstabe gesplitet zuletzt
// //wird dieser Liste an die beiden Funktionen "arrayMagic" und "mapMagic" weitergegeben
function countChars() {
    const inputString = document.querySelector('#textInput').value;
    const charList = inputString.toLowerCase().split('');
    arrayMagic(charList);
    mapMagic(charList);
    sortLettersAscending(charList);

}

function addClickFunction(elementId, func) {
    let element = document.getElementById(elementId);
    element.addEventListener("click", func);
}

//Wörter zählen Map Logik
let loopCounterMap1 = 0;
function mapMagic(charList){
    //Hier wird die funktion mapMagic initialisiert und der input Parameter charList mitgegeben
    //Objekt wird erstellt
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
    //Speichert jeden Wert nur einmal (jeder Wert ist eindeutig)
    const charSet = new Set(charList);
    //hier wird das erste element der Liste genommen und dann über die zweite For-Schleife mit allen Buchstaben
    //der Liste verglichen und gezählt sobald der Buchstabe gleich ist
    for(let char of charSet){
        let charCounter = 0;
        for(let checkChar of charList){
            if(char == checkChar){
                charCounter++;
            }
            countLoop++;
        }
        //Danach wird eine liste der Buchstaben und die zählungen der Buchstaben an die id "output" mitgegeben
        displayOutput("output", char, charCounter);
        //Schleifenzähler wird mit ID an Funktion "displayOutputCounter" weitergegeben
         displayOutputCounter("outputCounter", countLoop);
        sortLettersAscending( charSet);
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
function sortLettersAscending(charList){
    let charCounterArray = charList;
    console.log(charCounterArray);
    charCounterArray.sort(function(a, b) {
         return a - b;
     });

    document.getElementById('demo').innerHTML = charCounterArray;
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


