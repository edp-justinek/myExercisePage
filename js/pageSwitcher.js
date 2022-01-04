
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("navCountChars").addEventListener("click",changInnerObj1);
    document.getElementById("navTodo").addEventListener("click",changInnerObj2);
    document.getElementById("navGame").addEventListener("click",changInnerObj3);
    document.getElementById("navCalculator").addEventListener("click",changInnerObj4);
    document.getElementById("navJS").addEventListener("click",changInnerObj5);

     let objUebung1 = document.getElementById("obj1");
     let objUebung2 = document.getElementById("obj2");
     let objUebung3 = document.getElementById("obj3");
     let objUebung4 = document.getElementById("obj4");
     let objUebung5 = document.getElementById("obj5");

 function changInnerObj1(){
     objUebung1.classList.add("displBlock");
     objUebung1.classList.remove("displNone");
     objUebung2.classList.add("displNone");
     objUebung2.classList.remove("displBlock");
     objUebung3.classList.add("displNone");
     objUebung3.classList.remove("displBlock");
     objUebung4.classList.add("displNone");
     objUebung4.classList.remove("displBlock");
     objUebung5.classList.add("displNone");
     objUebung5.classList.remove("displBlock");

 }

 function changInnerObj2(){
     objUebung1.classList.add("displNone");
     objUebung1.classList.remove("displBlock");
     objUebung2.classList.add("displBlock");
     objUebung2.classList.remove("displNone");
     objUebung3.classList.add("displNone");
     objUebung3.classList.remove("displBlock");
     objUebung4.classList.add("displNone");
     objUebung4.classList.remove("displBlock");
     objUebung5.classList.add("displNone");
     objUebung5.classList.remove("displBlock");
 }

 function changInnerObj3(){
     objUebung1.classList.add("displNone");
     objUebung1.classList.remove("displBlock");
     objUebung2.classList.add("displNone");
     objUebung2.classList.remove("displBlock");
     objUebung3.classList.add("displBlock");
     objUebung3.classList.remove("displNone");
     objUebung4.classList.add("displNone");
     objUebung4.classList.remove("displBlock");
     objUebung5.classList.add("displNone");
     objUebung5.classList.remove("displBlock");
 }

 function changInnerObj4(){
     objUebung1.style.display = "none";
     objUebung2.style.display = "none";
     objUebung3.style.display = "none";
     objUebung4.style.display = "block";
     objUebung5.style.display = "none";
 }

function changInnerObj5(){
    objUebung1.style.display = "none";
    objUebung2.style.display = "none";
    objUebung3.style.display = "none";
    objUebung4.style.display = "none";
    objUebung5.style.display = "block";
}

});
