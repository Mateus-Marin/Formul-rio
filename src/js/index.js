const verificado = document.querySelectorAll(".verificar");
const caixaDeEscrita =document.getElementById("form")


caixaDeEscrita.addEventListener("submit", function(e){

  verificado.forEach(input => {
    if(!input.value) {
      input.classList.add("vazio");
      input.nextElementSibling.style.display = "block";
    } else {
      input.classList.add("preenchido");
      input.nextElementSibling.style.display = "none";
    }
  });
  e.preventDefault()
})