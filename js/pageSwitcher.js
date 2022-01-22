document.addEventListener("DOMContentLoaded", function(event) {
    new PageSwitcher();
    navigationLogic();
});

const pageContent = '{"pageContent":[ ' +
   '{"label":"Count Chars", "contentPath":"./content/Uebung1/exercise1.html"},' +
    '{"label":"ToDo", "contentPath":"./content/Uebung2/todo.html"},' +
    '{"label":"Rocket", "contentPath":"./content/Uebung3/game.html"},' +
    '{"label":"Calculator", "contentPath":"./content/Uebung4/calc.html"},' +
    '{"label":"Snake", "contentPath":"./content/Uebung5/snake.html"},' +
    '{"label":"Login", "contentPath":"./content/LoginRegister/login.html"},' +
    '{"label":"Registrieren", "contentPath":"./content/LoginRegister/register.html"}]}';

const obj = JSON.parse(pageContent);


function navigationLogic(){
    for (let i = 0; i < obj.pageContent.length; i++) {

        let pageLabel = obj.pageContent[i].label;
        let pagePath = obj.pageContent[i].contentPath;

        const li = document.createElement("li");
        const dFragPage = document.createDocumentFragment();
        li.textContent = pageLabel;
        li.setAttribute("data", pagePath );
        dFragPage.appendChild(li);
        document.getElementById("navId").appendChild(dFragPage);
    }
}

class PageSwitcher {
    storedLinkAttr = "data";

    constructor() {
        this.addNavigationEvents();
    }

    addNavigationEvents(){
        // Array.from(document.querySelector(".menu > .navigation.mainNav").children)
        //     .forEach(item => item.addEventListener("click", this.changeContent.bind(this)));


        const navContainer = document.querySelector(".menu > .navigation.mainNav");
        const navItems = navContainer.children;
        const navItemsAsList = Array.from(navItems);
        navItemsAsList.forEach(this.addLinkLogic.bind(this));

        // for(let item of navItems) {
        //     this.addLinkLogic(item);
        // }
    }

    addLinkLogic(navItem) {
        navItem.addEventListener("click", this.changeContent.bind(this))
    }

    changeContent(e) {
        document.getElementById("content")
            .setAttribute("data", e.target.getAttribute(this.storedLinkAttr));
    }
}

