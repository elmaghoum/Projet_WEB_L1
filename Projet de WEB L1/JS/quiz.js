// var confimation = alert("Javascript fonctionne");
var mes1, mes2, mes3;
var valeur,valeur2,valeur3;

function validcalcul1() {
    valeur = "";
    mes1 = "...";
    if (document.getElementById('1choix1').checked) {
        valeur = document.getElementById('1choix1').value;
    }
    else if (document.getElementById('1choix2').checked) {
        valeur = document.getElementById('1choix2').value;
    }
    else if (document.getElementById('1choix3').checked) {
        valeur = document.getElementById('1choix3').value;
    }
    if (valeur == "10") {
        mes1 = "R&eacute;ponse s&eacute;lectionn&eacute; :   " + valeur + "  --->  Correct ! (carr&eacute;=3 triangle=2 rond=4) ";
    } else {
        mes1 = "R&eacute;ponse s&eacute;lectionn&eacute; :  " + valeur + "  --->  Faux ! Essaie encore !";
    }
    document.getElementById("phrase").innerHTML = mes1;
}

function validcalcul2() {
    mes2 = "...";
    valeur2="";
    if (document.getElementById('2choix1').checked) {
        valeur2 = document.getElementById('2choix1').value;
    }
    else if (document.getElementById('2choix2').checked) {
        valeur2 = document.getElementById('2choix2').value;
    }
    else if (document.getElementById('2choix3').checked) {
        valeur2 = document.getElementById('2choix3').value;
    }
    if (valeur2 == "35") {
        mes2 = "R&eacute;ponse s&eacute;lectionn&eacute; : " + valeur2 + " --->  Correct ! (banane=15, pomme=4, 2 cerise=10, 1 cerise=5)";
    } else {
        mes2 = "R&eacute;ponse s&eacute;lectionn&eacute; : " + valeur2 + " --->  Faux ! (Indice: regarde bien les images)";
    }
    document.getElementById("phrase2").innerHTML = mes2;
}

function validcalcul3() {
    mes3 = "...";
    valeur3="";
    if (document.getElementById('3choix1').checked) {
        valeur3 = document.getElementById('3choix1').value;
    }
    else if (document.getElementById('3choix2').checked) {
        valeur3 = document.getElementById('1choix2').value;
    }
    else if (document.getElementById('3choix3').checked) {
        valeur3 = document.getElementById('3choix3').value;
    }
    if (valeur3 == "14") {
        mes3 = "R&eacute;ponse s&eacute;lectionn&eacute; : " + valeur3 + " --->  Correct ! (pomme=10, 4 banane=4, 3 banane=3, 2 coco=2, 1 coco=1) ";
    } else {
        mes3 = "R&eacute;ponse s&eacute;lectionn&eacute; : " + valeur3 + " --->  Faux ! Essaie encore ! (Indice: regarde bien les images)";
    }
    document.getElementById("phrase3").innerHTML = mes3;
}