function showMultiplicationTable() {
    const number = parseInt(document.getElementById("number").value);
    let output = "";
    
    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      output += number + " x " + i + " = " + result + "\n";
    }
    
    document.getElementById("output").textContent = output;
  }
  