function sortAndDisplayNumbers() {
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    const number3 = parseInt(document.getElementById("number3").value);
    const number4 = parseInt(document.getElementById("number4").value);
    const number5 = parseInt(document.getElementById("number5").value);
    
    const sortedNumbers = [number1, number2, number3, number4, number5].sort((a, b) => a - b);
    
    document.getElementById("sortedNumbers").textContent = "Ordenados: " + sortedNumbers.join(", ");
  }
  