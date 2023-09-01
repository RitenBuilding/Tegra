function findMaxDistance() {
  const throw1 = parseFloat(document.getElementById("throw1").value);
  const throw2 = parseFloat(document.getElementById("throw2").value);
  const throw3 = parseFloat(document.getElementById("throw3").value);
    if (throw1 < 0 || throw2 < 0 || throw3 < 0) {
    document.getElementById("maxDistance").textContent = "Valores negativos não são permitidos";
  } else {
    const maxDistance = Math.max(throw1, throw2, throw3).toFixed(2);
    document.getElementById("maxDistance").textContent = maxDistance + " metros";
  }
}



  
