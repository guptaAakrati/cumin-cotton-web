humburg = document.querySelector('.humburg');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.right-navbar');
leftnav = document.querySelector('.left-navbar');


  humburg.addEventListener('click', ()=>{
       rightnav.classList.toggle('responsive');
       leftnav.classList.toggle('responsive');
  })

  
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    leftnav.classList.toggle('v-class');
    // navbar.classList.toggle('h-nav');
})