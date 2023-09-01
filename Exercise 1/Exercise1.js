function calculateLand() {
  const width = parseFloat(document.getElementById("width").value);
  const length = parseFloat(document.getElementById("length").value);
  const squareMeterValue = parseFloat(document.getElementById("squareMeterValue").value);
  
  const landArea = width * length;
  const landPrice = landArea * squareMeterValue;
  
  document.getElementById("areaResult").textContent = landArea.toFixed(2);
  document.getElementById("priceResult").textContent = landPrice.toFixed(2);
}
