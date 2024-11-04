console.log("FUNKTIONEN")
console.log("==========")

//funktionen führen operationen aus

let laenge = 3
let breite = 5

let flaecheninhalt = laenge+breite 
console.log("Flaecheninhalt:" + flaecheninhalt)

//jetzt die berechnung in der funktion
//zuerst wird sie erstellt

function berechneflaecheninhalt (breite,länge) {
return laenge + breite
}

//schritt zwei ruft die funktion ein

console.log("Flaecheninhalt:" + berechneflaecheninhalt(10,10))

// der vorteil ist, das die berechnung nur einmal anmgeführt werden muss

//so werden funktionen aufgestellt
// 1. das reservierte wort function
// 2. ein sprechender name; der name soll beschreiben was die funktion macht
// 3. runder klammer am ende nehmen Parameter entgegen. parameter sind das was die funktion zur berechnung braucht 
// funktionen können mehrere oder auch keine parameter entgegen nehmen 
// 4. in der geschweifelten klammer wird die Logik ausformiert
// 5. mit dem reservierten wort return wird das ergebnis zurückgegeben 

console.log("Aufgabe 1")
//berechne das Volumen eines Quaders mit einer funktion

def volumen_quader(l, b, h):
    """
    Berechnet das Volumen eines Quaders.
    
    :param l: 5
    :param b: 3
    :param h: 4
    :return: Volumen des Quaders
    """
    return l * b * h


volumen = volumen_quader(laenge, breite, hoehe)
print(f"Das Volumen des Quaders beträgt: {volumen} Kubikeinheiten.")

console.log("Aufgabe 2")
//berechne brutto aus dem netto

function berechneBrutto (nettopreis,mehrwertsteuer){
    return nettopreis+mehrwertsteuer * nettopreis
}

console.log("bruttopreis:" +)

