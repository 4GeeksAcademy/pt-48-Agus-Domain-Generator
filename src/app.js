import "bootstrap";
import "./styles.css";
import "./index.html";

let arruno = [];
function obtenerPrimera() {
  const vaya = document.getElementById("primeras").value;
  arruno.push(vaya);
  document.getElementById("primeras").value = "";
  document.querySelector("#agregado").innerHTML = arruno;
}

let arrdos = [];
function obtenerSegunda() {
  const vaya = document.getElementById("segundas").value;
  arrdos.push(vaya);
  document.getElementById("segundas").value = "";
  document.querySelector("#agregado2").innerHTML = arrdos;
}

let arrtres = [];
function obtenerDominio() {
  const vaya = document.getElementById("terceras").value;
  arrtres.push(vaya);
  document.getElementById("terceras").value = "";
  document.querySelector("#agregado3").innerHTML = arrtres;
}

var input = document.getElementById("primeras");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("first").click();
  }
});

var input2 = document.getElementById("segundas");

input2.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("second").click();
  }
});

var input3 = document.getElementById("terceras");

input3.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("third").click();
  }
});

let agregados = ["#agregado", "#agregado2", "#agregado3"];
function limpiarDominio() {
  document.querySelector("#agregado").innerHTML = "";
  document.querySelector("#agregado2").innerHTML = "";
  document.querySelector("#agregado3").innerHTML = "";
  document.querySelector("#agrupeishon").innerHTML = "";
  arruno.splice(0);
  arrdos.splice(0);
  arrtres.splice(0);
  agrupar.splice(0);
}

const agrupar = [];

function agruparOpciones() {
  for (let i = 0; i < arruno.length; i++) {
    for (let j = 0; j < arrdos.length; j++) {
      for (let k = 0; k < arrtres.length; k++) {
        agrupar.push(`${arruno[i]}${arrdos[j]}${arrtres[k]}`);
      }
    }
  }
  //  document.querySelector("#agrupeishon").innerHTML = agrupar;
  const ul = document.createElement("ul");

  agrupar.forEach(combinaciones => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = combinaciones;
    a.href = "#";
    li.appendChild(a);
    ul.appendChild(li);
  });

  document.querySelector("#agrupeishon").appendChild(ul);
}
