function countVowelsAndConsonants() {
    const word = document.getElementById("word").value.toLowerCase();
    
    const vowels = "aeiou";
    let vowelCount = 0;
    let consonantCount = 0;
    
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vowelCount++;
      } else if (word[i] >= "a" && word[i] <= "z") {
        consonantCount++;
      }
    }
    
    document.getElementById("result").textContent = "Quantidade de vogais: " + vowelCount + ", Quantidade de consoantes: " + consonantCount;
  }
  