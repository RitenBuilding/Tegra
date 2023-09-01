function calculatePhoneBill() {
  const minutesUsed = parseInt(document.getElementById("minutesUsed").value);  
  if (isNaN(minutesUsed) || minutesUsed < 0) {
    document.getElementById("billAmount").textContent = "Input inválido";
    return;
  }
  
  const basicPlanCost = 50.0;
  const extraMinutesCost = (minutesUsed > 100) ? (minutesUsed - 100) * 2 : 0;
  
  const totalCost = (basicPlanCost + extraMinutesCost).toFixed(2);
  
  if (isNaN(totalCost) || totalCost <= 0) {
    document.getElementById("billAmount").textContent = "Valor a ser pago: R$0.00";
  } else {
    document.getElementById("billAmount").textContent = "Valor a ser pago: R$" + totalCost;
  }
}

