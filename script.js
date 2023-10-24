function contar() {
    let texto = document.getElementById("texto").value;
    let caracteres = texto.length;
    document.getElementById("caracteres").innerHTML = caracteres;
}

document.getElementById("contar").addEventListener("click", contar);