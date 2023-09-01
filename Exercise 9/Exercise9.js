function convertTime() {
  const timeInSeconds = parseInt(document.getElementById("timeInSeconds").value);

  if (timeInSeconds < 0) {
      document.getElementById("convertedTime").textContent = "Valor negativo não é permitido";
      return;
  }

  const hours = Math.floor(timeInSeconds / 3600);
  const remainingSeconds = timeInSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  document.getElementById("convertedTime").textContent = formattedTime;
}
