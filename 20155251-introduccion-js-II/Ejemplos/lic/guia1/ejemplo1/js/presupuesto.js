var presupuesto = prompt("Ingrese el presupuesto anual", "");
var derma, trau, pedi;
derma = presupuesto * 0.4;
trau = presupuesto * 0.35;
pedi = presupuesto * 0.25;
document.write(
  "<h1 class='moneyOff' onMouseOver='this.className=\"moneyOn\"'onMouseOut='this.className=\"moneyOff\"'>El presupuesto asignado para Ginecología es:$" +
    derma +
    "</h1><hr>"
);
document.write(
  "<h1 class='moneyOff' onMouseOver='this.className=\"moneyOn\"'onMouseOut='this.className=\"moneyOff\"'>El presupuesto asignado para Traumatología es: $" +
    trau +
    "</h1><hr>"
);
document.write(
  "<h1 class='moneyOff' onMouseOver='this.className=\"moneyOn\"'onMouseOut='this.className=\"moneyOff\"'>El presupuesto asignado para Pediatría es: $" +
    pedi +
    "</h1><hr>"
);
