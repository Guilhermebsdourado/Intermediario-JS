// const btnBoxA = document.getElementById('btn-box');

// const boxA = document.querySelector(".black") || document.querySelector(".blue");

// btnBoxA.addEventListener("click", function(){
//     btnBoxA.classList.toggle("black");
//     btnBoxA.classList.toggle("blue");
// });

const quadrado = document.querySelector(".quadrado");

quadrado.addEventListener("click", ()=> {
    const exsiteAzul = quadrado.classList.contains("azul");
    
    if(exsiteAzul){
        quadrado.classList.remove("azul");
    }else {
        quadrado.classList.add("azul");

    }
});




