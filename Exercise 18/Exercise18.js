function convertTemperature() {
    const selectedScale = document.querySelector('input[name="scale"]:checked').value;
    const temperature = parseFloat(document.getElementById("temperature").value);
    
    let convertedTemperature = 0;
    
    if (selectedScale === "Celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
    } else if (selectedScale === "Fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
    }
    
    document.getElementById("convertedTemperature").textContent = convertedTemperature.toFixed(2);
  }
  