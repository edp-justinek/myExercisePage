let text = "Hallo";
let count = 0;
let chars = "";

for(i = 0; i< text.length; i++){

    chars = i;
    for(l = ""; l< text.length; l++){
        if(i ==l){
            chars += ++count;
            console.log(chars);
        }else{console.log("TEST");
    }
    }
}
