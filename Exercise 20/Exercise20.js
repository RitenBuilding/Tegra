function calculateSum() {
    const startNumber = parseInt(document.getElementById("startNumber").value);
    const endNumber = parseInt(document.getElementById("endNumber").value);
    
    let sum = 0;
    
    for (let i = startNumber; i <= endNumber; i++) {
      sum += i;
    }
    
    document.getElementById("sumResult").textContent = sum;
  }
  