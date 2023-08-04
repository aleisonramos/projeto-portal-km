const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwtich = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close")
      })

      modeSwtich.addEventListener("click", ()=>{
        body.classList.toggle("dark")
      })

var imgAtual = "Logo KM Sistemas.png";
var imgAnterior = "Logo KM branco.png";

function trocar(){
  document.getElementById('figura').src = imgAtual;
  let aux = imgAtual;
  imgAtual = imgAnterior;
  imgAnterior = aux;
}

