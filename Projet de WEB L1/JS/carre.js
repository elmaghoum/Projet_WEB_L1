//var confimation = alert("Javascript fonctionne");

var mes = "";
var mes2 = '<video controls width="750"><source src="../video/answervideo.mp4" type="video/mp4"></video>';
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "white";
ctx.strokeRect(0, 0, 100, 100);

ctx.strokeStyle = "white";
ctx.strokeRect(100, 0, 200, 400);

ctx.strokeStyle = "white";
ctx.strokeRect(0, 100, 400, 200);

ctx.strokeStyle = "white";
ctx.strokeRect(100, 100, 200, 200);

ctx.strokeStyle = "white";
ctx.strokeRect(100, 100, 100, 100);

ctx.strokeStyle = "white";
ctx.strokeRect(200, 200, 100, 100);

ctx.bezierCurveTo(0, 0, 300, 100, 100, 400);
ctx.stroke();

ctx.bezierCurveTo(0, 0, 200, 200, 400, 0);
ctx.stroke();

ctx.bezierCurveTo(0, 50, 110, 200, 400, 400);
ctx.stroke();

ctx.bezierCurveTo(400, 150, 220, 400, 0, 220);
ctx.stroke();



function validcarre() {
    var rep = document.getElementById("reponse").value;

    if (rep == "") {
        alert("Veuillez remplir la case");
    }
    else if (rep == "18"){
        mes = "VRAI ! Il y a bien 18 carr&eacute; au total ! Tu peux regarder cette video pour avoir la solution :";
        document.getElementById("soluce").innerHTML = mes;
        document.getElementById("vid").innerHTML = mes2;
    }
    else{
        mes = "FAUX ! Essaie encore ! Si tu ne trouve pas tu peut regarder cette video pour avoir la solution :";
        document.getElementById("soluce").innerHTML = mes;
        document.getElementById("vid").innerHTML = mes2;
    }
}