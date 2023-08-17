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

  // obj com valores p calculo de acordo com o genero (TMB)
  const genderValues = {
    male: { a: 88.362, b: 13.397, c: 4.799, d: 5.677 },
    female: { a: 447.593, b: 9.247, c: 3.098, d: 4.330 }
  };

  let tmb = 0;

  // verificar e obter o genero selecionado
  const selectedGender = male.checked ? "male" : "female";
  const genderData = genderValues[selectedGender];

  // realizar o calculo de acordo com o genero (TMB) atraves das propriedades
  tmb = genderData.a + (genderData.b * weightValue) + (genderData.c * heightValue) - (genderData.d * ageValue);

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

  // exibir e arredondar o resultado 
  calories.textContent = `Você precisa de ${tdee.toFixed(0)} calorias por dia.`;
  console.log(tdee);
}

form.addEventListener("submit", calculateTDEE);