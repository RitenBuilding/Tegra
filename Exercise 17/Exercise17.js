function checkMultiples() {
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    
    let result = "Não";
    
    if (number1 % number2 === 0 || number2 % number1 === 0) {
      result = "Sim";
    }
    
    document.getElementById("multiplesResult").textContent = result;
  }
  
