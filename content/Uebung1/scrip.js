//Sobald das Dokument geladen ist, werden nachfolgende Funktionen ausgelöst
document.addEventListener("DOMContentLoaded", (event) => {
    //Buttons erhalten eine Funktion, die jeweils per klick ausgelöst wird
    addClickFunction('confirm',countChars);
    addClickFunction('wordAscending',sortLettersAscending);
    addClickFunction('wordDescending',sortLettersDescending);
    addClickFunction('NumberAscending',sortNumbersAscending);
    addClickFunction('NumberDescending',sortNumbersDescending);

    //InputFeld enterTaste drücken
    let input = document.getElementById("textInput");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("confirm").click();
        }
    });



});
//liest den Wert des Input Felds und wandelt alle Grossbuchstaben in kleine Buchstaben
//anschliessend wird das Wort pro Buchstabe gesplitet
// Liste an die beiden Funktionen "arrayMagic" und "mapMagic" weitergegeben
//um es nur einmal zu definieren, habe ich den countZero hier gesetzt
// als globale Variable, damit ich sie nur einmal definieren muss
let countZero = 0;
function countChars() {
    const charList = getInputStringAsList();
    document.getElementById('output').innerHTML = '';
    document.getElementById('outputMap').innerHTML = '';
    arrayMagic(charList,countZero);
    mapMagic(charList,countZero);
}
function getInputStringAsList(){
    const inputString = document.querySelector('#textInput').value;
    return inputString.toLowerCase().split('');
}

function addClickFunction(elementId, func) {
    let element = document.getElementById(elementId);
    element.addEventListener("click", func);
}


//Wörter zählen Map Logik
let loopCounterMap1 = 0;
function mapMagic(charList,loopCounterMap1){
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
function arrayMagic(charList,countLoop){
    //funktion arrayMagic  initialisiert und der input Parameter charList mitgegeben
    //Speichert jeden Wert nur einmal (jeder Wert ist eindeutig)
    const charSet = new Set(charList);
    //hier wird das erste element der Liste genommen und dann über die zweite For-Schleife mit allen Buchstaben
    //der Liste verglichen und gezählt sobald der Buchstabe gleich ist
    for(let char of charSet){
        var charCounter = 0;
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
    }
}

//Ausgabe
 function displayOutputCounter(outputCounter, countLoop){
     document.getElementById(outputCounter).innerHTML = `Anzahl  Loop:${countLoop}<br>`;
 }
 function displayOutputCounterMap(outputCounterMap, loopCounterMap){
    document.getElementById(outputCounterMap).innerHTML = `Anzahl  Map Loop:${loopCounterMap} <br>`;
 }
function displayOutput(domId, char, charCounter){
    document.getElementById(domId).innerHTML += `Output: ${char} Amount: ${charCounter} <br>`;
}
function clearOutput(){
    document.getElementById('output').innerHTML = '';
    document.getElementById('outputMap').innerHTML = '';
}


//Sort
function sortLettersAscending(){
    //mit der clearOuput Funktion wird der angezeigt output geleert
    clearOutput();
    //die unsortierte list wird in eine variable gespeichert, damit diese dann sotiert werden kann
    //ist nicht zwingend nötig aber hilft der übersicht
    let notSortCharList = getInputStringAsList();
    //Mit der Funktion .sort() wird die Liste nach Buchstaben sortiert
    let sortedList = notSortCharList.sort();
    //Sortierten werte werden an die zähler-Funktionen zurück gegeben
    //let loopZero = 0;
    arrayMagic(sortedList,countZero);
    mapMagic(sortedList,countZero);
}

function sortLettersDescending(){
    clearOutput();
    let notSortCharList = getInputStringAsList();
    let sortedList = notSortCharList.sort();
    //Das selbe wie oben, hier wird nach dem sortieren mit .reverse() die ganze Liste gekehrt,
    // damit es somit absteigend sotiert ist
    let revSortedList = sortedList.reverse();
    //Die soriterte Liste wird an die funktionen arrayMagic und mapMagic mitgegeben,
    // dort werden dann die Anzahl Buchstaben gezählt pro Buchstabe und ausgegeben
    arrayMagic(revSortedList,countZero);
    mapMagic(revSortedList,countZero);
}

function sortNumbersAscending(){

    clearOutput();
    let notSortCharList = getInputStringAsList();
    let sortedList = notSortCharList.sort();
    arrayMagic(sortedList);
    mapMagic(sortedList);
}

function sortNumbersDescending(){

    clearOutput();
    let notSortCharList = getInputStringAsList();
    let sortedList = notSortCharList.sort();
    arrayMagic(sortedList);
    mapMagic(sortedList);

}





/*
Konstruktor
class Person {
    vorname;
    nachname;

    constructor(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
    }

    setNachname(nachname){
        this.nachname = nachname;
    }
}
const justine = new Person("Justine", "Kaesin")
console.log(justine);
justine.setNachname("Studer");
justine.nachname = "anderes";
console.log(justine);
*/

