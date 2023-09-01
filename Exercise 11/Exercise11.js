function calculateFinalGrade() {
    const firstSemesterGrade = parseFloat(document.getElementById("firstSemesterGrade").value);
    const secondSemesterGrade = parseFloat(document.getElementById("secondSemesterGrade").value);
    
    const finalGrade = ((firstSemesterGrade + secondSemesterGrade) / 2).toFixed(1);
    let studentStatus = "APROVADO";
    
    if (finalGrade < 60.0) {
      studentStatus = "REPROVADO";
    }
    
    document.getElementById("finalGradeResult").textContent = finalGrade;
    document.getElementById("studentStatus").textContent = studentStatus;
  }
  