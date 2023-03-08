var boton = document.querySelector("#calc");
function calcNotes(){
    var notaParcial1 = parseInt(document.getElementById("notaParcial1").value);
    let notaParcial2 = parseInt(document.getElementById("notaParcial2").value);
    let notaParcial3 = parseInt(document.getElementById("notaParcial3").value);
    let notaEvaluacion = parseInt(document.getElementById("notaEvaluacion").value);
    let notaTrabajoF = parseInt(document.getElementById("notaTrabajoF").value);
    let nf = (((notaParcial1 +notaParcial2+notaParcial3)/3) *0.55) + (notaEvaluacion *0.30)+(notaTrabajoF * 0.15);
    document.getElementById("resultado").innerHTML= nf.toFixed(2);    
    document.getElementById("resul").style.display = "block";

}
function test(){
    console.log("dah");
}
boton.onclick = calcNotes;