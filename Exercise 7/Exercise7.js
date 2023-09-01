function calculateFuelConsumption() {
    const distance = parseFloat(document.getElementById("distance").value);
    const fuel = parseFloat(document.getElementById("fuel").value);
    
    const consumption = (distance / fuel).toFixed(3);
    
    document.getElementById("consumptionResult").textContent = consumption;
  }
  