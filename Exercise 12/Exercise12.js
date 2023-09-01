function calculateRoots() {
  const coefficientA = parseFloat(document.getElementById("coefficientA").value);
  const coefficientB = parseFloat(document.getElementById("coefficientB").value);
  const coefficientC = parseFloat(document.getElementById("coefficientC").value);

  const discriminante = coefficientB * coefficientB - 4 * coefficientA * coefficientC;

  if (discriminante > 0) {
    const rootX1 = (-coefficientB + Math.sqrt(discriminante)) / (2 * coefficientA);
    const rootX2 = (-coefficientB - Math.sqrt(discriminante)) / (2 * coefficientA);

    document.getElementById("rootX1").textContent = rootX1.toFixed(2);
    document.getElementById("rootX2").textContent = rootX2.toFixed(2);
    document.getElementById("resultado").style.display = "block"; 
  }
  else if (discriminante === 0) {
    const rootX1 = -coefficientB / (2 * coefficientA);

    document.getElementById("rootX1").textContent = rootX1.toFixed(2);
    document.getElementById("resultado").style.display = "block"; 
  }
  else {
    document.getElementById("resultado").style.display = "none"; 
    alert("A equação não possui raiz real.");
  }
}

  
