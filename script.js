// アコーディオン
const acoordionMenu = document.getElementsByClassName("accordionMenu");
const acoordionMenuContent = document.getElementsByClassName("accordionMenuContent");
for(let i = 0; i < acoordionMenu.length; i++) {
  acoordionMenu[i].addEventListener('click',() => {
    acoordionMenuContent[i].classList.toggle('display');
  })
}
// タブ
const tab = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tabContent');
for(let i = 0; i < tabContent.length; i++) {
  tabContent[0].classList.remove('display');
  tab[i].addEventListener('click',() => {
    tabReset();
    tabContent[i].classList.remove('display');
  })
  tab[i].addEventListener('click',() => {
    tabColorChange(i);
  })
}
function tabReset() {
  for(let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.add('display');  
  }
}
function tabColorChange(number) {
  tab[0].style.background = "#AEBCEE";
  tab[0].style.color = "white";
  tab[0].style.cursor = "pointer"
  tab[1].style.background = "#AEBCEE";
  tab[1].style.color = "white";
  tab[1].style.cursor = "pointer"
  tab[2].style.background = "#AEBCEE";
  tab[2].style.color = "white";
  tab[2].style.cursor = "pointer"
  tab[number].style.background = "white";
  tab[number].style.color = "black";
  tab[number].style.cursor = "auto";
}
// モーダル
const modalMenu = document.getElementsByClassName('modalMenu');
const modalArea = document.getElementsByClassName('modalArea');
for(let i = 0; i < modalMenu.length; i++) {
  modalMenu[i].addEventListener('click',() => {
    modalArea[i].classList.add('display');
  })
  modalArea[i].addEventListener('click',() => {
    modalArea[i].classList.remove('display');
  })
}
// スライド
const slide = document.getElementById('slide');
const slideContent = document.getElementsByClassName('slideContent')[0];
const slideNext = document.getElementById('slideNext');
const slidePrev = document.getElementById('slidePrev');
const slideSetTime = 2000;

slideNextFnc();
slidePrevFnc();

function slideNextFnc() {
  slideNext.addEventListener('click',() => {
    const slideImage = slide.querySelectorAll('img');
    slideContent.style.transform = "translateX(-100%)";
    slideContent.style.transitionDuration =  slideSetTime + "ms";
    setTimeout(() => {
      slideContent.style.transform = "translateX(0%)";
      slideContent.style.transitionDuration = "0s";
      slideContent.appendChild(slideImage[0]);
      slideNextFnc();
    },slideSetTime)
  },{ once: true })
}
function slidePrevFnc() {
  slidePrev.addEventListener('click',() => {
    const slideImage = slide.querySelectorAll('img');
    slideContent.insertBefore(slideImage[slideImage.length - 1],slideContent.firstChild);
    slideContent.style.transform = "translateX(-100%)";
    slideContent.style.transitionDuration =  "0s";
    setTimeout(() => {
      slideContent.style.transform = "translateX(0%)";
      slideContent.style.transitionDuration =  slideSetTime + "ms";
    },0)
    setTimeout(() => {
      slidePrevFnc();
    },slideSetTime)
  },{ once: true })
}
// ローディング
const lording = document.getElementById('lording');
const lordingImage = lording.querySelectorAll('img');
const lordingRect = lording.getBoundingClientRect();
const lordingAgein = document.getElementById('lordingAgein');
window.addEventListener('scroll',() => {
  if(lordingRect.top - window.innerHeight < window.pageYOffset ){
    setTimeout(() => {
      lordingImage[0].classList.add("setAnimation");
    },100)
    setTimeout(() => {
      lordingImage[1].classList.add("setAnimation");
    },200)
    setTimeout(() => {
      lordingImage[2].classList.add("setAnimation");
    },300)
    setTimeout(() => {
      lordingImage[3].classList.add("setAnimation");
    },400)
    setTimeout(() => {
      lordingImage[4].classList.add("setAnimation");
    },500)
    setTimeout(() => {
      lordingImage[5].classList.add("setAnimation");
    },600)
    setTimeout(() => {
      lordingImage[6].classList.add("setAnimation");
    },700)
    setTimeout(() => {
      lordingImage[7].classList.add("setAnimation");
    },800)
  }
})
// ハンバーガーメニュー
const lineMenu = document.getElementById('lineMenu');
const line = document.getElementsByClassName('line');
const lineMenuContent = document.getElementById('lineMenuContent');

lineMenu.addEventListener('click', () => {
  for(let i = 0; i < line.length;  i ++) {
    line[i].classList.toggle('transform');
  }
  lineMenuContent.classList.toggle('transform');

})


