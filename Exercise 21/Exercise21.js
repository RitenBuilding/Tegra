function showEvenNumbers() {
    const xValue = parseInt(document.getElementById("xValue").value);
    let output = "";
    
    for (let i = 2; i <= xValue; i += 2) {
      output += i + "\n";
    }
    
    document.getElementById("output").textContent = output;
  }
  