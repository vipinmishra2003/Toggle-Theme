const togglebtn=document.querySelector(".tbn");
const body=document.body;
 function toggletheme()
 {
    if(body.classList.contains("dark-mode")){
       body.classList.remove('dark-mode');
       togglebtn.textContent="light mode";
   }
   else{
    body.classList.add('dark-mode');
    togglebtn.textContent="light mode";
   }
 }
togglebtn.addEventListener("click",toggletheme)