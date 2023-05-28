const toggle = document.querySelector('.toggle');
const links = document.querySelector('.nav-links');
const link = document.querySelector('.nav-link');

const link2 = document.querySelector('.nav-link2');
const link3 = document.querySelector('.nav-link3');

toggle.addEventListener('click', ()=>{
  toggle.classList.toggle('rotate');
  links.classList.toggle('active');
});


link.addEventListener('click', ()=>{
  links.classList.toggle('active');
});


link2.addEventListener('click', ()=>{
  links.classList.toggle('active');
});

link3.addEventListener('click', ()=>{
  links.classList.toggle('active');
});

