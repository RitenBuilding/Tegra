document.getElementById("calculateButton").addEventListener("click", function() {
  calculatePayment();
});

function calculatePayment() {
  const employeeName = document.getElementById("employeeName").value;
  const formattedName = employeeName.charAt(0).toUpperCase() + employeeName.slice(1);
  const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
  const hoursWorked = parseFloat(document.getElementById("hoursWorked").value);

  const payment = (hourlyRate * hoursWorked).toFixed(2);

  document.getElementById("nameResult").textContent = formattedName;
  document.getElementById("paymentResult").textContent = payment;
  document.getElementById("resultSection").style.display = "block";
}

