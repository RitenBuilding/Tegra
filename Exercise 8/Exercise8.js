function calculateAreas() {
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const heightC = parseFloat(document.getElementById("heightC").value);
  
  const squareArea = (sideA * sideA).toFixed(4);
  const triangleArea = ((sideA * sideB) / 2).toFixed(4);
  const trapezoidArea = (((sideA + sideB) * heightC) / 2).toFixed(4);
  
  document.getElementById("squareAreaResult").textContent = squareArea;
  document.getElementById("triangleAreaResult").textContent = triangleArea;
  document.getElementById("trapezoidAreaResult").textContent = trapezoidArea;
}
