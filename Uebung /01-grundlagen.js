console.log('GRUNDLAGEN');
console.log('----------');

console.log('Aufgabe 1');
console.log('Erstelle zwei Variablen namens a und b. Initialisiere mit den Werten 1 und 2');

//Der Wert 1 wird zugewiesen (=) an eine variable namens a.
let a = 1;
let b = 2;

//Mit dem Plus Operator findet eine String-Verkettung statt. Ein String ist eine Zeichenkette. eingerahmt
//mit hochkommer
console.log('Der Wert der Variable ist:' + a);

console.log('Aufgabe 2');
console.log('Gib das Ergebnis der Addition von a und b aus');

//Wenn links oder rechts vom Plus-Operator ein String steht. wird verkettet.
//Wenn links oder rechts Zahlen stehen, wird addiert
console.log(a+b);
console.log('Das Ergebnis der Addition', + a + b);

console.log('Aufgabe 3');
console.log('Gib das Ergebnis der Subtraktion, Multiplikation und Division von a und b aus');

console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log('Aufgabe 4');
console.log('Der Wert von c sei das Ergebnis der addition von a und b');

let c = a + b;

console.log('c hat den Wert:' + c);

console.log('Aufgabe 5');
console.log('a und b sind die seitenlängen der Katheten eines rechtwinkliges Dreiecks. Bestimme die Länge Hypothenuse c');

// Gegebene Längen der Katheten
console.log('a = /* Wert von a */');
console.log('b = /* Wert von b */');

// Berechnung der Länge der Hypotenuse
console.log('c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))');

console.log('Die Länge der Hypotenuse c beträgt: ' + c);

console.log('Aufgabe 6');
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr bekommt er 10% Zinsen. Wie viel bekommt der Kunde');
console.log('nach zwei Jahren ausgezahlt. Beachte den Zinseszinseffekt.');
 
let laufzeit = 2;
let startkapital = 100;
let zinssatz = 0.1;   /* Das Komma ist zur Entwicklungszeit ein Punkt. */
 
let kapitalNachEinemJahr = startkapital * (1 + zinssatz);
 
console.log("Kapital nach einem Jahr: " + kapitalNachEinemJahr + " EUR.");
 
let kapitalNachZweiJahren = kapitalNachEinemJahr * (1 + zinssatz);
 
console.log("Kapital nach zwei Jahren: " + kapitalNachZweiJahren + " EUR.");
 
//let endkapital = Math.pow((startkapital * zinssatz) , laufzeit);
 
let endkapital = startkapital * Math.pow(1 + zinssatz, laufzeit);
 
console.log("Endkapital nach " + laufzeit + " Jahren: " + endkapital + " EUR.");
 console.log("Aufgabe 7");
 console.log("Die Werte aus der vorhehringen Aufgabe werden als Reihe dargestellt.");
 
 endkapital = startkapital;
 console.log(endkapital);
//NAch dem 1 Jahr erhöht sich das Endkapital um den Faktor* 1,1
 endkapital = startkapital * (1 + zinssatz) ;
 console.log(endkapital);
//NAch dem 1 Jahr erhöht sich das Endkapital um den Faktor* 1,1
endkapital = startkapital * (1 + zinssatz) ;
console.log(endkapital);
//NAch dem 1 Jahr erhöht sich das Endkapital um den Faktor* 1,1
endkapital = startkapital * (1 + zinssatz) ;
console.log(endkapital);
//NAch dem 1 Jahr erhöht sich das Endkapital um den Faktor* 1,1
endkapital = startkapital * (1 + zinssatz) ;
console.log(endkapital);
 
 console.log("Aufgabe 8");
 console.log("In aufgabe sieben wurde die Anweisung endkapital = ... mehrfach wiederholt");
console.log("um sich Tiparbeit zu Sparen und die wiederholung Anweisung in der gewünschten Häufigkeit durchzuführen ");
console.log("nutzt der Programierer eine Schleife.");
 
startkapital = 100;
endkapital = startkapital;
zinssatz = 0.1;
laufzeit= 3;
 for (let i = 0; 0 < laufzeit; i++) {endkapital = endkapital * (1+ zinssatz);
    console.log("endkapitalNachJahr"+ (i+1) + ": " +endkapital + "EUR.");}

 