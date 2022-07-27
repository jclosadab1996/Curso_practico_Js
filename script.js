// const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const parrafito = document.querySelector(".parrafito");
// const id = document.querySelector("#id");

// console.log({ h1 });
// console.log({ h1, p, parrafito, id });

// h1.innerHTML = "Patito <br> Feo";
// h1.innerText = "Patito <br> Feo";
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');

// h1.classList.add("rojo");
// h1.classList.remove("verde");
// // h1.classList.toggle('verde');
// // h1.classList.contains('verde');

// input.value = "456";

// const img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://static.platzi.com/static/images/conf/logo_black@2x.png"
// );
// console.log(img);

// pid.innerHTML = "";
// pid.appendChild(img);
const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

// function btnOnClick() {
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//   // console.log({event});
//   event.preventDefault();
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener("click", sumarInputValues);

function sumarInputValues(event) {
  // console.log({event});
  // event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}
