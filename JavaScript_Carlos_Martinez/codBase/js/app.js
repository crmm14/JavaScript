var Calculadora = new Object();
Calculadora.init = function(){
    //Variables
    var control_punto = 0;
    var control_menos = 0;
    var operandoa;
    var operandob;
    var operacion;
    var sign = document.getElementById("sign");
    var punto = document.getElementById("punto");
    var resultado = document.getElementById("display");
    var reset = document.getElementById("on");
    var suma = document.getElementById("mas");
    var resta = document.getElementById("menos");
    var multiplicacion = document.getElementById("por");
    var division = document.getElementById("dividido");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var cuatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var siete = document.getElementById("7");
    var ocho = document.getElementById("8");
    var nueve = document.getElementById("9");
    var cero = document.getElementById("0");
    //Eventos
    mostrar = function (num) {
        if (resultado.innerHTML.length < 8) {
            if (resultado.innerHTML == "0") {
                resultado.innerHTML = num;
            } else {
                resultado.innerHTML += num;
            }
        }
    }
    uno.onclick = function(argument){mostrar("1")}
    dos.onclick = function (argument) {mostrar("2")}
    tres.onclick = function (argument) {mostrar("3")}
    cuatro.onclick = function (argument) {mostrar("4")}
    cinco.onclick = function (argument) {mostrar("5")}
    seis.onclick = function (argument) {mostrar("6")}
    siete.onclick = function (argument) {mostrar("7")}
    ocho.onclick = function (argument) {mostrar("8")}
    nueve.onclick = function (argument) {mostrar("9")}
    cero.onclick = function (argument) {mostrar("0")}
    reset.onclick = function(){
        resetear();
    }
    suma.onclick = function(){
        operandoa = resultado.innerHTML;
        operacion = "+";
        limpiar();
        control_punto = 0;
        control_menos = 0;
    }
    resta.onclick = function () {
        operandoa = resultado.innerHTML;
        operacion = "-";
        limpiar();
        control_punto = 0;
        control_menos = 0;
    }
    multiplicacion.onclick = function () {
        operandoa = resultado.innerHTML;
        operacion = "*";
        limpiar();
        control_punto = 0;
        control_menos = 0;
    }
    division.onclick = function () {
        operandoa = resultado.innerHTML;
        operacion = "/";
        limpiar();
        control_punto = 0;
        control_menos = 0;
    }
    igual.onclick = function(){
        operandob = resultado.innerHTML;
        resolver();
        control_punto = 0;
        control_menos = 0;
    }
    //Limpiar el display.
    function limpiar(){
        resultado.innerHTML = "";
    }
    //Poner nuevamente en 0 todos los valores de las variables.
    function resetear(){
        resultado.innerHTML = "0";
        operandoa = 0;
        operandob = 0;
        operacion = "";
        control_punto = 0;
    }
    //Llamado de las operaciones aritmeticas.
    function resolver(){
        var res = 0;
        switch(operacion){
            case "+":
                res += parseFloat(operandoa) + parseFloat(operandob);
                break;
            case "-":
                res += parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "*":
                res += parseFloat(operandoa) * parseFloat(operandob);
                break;
            case "/":
                res += parseFloat(operandoa) / parseFloat(operandob);
                break;
        }
        limpiar();
        resultado.innerHTML += (Math.round(res * 100) / 100).toFixed(2);;
    }
    //Mostrar punto
    punto.onclick = function (argument){
        if(control_punto == 0){
            mostrar(".")
            control_punto = 1;
        }
    }
    
    var tecla0, tecla1, tecla2, tecla3, tecla4, tecla5, tecla6, tecla7, tecla8, tecla9, tecla10, tecla11, tecla12, tecla13, tecla14, tecla15, tecla16, tecla17, tecla18;
    //Tecla 0
    tecla0 = document.getElementsByClassName("tecla")[0];
    tecla0.addEventListener('mousedown', function () {
        tecla0.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla0.addEventListener('mouseup', function () {
        tecla0.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 1
    tecla1 = document.getElementsByClassName("tecla")[1];
    tecla1.addEventListener('mousedown', function () {
        tecla1.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla1.addEventListener('mouseup', function () {
        tecla1.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 2
    tecla2 = document.getElementsByClassName("tecla")[2];
    tecla2.addEventListener('mousedown', function () {
        tecla2.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla2.addEventListener('mouseup', function () {
        tecla2.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 3
    tecla3 = document.getElementsByClassName("tecla")[3];
    tecla3.addEventListener('mousedown', function () {
        tecla3.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla3.addEventListener('mouseup', function () {
        tecla3.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 4
    tecla4 = document.getElementsByClassName("tecla")[4];
    tecla4.addEventListener('mousedown', function () {
        tecla4.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla4.addEventListener('mouseup', function () {
        tecla4.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 5
    tecla5 = document.getElementsByClassName("tecla")[5];
    tecla5.addEventListener('mousedown', function () {
        tecla5.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla5.addEventListener('mouseup', function () {
        tecla5.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 6
    tecla6 = document.getElementsByClassName("tecla")[6];
    tecla6.addEventListener('mousedown', function () {
        tecla6.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla6.addEventListener('mouseup', function () {
        tecla6.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 7
    tecla7 = document.getElementsByClassName("tecla")[7];
    tecla7.addEventListener('mousedown', function () {
        tecla7.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla7.addEventListener('mouseup', function () {
        tecla7.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 8
    tecla8 = document.getElementsByClassName("tecla")[8];
    tecla8.addEventListener('mousedown', function () {
        tecla8.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla8.addEventListener('mouseup', function () {
        tecla8.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 9
    tecla9 = document.getElementsByClassName("tecla")[9];
    tecla9.addEventListener('mousedown', function () {
        tecla9.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla9.addEventListener('mouseup', function () {
        tecla9.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 10
    tecla10 = document.getElementsByClassName("tecla")[10];
    tecla10.addEventListener('mousedown', function () {
        tecla10.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla10.addEventListener('mouseup', function () {
        tecla10.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 11
    tecla11 = document.getElementsByClassName("tecla")[11];
    tecla11.addEventListener('mousedown', function () {
        tecla11.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla11.addEventListener('mouseup', function () {
        tecla11.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 12
    tecla12 = document.getElementsByClassName("tecla")[12];
    tecla12.addEventListener('mousedown', function () {
        tecla12.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla12.addEventListener('mouseup', function () {
        tecla12.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 13
    tecla13 = document.getElementsByClassName("tecla")[13];
    tecla13.addEventListener('mousedown', function () {
        tecla13.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla13.addEventListener('mouseup', function () {
        tecla13.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 14
    tecla14 = document.getElementsByClassName("tecla")[14];
    tecla14.addEventListener('mousedown', function () {
        tecla14.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla14.addEventListener('mouseup', function () {
        tecla14.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 15
    tecla15 = document.getElementsByClassName("tecla")[15];
    tecla15.addEventListener('mousedown', function () {
        tecla15.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla15.addEventListener('mouseup', function () {
        tecla15.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 16
    tecla16 = document.getElementsByClassName("tecla")[16];
    tecla16.addEventListener('mousedown', function () {
        tecla16.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla16.addEventListener('mouseup', function () {
        tecla16.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 17
    tecla17 = document.getElementsByClassName("tecla")[17];
    tecla17.addEventListener('mousedown', function () {
        tecla17.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla17.addEventListener('mouseup', function () {
        tecla17.setAttribute("style", "transform:scale(1,1)");
    })
    //Tecla 18
    tecla18 = document.getElementsByClassName("tecla")[18];
    tecla18.addEventListener('mousedown', function () {
        tecla18.setAttribute("style", "transform:scale(0.95,0.95");
    })
    tecla18.addEventListener('mouseup', function () {
        tecla18.setAttribute("style", "transform:scale(1,1)");
    })
    //Mostrar o quitar -
    sign.onclick = function (argument) {
        if (control_menos == 0) {
            mostrar("-")
            control_punto = 1;
        }
    }
}
Calculadora.init()