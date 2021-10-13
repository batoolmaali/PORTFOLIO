  // navbar effects on scroll
  window.addEventListener("scroll",function(){
  const header=document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY >0);
 });

 //responsive navbar

const menuBtn=document.querySelector('.menu');
const nav=document.querySelector('.nav');
const navitem=document.querySelectorAll('.nav a');
menuBtn.addEventListener('click',()=>{
menuBtn.classList.toggle("active");
nav.classList.toggle("active");
});
navitem.forEach((elemnt)=>{
elemnt.addEventListener('click', ()=>{
menuBtn.classList.remove("active");
nav.classList.remove("active"); 
 })
});


//javascript for scroll to top button
const scrollBtn=document.querySelector('.scrollToTop-btn');
window.addEventListener("scroll",function(){ 
scrollBtn.classList.toggle("active",window.scrollY >500);

 });

 
//javascript for scroll back to top on click

scrollBtn.addEventListener('click', ()=>{
document.body.scrollTop=0;
document.documentElement.scrollTop=0
})

//javascript for reveal website elements on scroll
window.addEventListener("scroll",reveal);
function reveal(){
let reveal=document.querySelectorAll('.reveal'); 



for(let i=0; i<reveal.length; i++){
let windoHeight=window.innerHeight;
let revealTop=reveal[i].getBoundingClientRect().top;
let revealPoint=50;

if(revealTop < windoHeight - revealPoint){
reveal[i].classList.add('active');
}
}

}