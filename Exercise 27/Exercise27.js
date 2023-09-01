function checkPalindrome() {
  const input = document.getElementById("input").value.toLowerCase();
  const reversedInput = input.split("").reverse().join("");
  
  if (input === reversedInput) {
    document.getElementById("result").textContent = "É palíndromo.";
  } else {
    document.getElementById("result").textContent = "Não é palíndromo.";
  }
}
