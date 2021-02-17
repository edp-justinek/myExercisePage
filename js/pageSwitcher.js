
document.addEventListener("DOMContentLoaded", function(event) {
    const siteUebung1 = document.getElementById("uebung1").addEventListener("click",changInnerObj1);
    const siteUebung2 = document.getElementById("uebung2").addEventListener("click",changInnerObj2);
    const siteUebung3 = document.getElementById("uebung3").addEventListener("click",changInnerObj3);
    const siteUebung4 = document.getElementById("uebung4").addEventListener("click",changInnerObj4);

    const innerObj = document.getElementById("innerObj")

     const objUebung1 = document.getElementById("obj1");
     const objUebung2 = document.getElementById("obj2");
     const objUebung3 = document.getElementById("obj3");
     const objUebung4 = document.getElementById("obj4");

    // const test1 ='<object data="./content/Uebung1/index.html"></object></object>';
    // const test2 ='<object data="./content/Uebung2/index.html"></object></object>';
    // const test3 ='<object data="./content/Uebung3/index.html"></object></object>';
    // const test4 ='<object data="./content/Uebung4/index.html"></object></object>';


 function changInnerObj1(){
     innerObj.style.display = "none";
     objUebung1.style.display = "block";
 }

 function changInnerObj2(){
     innerObj.style.display = "none";
     objUebung2.style.display = "block";
 }

 function changInnerObj3(){
     innerObj.style.display = "none";
     objUebung3.style.display = "block";
 }

 function changInnerObj4(){
     innerObj.style.display = "none";
     objUebung4.style.display = "block";
 }





});
