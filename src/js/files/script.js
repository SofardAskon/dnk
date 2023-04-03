// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const videoItems = document.querySelectorAll('.reviews__item-video');

videoItems.forEach(function(videoItem) {
  

  videoItem.addEventListener('click', function() {
    const videoId = videoItem.getAttribute('data-video');
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('height', videoItem.offsetHeight);
    iframe.setAttribute('width', videoItem.offsetWidth);
    videoItem.innerHTML = '';
    videoItem.appendChild(iframe);

   
  });
});

videoItems.forEach(function(videoItem) {
  const videoId = videoItem.getAttribute('data-video');
  // Get thumbnail
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnail = new Image();
  thumbnail.src = thumbnailUrl;
  thumbnail.onload = function() {
    videoItem.style.backgroundImage = `url(${thumbnailUrl})`;
  };
});


// if(window.screen.width <= 420) {
//   var metaViewport = document.querySelector('meta[name="viewport"]');
//   metaViewport.setAttribute('content', 'width=device-width, initial-scale=0');
// }


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header__menu").style.top = "20px";
  } else {
    document.querySelector(".header__menu").style.top = "50px";
  }
}

// const dotElements = document.querySelectorAll('.classes__list--dot');
// dotElements.forEach((dotElement) => {
//   const moreElement = dotElement.closest('.classes__more');
//   if (moreElement) {
//     moreElement.click();
//   }
// });


(function(){

let counter = document.querySelectorAll('.header__info-item-number-run');

let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
window.addEventListener('scroll', function(){  
  if( limit == counter.length ){ return; }
  
  for(let i = 0; i < counter.length; i++){
    let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
    let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
    if( pos < win && counter[i].dataset.stop === "0" ){
      counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
      let x = 0;
      limit++; // Счетчик будет запущен, увеличиваем переменную на 1
      let int = setInterval(function(){
        // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
        x = x + Math.ceil( counter[i].dataset.to / 50 ); 
        counter[i].innerText = x+'%';
        if( x > counter[i].dataset.to ){
          //Как только досчитали - стираем интервал.
          counter[i].innerText = counter[i].dataset.to+'%';
          clearInterval(int);
        }
      }, 60);
    }
  }
});
})();


document.addEventListener("formSent", function (e) {
	// Форма
	const currentForm= e.detail.form;
});


const elements = document.querySelectorAll('[data-package-title]');
const packageName = document.querySelector('#packageName');

elements.forEach((element) => {
  element.addEventListener('click', () => {
    const title = element.getAttribute('data-package-title');
    packageName.value = title;
  });
});


// if(document.querySelector('#reviews-1')) {
//     const videoContainer = document.querySelector('#reviews-1');
//     const videoThumbnail = document.querySelector('#reviews-1');
    
//     videoThumbnail.addEventListener('click', function() {
//       const iframe = document.createElement('iframe');
//       iframe.setAttribute('src', 'https://www.youtube.com/embed/hd-m57kspQY');
//       iframe.setAttribute('frameborder', '0');
//       iframe.setAttribute('allowfullscreen', '');
//       iframe.setAttribute('height', videoContainer.offsetHeight);
//       iframe.setAttribute('width', videoContainer.offsetWidth);
//       videoContainer.innerHTML = '';
//       videoContainer.appendChild(iframe);
//     });
//   }
// if(document.querySelector('#reviews-2')) {
//     const videoContainer = document.querySelector('#reviews-2');
//     const videoThumbnail = document.querySelector('#reviews-2');
    
//     videoThumbnail.addEventListener('click', function() {
//       const iframe = document.createElement('iframe');
//       iframe.setAttribute('src', 'https://www.youtube.com/embed/TEqS9G0yca8');
//       iframe.setAttribute('frameborder', '0');
//       iframe.setAttribute('allowfullscreen', '');
//       iframe.setAttribute('height', videoContainer.offsetHeight);
//       iframe.setAttribute('width', videoContainer.offsetWidth);
//       videoContainer.innerHTML = '';
//       videoContainer.appendChild(iframe);
//     });
//   }
// if(document.querySelector('#reviews-3')) {
//     const videoContainer = document.querySelector('#reviews-3');
//     const videoThumbnail = document.querySelector('#reviews-3');
    
//     videoThumbnail.addEventListener('click', function() {
//       const iframe = document.createElement('iframe');
//       iframe.setAttribute('src', 'https://www.youtube.com/embed/tQ2Fuwz_dC4');
//       iframe.setAttribute('frameborder', '0');
//       iframe.setAttribute('allowfullscreen', '');
//       iframe.setAttribute('height', videoContainer.offsetHeight);
//       iframe.setAttribute('width', videoContainer.offsetWidth);
//       videoContainer.innerHTML = '';
//       videoContainer.appendChild(iframe);
//     });
//   }

document.addEventListener("watcherCallback", function (e) {
	// Повна інформація від спостерігача
	const entry = e.detail.entry;
	// Спостерігаємий об'єкт
	const targetElement = entry.target;

  if(targetElement.classList.contains('whom')) {
      console.log(1);

      window.addEventListener("scroll", function() {
        let box = document.querySelector(".modern__image-img");
        let scrollPos = window.scrollY;
        let scaleValue = .2 + (scrollPos / 1500); // изменить значение 500 на нужное
        box.style.transform = "scale(" + scaleValue + ")";
      });
    
  }
});


