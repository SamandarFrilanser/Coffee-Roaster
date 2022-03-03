let menu = document.querySelector('.menu i'),
    nav = document.querySelector('.navbar__list'),
    close = document.querySelector('.bx-menu');

    let i = 0;
    menu.addEventListener('click',()=>{
        if(i == 0){
            nav.style.display = "block";
            i++;
            menu.className = "bx bx-x";
            
        }
        else{
            nav.style.display = "none";
            i = 0;
            menu.className = "bx bx-menu";
        }
    })