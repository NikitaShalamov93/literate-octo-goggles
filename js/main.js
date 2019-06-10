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
///метод меню от евгения
function showMobileMenu() {
   burger.classList.add("active");
   menu.classList.add("active");
   document.body.classList.add("hidden");
}

function hideMobileMenu() {
   burger.classList.remove("active");
   menu.classList.remove("active");
   document.body.classList.remove("hidden");
}
 // И при клике на *burger* вызывать *showMobileMenu()*
burger.addEventListener("click", function(){
   showMobileMenu();
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

// reviews открыть всплывающий текст

const openButton = document.querySelector("#openOverlay");
const successOverlay = openOverlay("Привет, <b>loftschool</b>!");

openButton.addEventListener("click", function() {
  document.body.appendChild(successOverlay);
});

function openOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const containerElement = document.createElement("div");
  containerElement.classList.add("container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", function() {
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}

function changeCurrentEq(index) {
  currentEq = index;
} // TouchScreen


// var hammer = new Hammer(document.documentElement);
// hammer.get('swipe').set({
//   direction: Hammer.DIRECTION_VERTICAL
// });
// hammer.on('swipeup', function () {
//   if (currentEq >= sections.length - 1) {
//     return;
//   }

//   if (!inScroll) {
//     onePageScroll(currentEq += 1);
//   }
// });
// hammer.on('swipedown', function () {
//   if (currentEq <= 0) {
//     return;
//   }

//   if (!inScroll) {
//     onePageScroll(currentEq -= 1);
//   }
// });
/////////////////////////////////////////////////////

////////////////////////////////////////////////////
// var hammer = new Hammer(document.documentElement);
// hammer.get('swipe').set({
//   direction: Hammer.DIRECTION_VERTICAL
// });
// hammer.on('swipeup', function () {
//   if (currentEq >= sections.length - 1) {
//     return;
//   }

//   if (!inScroll) {
//     onePageScroll(currentEq += 1);
//   }
// });
// hammer.on('swipedown', function () {
//   if (currentEq <= 0) {
//     return;
//   }

//   if (!inScroll) {
//     onePageScroll(currentEq -= 1);
//   }
// }); 

// mouseWheel

// document.addEventListener('wheel', function (event) {
//   function wheelDirection() {
//     var delta = event.deltaY,
//         direction = delta > 0 ? 'down' : 'up';
//     return direction;
//   }

//   function scrollToSection() {
//     var dir = wheelDirection();

//     if (dir === 'down') {
//       if (currentEq >= sections.length - 1) {
//         return;
//       }

//       if (!inScroll) {
//         onePageScroll(currentEq += 1);
//       }
//     } else {
//       if (currentEq <= 0) {
//         return;
//       }

//       if (!inScroll) {
//         onePageScroll(currentEq -= 1);
//       }
//     }
//   }

//   scrollToSection();
// }); 

// Bullets




var menuItems = document.querySelectorAll('.menu-acco__item'),
    active = document.getElementsByClassName('active');
Array.from(menuItems).forEach(function (item, i, menuItems) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      active[0].classList.remove('active'); // убрать класс active
    
      // изменить состояние класса active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('active');
  });
});