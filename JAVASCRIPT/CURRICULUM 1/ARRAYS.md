# Arrays
### Optellen
 - Creëer een array die de volgende waarden bevat: ``1, 2, 3, 3, 4, 5, 6, 7, 8, 9``.
 - Maak een lus die al deze waarden bij elkaar optelt.
```
function oef1() {
	count = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
	var sum = 0;
	for (var i = 0; i < 9; i++) {
		sum += count[i];
	}
	console.log("de sum of", count, "is:");
	console.log(sum);
}
```
### De beste keuze
 - Maakt een array aan die 3 namen van acteurs bevat.
 - Geef elke acteur weer via de console. Bijv: "Nummer 1 is Stalone".
```
function () {
	celeb = ["Tom", "Daniel", "Rupert"];
	for (var i = 0; i < celeb.length; i++) {
		if (i == 1) {
			place = "eerste"
		} else if (i == 2) {
			place = "tweede"
		} else {
			place = "derde"
		}
		console.log("de " + place + " is " + celeb[i] + ".");
	}
}
```
### Klonen
 - Maak een array met de volgende waarden: "Mario", "Luigi", "Peach".
 - Dupliceer de array en voeg er "Bowser" aan toe.
```
function () {
	var bros = ["Mario", "Luigi", "Peach"]
	var bros2 = bros.slice(0);
	bros2.push("Bowser");
	console.log("super Array: " + bros + "\nsuper Array 2 - electric boogaloo: " + bros2);
}
```
