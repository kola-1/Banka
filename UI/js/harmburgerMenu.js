const hbMenu = (function (){
    const container = document.querySelector(".js-menu");
    const first = document.querySelector(".js-first");
    const second = document.querySelector(".js-second");
    const third = document.querySelector(".js-third");
    const menu = document.querySelector(".js-dropdown-content");
    const body = document.querySelector("body");

    let toggleMenu = function (){
    first.classList.toggle("is-rotate-line1");
    second.classList.toggle("is-rotate-line2");
    third.classList.toggle("is-rotate-line3");
    menu.classList.toggle("is-shown");
    body.classList.toggle("is-fixed");
    }
    
    return{
        toggle: toggleMenu,
        container: container
    }
    })();
    
    
    hbMenu.container.addEventListener("click", hbMenu.toggle);