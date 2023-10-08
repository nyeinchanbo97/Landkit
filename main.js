import './style.css'


// carousel 

const img = document.querySelector(".img");
const imgChangeBtn = document.querySelector("#img-change-btn");
const imgChangeBtn2 = document.querySelector("#img-change-btn-2");


imgChangeBtn.addEventListener("click",()=>{
  img.classList.toggle("opacity-0")
})

imgChangeBtn2.addEventListener("click",()=>{
  img.classList.toggle("opacity-0")
})



// hidden menu 

const hiddenMenuBtn = document.querySelector("#hidden-menu-btn");
const hiddenMenu = document.querySelector("#hidden-menu");
const fixedMenuBtn = document.querySelector("#fixed-menu-btn");


hiddenMenuBtn.addEventListener("click",()=>{
  hiddenMenu.classList.remove("opacity-0");
  hiddenMenu.classList.remove("pointer-events-none")
})

fixedMenuBtn.addEventListener("click",()=>{
  hiddenMenu.classList.add("opacity-0");
  hiddenMenu.classList.add("pointer-events-none")
})

hiddenMenu.classList.add("select-none");

// fixed menu 

const account = document.querySelectorAll(".account");
const accountChild = document.querySelectorAll(".account-child");

const accFun = (accIndex)=>{
  account[accIndex].addEventListener("click",()=>{
    accountChild[accIndex].classList.toggle("hidden") ;
  })
};

for (let i =0; i<5; i++){
 accFun(i);
};


// adding some forgotten class to fixed menu 
for (let i =0; i<5; i++){
  account[i].classList.add("hover:bg-gray-300","items-center","px-5","rounded");
  accountChild[i].classList.add("px-7")
  };

// price changing in home 8 

const priceBtn = document.querySelector("#price-btn");
const price = document.querySelector(".price");

let startVale = 29;
let endValue = 49;


priceBtn.addEventListener("click",()=>{
  if(priceBtn.checked){
    const counter = setInterval(() => {
      startVale += 1;
      price.textContent = startVale;
      if(startVale === 49){
        clearInterval(counter);
      }
    }, 20);
    startVale = 29;
  }else{
    const antiCounter = setInterval(() => {
      endValue -= 1;
      price.textContent = endValue;
      if(endValue === 29){
        clearInterval(antiCounter);
      }
    }, 20);
    endValue = 49;
  }
})






// window load and scroll 

const home1 = document.querySelector("#home1");
const home2 = document.querySelectorAll(".home2");
const home4 = document.querySelectorAll(".home4");
const home5 = document.querySelectorAll(".home5");



window.addEventListener("load",()=>{
 setTimeout(() => {
  home1.style.opacity = "1";
  home1.style.transform = "translateY(0px)";
 }, 500);
})


window.addEventListener("scroll",()=>{
  if(window.scrollY > 100){

    home2[0].style.opacity = "1";
    home2[0].style.transform = "translateY(0)";

    setTimeout(() => {
      home2[1].style.opacity = "1";
      home2[1].style.transform = "translateY(0)";
    }, 100);

    setTimeout(() => {
      home2[2].style.opacity = "1";
      home2[2].style.transform = "translateY(0)";
    }, 200);
  }

  if(window.scrollY > 700){

    home4[0].style.opacity = "1";
    home4[0].style.transform = "translateX(0)";

    setTimeout(() => {
      home4[1].style.opacity = "1";
      home4[1].style.transform = "translateX(0)";
    }, 100);

  }

  if(window.scrollY > 1200){

    home5[0].style.opacity = "1";
    home5[0].style.transform = "translateX(0)";

    setTimeout(() => {
      home5[1].style.opacity = "1";
      home5[1].style.transform = "translateX(0)";
    }, 100);

  }
 
})