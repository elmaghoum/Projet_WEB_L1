// var confimation = alert("Javascript fonctionne");

var canvas = document.getElementById("logo");
var ctx = canvas.getContext("2d");
var date = new Date();
ctx.fillStyle = "darkgreen";
ctx.fillRect(0, 0, 60, 60);

ctx.fillStyle = "darkred";
ctx.fillRect(60, 60, 60, 60);

ctx.strokeStyle = "white";
ctx.strokeRect(60, 60, 60, 60);

ctx.fillStyle = "darkblue";
ctx.fillRect(120, 120, 60, 60);

ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.bezierCurveTo(0, 180, 20, 20, 180, 0);
ctx.stroke();
ctx.bezierCurveTo(180, 0, 20, 20, 0, 180);
ctx.stroke();

ctx.bezierCurveTo(0, 180, 160, 160, 180, 0);
ctx.stroke();
ctx.bezierCurveTo(180, 0, 160, 160, 0, 180);
ctx.stroke();



function test() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var liste = document.getElementById("liste");
    var sujet = liste.options[liste.selectedIndex].text;
    var mes = ""; 

    if (nom == "" || prenom == "" || email == "" || sujet=="....." ){
        alert("Veuillez remplir les cases");
    }
    else{
    document.getElementById("contacttxt").disabled = false;
        mes = ("Nom : " + nom + "            Prenom : " + prenom + "                              email : " + email + "                       Sujet :  " + sujet+"              Date et heure : "+date);
    document.getElementById("contacttxt").innerHTML = mes;
    }
}