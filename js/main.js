const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");

function trigerMobileMenu() {
        console.log("function is work!");
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("hidden");
}

burger.addEventListener("click", function(){
    trigerMobileMenu();
})