// var confimation = alert("Javascript fonctionne");
var mes;

function sudoku() {
    mes = "";
    var l1c1 = document.getElementById("l1c1").value;
    var l1c9 = document.getElementById("l1c9").value;

    var l2c2 = document.getElementById("l2c2").value;
    var l2c8 = document.getElementById("l2c8").value;

    var l3c3 = document.getElementById("l3c3").value;
    var l3c7 = document.getElementById("l3c7").value;

    var l4c4 = document.getElementById("l4c4").value;
    var l4c6 = document.getElementById("l4c6").value;

    var l5c5 = document.getElementById("l5c5").value;

    var l6c4 = document.getElementById("l6c4").value;
    var l6c6 = document.getElementById("l6c6").value;

    var l7c3 = document.getElementById("l7c3").value;
    var l7c7 = document.getElementById("l7c7").value;

    var l8c2 = document.getElementById("l8c2").value;
    var l8c8 = document.getElementById("l8c8").value;

    var l9c1 = document.getElementById("l9c1").value;
    var l9c9 = document.getElementById("l9c9").value;




    if (l1c1=="4" && l1c9=="2" && l2c2=="6" && l2c8=="8" && l3c3=="9" && l3c7=="3" && l4c4=="3" && l4c6=="1" && l5c5=="5" && l6c4=="9" && l6c6=="2" && l7c3=="7" && l7c7=="8" && l8c2=="4" && l8c8=="1" && l9c1=="6" && l9c9=="7"){
        mes = ("Bravo ! Vous avez resolu le Sudoku! Facile non ?");
        document.getElementById("result").innerHTML = mes;
        document.getElementById("tableau").id ="tableau2";

    }
    else {
        mes = ("Incorrect ! Le Sudoku est Faux. Essayez encore !");
        document.getElementById("result").innerHTML = mes;
        document.getElementById("tableau2").id = "tableau";
    }
}



function sudokureset() {
    mes = "";
    document.getElementById("l1c1").value = mes;
    document.getElementById("l1c9").value = mes;
    document.getElementById("l2c2").value = mes;
    document.getElementById("l2c8").value = mes;
    document.getElementById("l3c3").value = mes;
    document.getElementById("l3c7").value = mes;
    document.getElementById("l4c4").value = mes;
    document.getElementById("l4c6").value = mes;
    document.getElementById("l5c5").value = mes;
    document.getElementById("l6c4").value = mes;
    document.getElementById("l6c6").value = mes;
    document.getElementById("l7c3").value = mes;
    document.getElementById("l7c7").value = mes;
    document.getElementById("l8c2").value = mes;
    document.getElementById("l8c8").value = mes;
    document.getElementById("l9c1").value = mes;
    document.getElementById("l9c9").value = mes;
}