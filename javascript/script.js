const hamberger=document.getElementById("menuHamberger");
const nav_menu=document.getElementById("menu");
hamberger.addEventListener("click",function(){
    nav_menu.classList.toggle('active');
    this.classList.toggle("close");
});
//600,768,992,1200