function findMinMax() {
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
    const value3 = parseFloat(document.getElementById("value3").value);
    const value4 = parseFloat(document.getElementById("value4").value);
    const value5 = parseFloat(document.getElementById("value5").value);
    
    const values = [value1, value2, value3, value4, value5];
    
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    
    document.getElementById("minMaxResult").textContent = "Menor valor: " + minValue + ", Maior valor: " + maxValue;
  }
  