function findSmallestNumber() {
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    const number3 = parseInt(document.getElementById("number3").value);
    
    const smallestNumber = Math.min(number1, number2, number3);
    
    document.getElementById("smallestNumberResult").textContent = smallestNumber;
  }
  