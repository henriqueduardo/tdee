let male = document.getElementById("radio-m");
let female = document.getElementById("radio-f");
let activy = document.getElementById("activity");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let age = document.getElementById("age");
let calories = document.getElementById("calories-text");

const form = document.getElementById("form");

function calculateTDEE(event) {
  event.preventDefault(); // nao dar refresh

  // converter em numeros e pegar valor
  const weightValue = parseFloat(weight.value);
  const heightValue = parseFloat(height.value);
  const ageValue = parseFloat(age.value);

  let tmb = 0;

  // realizar o calculo de acordo com o genero (TMB)
  if (male.checked) {
    tmb = 88.362 + (13.397 * weightValue) + (4.799 * heightValue) - (5.677 * ageValue);
  } else if (female.checked) {
    tmb = 447.593 + (9.247 * weightValue) + (3.098 * heightValue) - (4.330 * ageValue);
  }

  const activyValue = activy.value;

  let tdee = 0;

  // realizar o calculo de acordo com o nivel de ativ fisica (TDEE)
  if (activyValue === "Sedentário") {
    tdee = tmb * 1.2;
  } else if (activyValue === "Levemente ativo") {
    tdee = tmb * 1.375;
  } else if (activyValue === "Moderamente ativo") {
    tdee = tmb * 1.55;
  } else if (activyValue === "Muito ativo") {
    tdee = tmb * 1.725;
  } else if (activyValue === "Extremamente ativo") {
    tdee = tmb * 1.9;
  }

  // exibir e arredondar o resultado
  calories.textContent = `Você precisa de ${tdee.toFixed(0)} calorias por dia.`;
  console.log(tdee);
}

form.addEventListener("submit", calculateTDEE);