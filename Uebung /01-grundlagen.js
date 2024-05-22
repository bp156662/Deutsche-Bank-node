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


console.log('Aufgabe 10');
console.log('Versandkostenberechnung:');
console.log('Wenn der Gesamtbetrag des Einkaufs größer oder gleich 200 Euro ist, ist der Versand kostenlos.');
console.log('Wenn der Gesamtbetrag des Einkaufs zwischen 100 und weniger als 200 Euro liegt, betragen die Versandkosten 5 Euro.');
console.log('Ansonsten betragen die Versandkosten 10 Euro.');

let Gesamtbetrag = 150;
let versandkosten;

if (Gesamtbetrag >= 200) {
    versandkosten = 0;
} else if (Gesamtbetrag >= 100 && Gesamtbetrag <= 199) {
    versandkosten = 5;
} else {
    versandkosten = 10;
}

console.log('Die Versandkosten betragen:', versandkosten + ' Euro');

let GesamtbetragMitVersand = Gesamtbetrag + versandkosten;
console.log('Der Gesamtbetrag inklusive Versandkosten beträgt:', GesamtbetragMitVersand + ' Euro');


console.log('Aufgabe 11');
console.log('Rabattberechnung:');
console.log('Wenn der Gesamtbetrag des Einkaufs größer oder gleich 100 Euro ist, beträgt der Rabatt 20%.');
console.log('Wenn der Gesamtbetrag des Einkaufs zwischen 50 und 99 Euro liegt, beträgt der Rabatt 10%.');
console.log('Ansonsten gibt es keinen Rabatt.');
 
 Gesamtbetrag = 49;
 discount; 
 
if (Gesamtbetrag >= 100) {
    discount = 20;
} else if (gesamtbetrag >= 50 && gesamtbetrag <= 99) {
    discount = 10;
} else {
    discount = 0;
}
 
console.log('Der Rabatt beträgt:', discount + '%');
 
console.log('Aufgabe 13')
console.log('frauen ab 18 zahlen 10 euro eintritt, männer ab 18 zahlen 15 euro eintritt')

let eintritt;
let alter = 10;
let geschlecht = 'm'
let geschlecht = 'w'

if (geschlecht ===  'w' && alter >== 18)
    eintritt 10
