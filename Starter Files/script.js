const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

//El primer elemento desaparece a los 4 seg
//iterar los elementos para que al final del último comienze de nuevo el primero 
setInterval(() => {
    i++

    const icon = document.querySelector(".section-1-icons .change");

    icon.classList.remove("change")

    if(i > icons.length) {
        icons[0].classList.add("change")
        i = 1
    } else {
        icon.nextElementSibling.classList.add("change")
    }

}, 3000)