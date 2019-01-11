#Variabelen

## Leerdoelen
- Wat is een variabele ?
- Hoe declareer je een variabele ?
- Wat zijn de drie soorten variabelen ? 
- Wanneer gebruik je welke variabele ?
- Hoe geef je een variabele een correcte naam ?

## Aan de slag

Bij het schrijven van code is het opslaan van gegevens zeer belangrijk. Dit kan veel herhaling in je code voorkomen. Net zoals heel wat andere programmeertalen beschikt JavaScript over variabelen. En deze zijn essentieel bij het programmeren.

```js
const restaurant = 'Pizzeria Del Piero';
```

Een variabele is als het ware een gelabelde doos waar je data in kan opslaan. Wanneer je deze data later wil hergebruiken of aanpassen hoef je enkel naar het label van deze doos te verwijzen. In het voorbeeld hierboven gebruiken we een variabele met de naam *restaurant* om de naam van een restaurant op te slaan.

## Variabelen in JavaScript

In JavaScript maak je een variabele aan door deze te declareren.  In veel programmeertalen is het statement waarmee je een variabele declareert afhankelijk van het type data. In JavaScript is dit niet het geval, we zeggen dat JavaScript een **loosely typed** programmeertaal is.
Er zijn drie manieren om een variabele te declareren.

## Declareren

### `var`

Tot ES6 was dit de standaard manier om een variabele te declareren. Een variabele gedeclareerd met `var` is overal in je code beschikbaar en kan ook aangepast worden. In vele (oude) oefeningen en voorbeelden kan je dit nog terugvinden.

```js
var lengte = 170;
```

### `let`

Met de invoering van ES6 werd een alternatief voor `var` geintroduceerd: `let`. Net zoals bij `var` kan de inhoud van een `let` variabele aangepast worden. Waar een variabele van het type `var` overal in je code beschikbaar is, bestaat een `let` variabele enkel tussen de curly brackets `{}` waar deze gedeclareerd werd. Met andere woorden een `let` variabele is **block scoped**.

```js
let x = 1;

if(true){
  let x = 2;

  console.log(x); // output: 2
}

console.log(x); // output: 1
```
In dit voorbeeld declareren we een variabele `x` en stellen deze gelijk aan 1. In het `if statement` iets verder in de code declareren we een tweede variabele met een zelfde naam en type, maar met een andere waarde. We loggen deze variabelen in de console en zien telkens een andere output. Kan je verklaren hoe dit komt?

### `const`

Naast `let` werd nog een tweede keyword ingevoerd om variabelen te declareren: `const`. Net zoals een `let` variabele is `const` **block scoped**. Een `const` variabele kan echter niet aangepast worden na het initialiseren. Daarom wordt een `const` variabele bij het declareren onmiddellijk geïnitialiseerd.

```js
const naam = 'jantje';

console.log('Mijn naam is' + naam); // output: Mijn naam is Jantje

naam = 'Pietje'; // dit zal een foutmelding geven
```

### `var`, `let` of `const` ?

Om problemen met je code te vermijden wordt het gebruik van `var` afgeraden  
>Het is goeie gewoonte om je variablen met `const` te declareren. Wanneer je later merkt dat deze variabele nog aangepast moet worden pas je deze aan naar een `let` variabele.

## Initialiseren

Het initialiseren van een variabele gebeurt wanneer data aan de variabele wordt toegewezen. Bij een `const` variabele gebeurt dit onmiddellijk bij het declareren. Een `let` variabele moet bij het declareren niet onmiddellijk geinitialiseerd worden.  

Wanneer we een variabele initialiseren kunnen we dit met verschillende datatypes doen. Hierover later meer.

## Naamgeving

In JavaScript gelden volgende regels voor de naamgeving van een variabele:
- De naam kan bestaan uit letters, cijfers, `$` en `_`
- De naam begint niet met een cijfer

Daarnaast is het een goeie gewoonte om lange variabele namen te **camelcasen**. Dit wil zeggen dat je de eerste letter van elk nieuw woord in de naam van de variabele capitaliseert.

```js
const mijnVoorNaam = 'Jantje';
const mijnNaam = 'Jansens';
```

**Oefening**: [Variabelen](./Oefeningen.md)
