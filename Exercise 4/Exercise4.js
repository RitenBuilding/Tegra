function calculateChange() {
  const unitPrice = parseFloat(document.getElementById("unitPrice").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const amountPaid = parseFloat(document.getElementById("amountPaid").value);
  
  const totalCost = unitPrice * quantity;
  
  if (amountPaid < totalCost) {
    document.getElementById("changeResult").textContent = "Valor insuficiente. Pagamento não aceito.";
  } else {
    const change = (amountPaid - totalCost).toFixed(2);
    document.getElementById("changeResult").textContent = "Troco: R$" + change;
  }
}

