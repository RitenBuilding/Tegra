function calculateAndDisplayOddSum() {
  const xValue = parseInt(document.getElementById("xValue").value);
  const yValue = parseInt(document.getElementById("yValue").value);
  let oddSum = 0;
  
  for (let i = Math.min(xValue, yValue); i <= Math.max(xValue, yValue-1); i++) {
    if (i % 2 !== 0) {
      oddSum += i;
    }
  }
  
  document.getElementById("oddSumResult").textContent = "Soma dos ímpares entre " + xValue + " e " + yValue + ": " + oddSum;
}

