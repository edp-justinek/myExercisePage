document.addEventListener("DOMContentLoaded", function(event) {
    new PageSwitcher();
});

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

    addLinkLogic(item) {
        item.addEventListener("click", this.changeContent.bind(this))
    }

    changeContent(e) {
        document.getElementById("content")
            .setAttribute("data", e.target.getAttribute(this.storedLinkAttr));
    }
}

