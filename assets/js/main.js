const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    inserirResultado("Peso inválido!", false);
    return;
  }
  if (!altura) {
    inserirResultado("Altura Inválida!", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu imc é ${imc} (${nivelImc})`;

  inserirResultado(msg, true);
});

const getNivelImc = (imc) => {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imc < 18.5) return nivel[0];
  if (imc >= 18.5 && imc <= 24.9) return nivel[1];
  if (imc >= 25 && imc <= 29.9) return nivel[2];
  if (imc >= 30 && imc <= 34.9) return nivel[3];
  if (imc >= 35 && imc <= 39.9) return nivel[4];
  if (imc >= 40) return nivel[5];
};
const getImc = (peso, altura) => {
  let imc = peso / Math.pow(altura, 2);
  return imc.toFixed(2);
};

let criarP = () => {
  const p = document.createElement("p");
  return p;
};

let inserirResultado = (msg, isValid) => {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  let p = criarP();

  if (isValid) {
    p.classList.add("verde");
  } else {
    p.classList.add("red");
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
};
