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

