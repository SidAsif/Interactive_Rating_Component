let num=document.getElementById("num");
let btn=document.querySelectorAll(".btn");

 btn.forEach((rating) =>{
   rating.addEventListener("click", () =>{
      num.innerHTML = rating.innerHTML;
   })
})
//page2 hidden
let container2 = document.getElementsByClassName("container2")[0];
container2.style.visibility="hidden"

let submit = document.getElementById("submit");
submit.addEventListener('click', () =>{
let container = document.getElementsByClassName("container")[0];
container.style.display="none"

// let footer = document.getElementsByClassName("foot")[0];
// footer.style.visibility="hidden"
 container2 = document.getElementsByClassName("container2")[0];
container2.style.visibility="visible"
    
})