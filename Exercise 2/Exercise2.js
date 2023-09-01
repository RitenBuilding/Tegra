function calculateRectangle() {
  const base = parseFloat(document.getElementById("base").value);
  const height = parseFloat(document.getElementById("height").value);
  
  const area = (base * height).toFixed(4);
  const perimeter = (2 * (base + height)).toFixed(4);
  const diagonal = (Math.sqrt(base * base + height * height)).toFixed(4);
  
  document.getElementById("areaResult").textContent = area;
  document.getElementById("perimeterResult").textContent = perimeter;
  document.getElementById("diagonalResult").textContent = diagonal;
}
