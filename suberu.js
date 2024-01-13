let mnubtm = document.getElementById("mnustck");

let mnuarrive = mnubtm.addEventListener("click", ()=>{
    const drop = document.querySelector(".mnucnt");

    drop.classList.toggle("active")
})