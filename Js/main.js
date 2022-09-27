let DBZSelect = alert("A Continuacion Elegiras Tu Peleador Inicial ");
alert("Goku  - Vegeta  - Gohan ");
let vida1 = 100; 
let vida2 = 100;

let DBZSelect2 = prompt("Ingresa Un Peleador");
switch (DBZSelect2) {
case "Goku":
    console.log("Has Elegido a Goku");
    break;
case "Vegeta":
    console.log("Has Elegido a Vegeta");
    break;
case "Gohan":
    console.log("Has Elegido a Gohan");
    break;
default:
    alert("Ingresa un Peleador Valido");
}


alert("A Continuacion Elegiras Tu Peleador Enemigo ");
alert("Frezzer  - Cell  - Majin Bu ");

let enemySelect = prompt("Elije Un Peleador Enemigo");
switch (enemySelect) {
case "Frezzer ":
    console.log("Has Elegido a Frezzer");
    break;
case "Cell":
    console.log("Has Elegido a Cell");
    break;
case "Majin Bu":
    console.log("Has Elegido a Majin Bu");
    break;
default:
    alert("Ingresa un Peleador Valido");
}

function combate() {
let round = 0;
while (vida1 > 0 && vida2 > 0) {
    let GolpeDBZ1 = Math.ceil(Math.random() * 30);
    let GolpeDBZ2 = Math.ceil(Math.random() * 30);
    round = round + 1;
    console.log(round);
    if (GolpeDBZ1 > GolpeDBZ2) {
    vida2 -= GolpeDBZ1;
    console.log(DBZSelect2 + " vida = " + vida1);
    console.log(enemySelect + " Vida = " + vida2);
    } else {
    vida1 -= GolpeDBZ2;
    console.log(enemySelect + " Vida = " + vida2);
    console.log(DBZSelect2 + " Vida = " + vida1);
    }
}
}
if (enemySelect === "Frezzer") {
combate();
}
if (enemySelect === "Cell") {
combate();
}
if (enemySelect === "Majin Bu") {
combate();
}
if (vida1 > vida2) {
console.log(DBZSelect2 + " Ha Ganado El Combate");
} else {
console.log(enemySelect + " Ha Ganado El Combate");
}