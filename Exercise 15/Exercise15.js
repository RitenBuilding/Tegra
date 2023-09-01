function classifyGlucose() {
    const glucoseLevel = parseInt(document.getElementById("glucoseLevel").value);
    let classification = "";
  
    if (glucoseLevel <= 100) {
      classification = "Normal";
    } else if (glucoseLevel <= 140) {
      classification = "Elevado";
    } else {
      classification = "Diabetes";
    }
  
    document.getElementById("glucoseClassification").textContent = classification;
  }
