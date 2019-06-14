window.addEventListener('DOMContentLoaded', () => {

    // Мобильное меню
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".nav");

    function trigerMobileMenu() {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.classList.toggle("hidden");
    };

    burger.addEventListener("click", function() {
        trigerMobileMenu();
    });

    ///метод меню от евгения
    function showMobileMenu() {
        burger.classList.add("active");
        menu.classList.add("active");
        body.classList.add("hidden");
    };

    function hideMobileMenu() {
        burger.classList.remove("active");
        menu.classList.remove("active");
        document.body.classList.remove("hidden");
    };

    // Горизонтальный аккордион
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

    // Гоизонтальный слайдер
    function downSlider() { 
        let slideIndex = 1, 
            slides = document.getElementsByClassName('slider__item'), 
            prev = document.querySelector('.slider__link_left'), 
            next = document.querySelector('.slider__link_right'); 

        function horizontalSlider(n) { 

            if (n > slides.length) { 
                slideIndex = 1; 
            }
            
            if (n < 1) { 
                slideIndex = slides.length; 
            }
            
            for (let i = 0; i < slides.length; i++) { 
                slides[i].style.display = 'none'; 
            }; 
            
            slides[slideIndex - 1].style.display = 'flex'; 
        }; 

        function plusSlides(n) { 
            horizontalSlider(slideIndex += n); 
        }; 

        function currentSlide(n) { 
            horizontalSlider(slideIndex = n); 
        }; 

        prev.addEventListener('click', function (e) { 
            e.preventDefault(); 
            plusSlides(1); 
        }); 

        next.addEventListener('click', function (e) { 
            e.preventDefault(); 
            plusSlides(1); 
        }); 

        horizontalSlider(slideIndex); 
    }; 
    downSlider();

    // Плавная прокрутка
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

    // Меню (вертикальный аккордион)
    let menuItems = document.querySelectorAll('.menu-acco__item'),
        active = document.getElementsByClassName('active');
    
    Array.from(menuItems).forEach( item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            
        if (active.length > 0 && active[0] !== this) 
            active[0].classList.remove('active'); 
            
            this.classList.toggle('active');
        });
    });

    // Попап отзывы
    let reviewBtns = document.querySelectorAll('.review__view'),
        close = document.querySelector('.popup-review__close'), // добавить крестик и дать ему этот класс
        popupReview = document.querySelector('.popup-review');



    function reviewShow() {
        for(let i = 0; i < reviewBtns.length; i++) {
            reviewBtns[i].addEventListener('click', (e) => {
                e.preventDefault();
                popupReview.style.display = 'flex';
                
               
            });
        }
    };
    reviewShow();

    document.onkeydown = (e) => {
        if (e.keyCode === 27) {
            popupReview.style.display = 'none';
        }
    };

    document.body.addEventListener('click', function (e) {
        let target = e.target;
   
        if (target.closest('.popup-review-content') && !target.closest(close)) {
            e.stopPropagation();
        } else if (target.closest('.popup-review')) popupReview.style.display = 'none';	
        
         
    });
    
    
    
    ////////////////////////gggaga
    const overlay = document.querySelector('.popup-review');
    const closeBtn = document.querySelector('.popup-review__close');

closeBtn.addEventListener("click", function() {
    overlay.style.display = 'none';
  
});

document.body.addEventListener("click", function(e) {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    
  }
});
    
/////////////hidden
    
const body = document.body;

    // close.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     popupReview.style.display = 'none';
    // });


    // Отправка формы

    // const myForm = document.querySelector('#orderForm'),
//     template = document.querySelector('#modal-tmp').innerHTML,
//     orderButton = document.querySelector('#order-button'),
//     feedbacksCollection = document.querySelectorAll('.js-feedback-modal');

// const popup = createModal();

// for (var feedback of feedbacksCollection) {
//     feedback.addEventListener('click', function (e) {
//         var feedBackContent = this.previousElementSibling;
//         var feedBackUser = feedBackContent.previousElementSibling;

//         popup.clear();
//         popup.open();
//         popup.setContent(feedBackContent.innerHTML);
//         popup.setTitle(feedBackUser.innerHTML);
//         popup.setSmallBtn();
//     });
// }
// orderButton.addEventListener('click', function (event) {
//     event.preventDefault();

//     let formValid = validateForm(myForm);

//     if (formValid) {
//         const data = {
//             name: myForm.elements.name.value,
//             phone: myForm.elements.phone.value,
//             email: myForm.elements.email.value,
//             comment: myForm.elements.comment.value
//         };

//         const xhr = new XMLHttpRequest();
//         xhr.responseType = 'json';
//         xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
//         xhr.send(JSON.stringify(data));
//         xhr.addEventListener('load', () => {
//             console.log(xhr.response);
//         });
//         popup.clear();
//         popup.open();
//         popup.setContent('Сообщение отправлено');
//         popup.setBigBtn();

//     } else {
//         console.log('smth wrong!');
//         popup.clear();
//         popup.open();
//         popup.setContent('Сообщение не отправлено');
//         popup.setBigBtn();
//     };

// });

// function validateForm(myForm) {
//     let valid = true;
//     if (!myForm.checkValidity(myForm.elements.name)) {
//         valid = false;
//     }
//     if (!myForm.checkValidity(myForm.elements.phone)) {
//         valid = false;
//     }
//     if (!myForm.checkValidity(myForm.elements.email)) {
//         valid = false;
//     }
//     return valid;
// };
});






