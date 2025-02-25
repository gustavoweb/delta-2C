function Delta() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    document.getElementById("resultado").innerHTML = (b*b)-4*a*c;
}