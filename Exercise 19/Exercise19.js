function calculateSalaryIncrease() {
    const salary = parseFloat(document.getElementById("salary").value);
    
    let newSalary = 0;
    let salaryIncrease = 0;
    let percentageIncrease = 0;
    
    if (salary <= 999) {
      percentageIncrease = 20;
    } else if (salary <= 2999) {
      percentageIncrease = 15;
    } else if (salary <= 7999) {
      percentageIncrease = 10;
    } else {
      percentageIncrease = 5;
    }
    
    salaryIncrease = (salary * percentageIncrease) / 100;
    newSalary = salary + salaryIncrease;
    
    document.getElementById("newSalary").textContent = newSalary.toFixed(2);
    document.getElementById("salaryIncrease").textContent = salaryIncrease.toFixed(2);
    document.getElementById("percentageIncrease").textContent = percentageIncrease
  }
  
