const unidades = ["", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
const dezenas = ["", "Dez", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];

function transcreverNumero() {
    const numero = parseInt(document.getElementById("numero").value);
    
    if (isNaN(numero) || numero < 0 || numero > 99) {
        document.getElementById("resultado").textContent = "Digite um número válido de até dois algarismos.";
        return;
    }
    
    if (numero >= 1 && numero <= 9) {
        document.getElementById("resultado").textContent = unidades[numero];
    } else if (numero >= 10 && numero <= 19) {
        const extenso = [
            "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"
        ];
        document.getElementById("resultado").textContent = extenso[numero - 10];
    } else {
        const dezena = Math.floor(numero / 10);
        const unidade = numero % 10;
        document.getElementById("resultado").textContent = dezenas[dezena] + (unidade === 0 ? "" : " e " + unidades[unidade].toLowerCase());
    }
}
