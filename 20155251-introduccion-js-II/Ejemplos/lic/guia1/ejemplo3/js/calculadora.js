/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Programacion Web *
* Archivo: calculadora.js *
* Descripción: Realizar operaciones básicas aritméticas. *
* *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/ //Ingresar los datos de los números a operar
var op1 = prompt('Introduzca el primer numero:', ''); var
    op2 = prompt('Introduzca el segundo numero:', '');
//Creando el documento HTML con puro JavaScript
haciendo //uso del método write() del objeto document
document.write("<h1>Operaciones básicas</h1><hr />");
document.write("<div class='menu'>");
document.write("<ul>");
document.write("<li><a href=\"javascript:void(0)\" onclick=\"alert(parseInt(op1) \+ parseInt(op2))\"><span>Sumar</span></a></li>");
document.write("<li><a href=\"javascript:void(0)\" onclick=\"alert(parseInt(op1) \- parseInt(op2))\"><span>Restar</span></a></li>");
document.write("<li><a href=\"javascript:void(0)\" onclick=\"alert(parseInt(op1) \* parseInt(op2))\"><span>Multiplicar</span></a></li>");
document.write("<li><a href=\"javascript:void(0)\" onclick=\"alert(parseInt(op1) \/ parseInt(op2))\"><span>Dividir</span></a></li>");
document.write("<li><a href=\"javascript:void(0)\" onclick=\"alert(parseInt(op1) \% parseInt(op2))\"><span>Residuo</span></a></li>");
document.write("</ul>");
document.write("</div>");