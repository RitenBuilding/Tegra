function calculateCircleArea() {
  const radius = parseFloat(document.getElementById("radius").value);
  
  if (isNaN(radius) || radius <= 0) {
      document.getElementById("areaResult").textContent = "Raio inválido. Insira um valor válido.";
  } else {
      const area = (Math.PI * radius * radius).toFixed(3);
      document.getElementById("areaResult").textContent = "Área do círculo: " + area;
  }
}
