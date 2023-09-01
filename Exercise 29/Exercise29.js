
function validarCNPJ() {
    var cnpj = document.getElementById("cnpj").value.replace(/[^\d]+/g,'');
      if (cnpj == '') {
        document.getElementById("resultado").innerHTML = "O campo CNPJ é obrigatório.";
        return false;
    }
    
    if (cnpj.length != 14) {
        document.getElementById("resultado").innerHTML = "O CNPJ deve conter 14 números.";
        return false;
    }

    var tamanho = cnpj.length - 2
    var numeros = cnpj.substring(0,tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
        document.getElementById("resultado").innerHTML = "CNPJ inválido.";
        return false;
    }
    
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        document.getElementById("resultado").innerHTML = "CNPJ inválido.";
        return false;
    }

    document.getElementById("resultado").innerHTML = "CNPJ válido.";
    return true;
}

