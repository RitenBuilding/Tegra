function calculateChange() {
    const unitPrice = parseFloat(document.getElementById("unitPrice").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const amountPaid = parseFloat(document.getElementById("amountPaid").value);
    
    const totalCost = unitPrice * quantity;
    const change = (amountPaid - totalCost).toFixed(2);
    
    if (change < 0) {
      alert("Valor pago insuficiente. Faltam R$" + Math.abs(change));
    } else {
      document.getElementById("changeResult").textContent = change;
    }
  }
  
