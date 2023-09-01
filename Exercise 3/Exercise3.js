function calculateAverageAge() {
    const name1 = document.getElementById("name1").value;
    const age1 = parseInt(document.getElementById("age1").value);
    const name2 = document.getElementById("name2").value;
    const age2 = parseInt(document.getElementById("age2").value);
    
    const averageAge = ((age1 + age2) / 2).toFixed(1);
    
    document.getElementById("nameResult1").textContent = name1;
    document.getElementById("nameResult2").textContent = name2;
    document.getElementById("averageAgeResult").textContent = averageAge;
  }
  