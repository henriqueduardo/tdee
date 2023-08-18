let male = document.getElementById("radio-m");
let female = document.getElementById("radio-f");
let activy = document.getElementById("activity");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let age = document.getElementById("age");
let calories = document.getElementById("calories-text");
let basal = document.getElementById("basal-text");
let imcText = document.getElementById("imc-text");
let lossWeightText = document.getElementById("loss-text");
let gainWeightText = document.getElementById("gain-text");

const form = document.getElementById("form");

function calculateTDEE(event) {
  event.preventDefault(); // nao dar refresh

  // converter em numeros e pegar valor
  const weightValue = parseFloat(weight.value);
  const heightValue = parseFloat(height.value);
  const ageValue = parseFloat(age.value);

  // converter a altura de cm para metros
  const heightInMeters = heightValue / 100;

  // calculo imc
  const imc = weightValue / (heightInMeters * heightInMeters);

  // obj com valores p calculo de acordo com o genero (TMB)
  const genderValues = {
    male: { a: 10, b: 6.25, c: 5, d: 5 },
    female: { a: 10, b: 6.25, c: 5, d: 161 }
  };

  let tmb = 0;

  // verificar e obter o genero selecionado
  const selectedGender = male.checked ? "male" : "female";
  const genderData = genderValues[selectedGender];

  // realizar o calculo de acordo com o genero (TMB) atraves das propriedades (mifflin st jeor)
  tmb = (genderData.a * weightValue) + (genderData.b * heightValue) - (genderData.c * ageValue) + genderData.d;

  // obj com valores de niveis de ativ fisica
  const activityValues = {
    "Sedentário": 1.2,
    "Levemente ativo": 1.375,
    "Moderamente ativo": 1.55,
    "Muito ativo": 1.725,
    "Extremamente ativo": 1.9
  };

  let tdee = 0;

  // obter o valor selecionado
  const activityValue = activy.value;

  // realizar o calculo de acordo com o nivel de ativ fisica (TDEE)
  tdee = tmb * activityValues[activityValue];

  // perder ou ganhar peso
  lossWeight = tdee - 425;
  gainWeight = tdee + 425;

  // tde - exibir e arredondar o resultados
  calories.textContent = `${tdee.toFixed(0)}`;

  // tmb
  basal.textContent = `${tmb.toFixed(0)}`;

  // imc
  imcText.textContent = `${imc.toFixed(2)}`;

  // perder peso
  lossWeightText.textContent = `${lossWeight.toFixed(0)}`;

  // ganhar peso
  gainWeightText.textContent = `${gainWeight.toFixed(0)}`;
  console.log(tdee);
}

form.addEventListener("submit", calculateTDEE);