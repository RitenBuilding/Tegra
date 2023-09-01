function findZodiacSign() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  
  let zodiacSign = "";
  if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
    document.getElementById("zodiacSign").textContent = "Valores inválidos.";
    return;
  }
  if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
    zodiacSign = "Áries";
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
    zodiacSign = "Touro";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    zodiacSign = "Gêmeos";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    zodiacSign = "Câncer";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zodiacSign = "Leão";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zodiacSign = "Virgem";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    zodiacSign = "Libra";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    zodiacSign = "Escorpião";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    zodiacSign = "Sagitário";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) {
    zodiacSign = "Capricórnio";
  } else if ((month === 1 && day >= 21) || (month === 2 && day <= 18)) {
    zodiacSign = "Aquário";
  } else {
    zodiacSign = "Peixes";
  }
  
  document.getElementById("zodiacSign").textContent = "Seu signo é: " + zodiacSign;
}
