const button = document.querySelector("button");
toast = document.querySelector(".toast");
progress = document.querySelector(".progress");

let timer1, timer2;

button.addEventListener("click",()=>{
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() =>{
        toast.classList.remove("active");
    },5000);

    timer2 = setTimeout(() =>{
        progress.classList.remove("active");
    },5300);
});