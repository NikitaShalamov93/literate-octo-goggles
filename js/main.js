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

/* ГОРИЗОНТАЛЬНЫЙ СЛАЙДЕР */ 

function downSlider() { 

let slideIndex = 1, 

//Текущий слайд 

slides = document.getElementsByClassName('slider__item'), 

//Получаем псевдомассив слайдов 



//Получаем контейнер слайдера 

prev = document.querySelector('.slider__link_left'), 

//Стрелка влево 

next = document.querySelector('.slider__link_right'); 

//Стрелка вправо 



//Основная функция слайдера 

function horizontalSlider(n) { 

if (n > slides.length) { 

//Возврат к первому слайду после перебора всего псевдомассива слайдов 

slideIndex = 1; 

}; 

if (n < 1) { 

//Возврат в конец псевдомассива после перебора всего псевдомассива слайдов в оратном направлении 

slideIndex = slides.length; 

}; 

//Скрытие через цикл всех слайдов 

for (let i = 0; i < slides.length; i++) { 
slides[i].style.display = 'none'; 

}; 

//Установка видимости текущего слайда 
slides[slideIndex - 1].style.display = 'flex'; 

}; 

//Функции увеличения индекса активного слайда. 

//Получают данные (n) из обработчика событий prev и next 

function plusSlides(n) { 

horizontalSlider(slideIndex += n); 

}; 

function currentSlide(n) { 

horizontalSlider(slideIndex = n); 

}; 

//Переключение на один слайд назад по клику 

prev.addEventListener('click', function (e) { 
e.preventDefault(); 
plusSlides(1); 

}); 

//Переключение на один слайд вперед по клику 

next.addEventListener('click', function (e) { 
e.preventDefault(); 
plusSlides(1); 

}); 

//Запуск слайдера 

horizontalSlider(slideIndex); 

}; 

downSlider();



/* ПЛАВНАЯ ПРОКРУТКА */

function animate(draw, duration) {

let start = performance.now();

requestAnimationFrame(function animate(time) {

let timePassed = time - start;

if (timePassed > duration) {

timePassed = duration;

}

draw(timePassed);

if (timePassed < duration) {

requestAnimationFrame(animate);

}

});

};

let navigation = document.getElementsByTagName('nav')[0];

navigation.addEventListener('click', function(event) {
trigerMobileMenu();
event.preventDefault();

animate(function(timePassed) {

let target = event.target,

section = document.getElementById(target.getAttribute('href').slice(1));

window.scrollBy(0, section.getBoundingClientRect().top / 15 - 1);

}, 1200);

});