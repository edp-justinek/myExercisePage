document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("confirm").addEventListener("click", countChars);
});

function countChars() {
    const inputString = document.querySelector('#textInput').value;
    const charList = inputString.toLowerCase().split('');
    const charSet = new Set(charList);

    for(let char of charSet){
        let charCounter = 0;

        for(let checkChar of charList){
            if(char == checkChar){
                charCounter++;
            }
        }

        const outputCountChars = "Output: " + char + " Amount: " + charCounter + "<br>";
        document.getElementById("output").innerHTML += outputCountChars;
    }



    let resultMap = {};
    for(let char of charList){
        char = char.toLowerCase();
        //resultMap[char] = 0;
        if(resultMap[char] == null){
            resultMap[char] = 1;
        } else {
            resultMap[char]++;
        }
    }
    for(let key in resultMap){
        console.log(key , " ", resultMap[key]);

        const outputMapChars =  resultMap[key];
        document.getElementById("outputMap").innerHTML += outputMapChars;
    }

    for(let value in resultMap){
        console.log(value , " ", resultMap[value]);

        const outputMapChars =  resultMap[value];
        document.getElementById("outputMap").innerHTML += outputMapChars;
    }



    function insertionSort(inputArr) {
        let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1;
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
        return inputArr;
    }

}
