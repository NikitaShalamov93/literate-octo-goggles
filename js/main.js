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

/*Горизонтальный аккордион костыль */
let teamAccojs = () => {
    let teamList = document.querySelector(".team-acco");
    
    teamList.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target;
        const item = target.closest(".team-acco__item");
        const items = document.querySelectorAll(".team-acco__item");
        if(target.className === 'team-acco__trigger'){
            if (!item.classList.contains("active")) {
                for(let i=0; i<items.length;i++){
                    items[i].classList.remove("active");
                }
                item.classList.add("active");
            } else {
                item.classList.remove("active")
            }
        }
    })
};
teamAccojs();

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computed = getComputedStyle(items);


right.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }
  
  if (currentRight < 500) {
    items.style.right = currentRight + 940 + "px";
  }
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight > 0) {
    items.style.right = currentRight - 940 + "px";
  }
});