# Javascript
## 2 : Functions Arrays Operators Loops
![#15f0c5](https://placehold.it/15/15f015/000000?text=+) `proper format`
### 1. Writing a Function
* Create a function which Prompts for the Lenght and Width of a rectangle,
and Alerts the surface area 
```
	function surfaceRectagle(){
  	a = prompt("length rectangle : ");
  	b = prompt("width rectangle : ");
  	alert("rectangle surface : " + (a*b));
	}
```
Now for The Perimeter
```
	function perimeterRectangle(){
  		a = prompt("length rectangle");
  		b = prompt("width rectangle");
  		alert("rectangle perimiter measures " + (2*a+2*b));
	}
```
### 2. Writing A Function That Returns A Value
* Create a function which Prompts for the radius of a circle, and return this value.
* when clicking a button , alert this value.
```
	function surfaceCircle(){
		 radius	= prompt("Circle radius");
	area 	= Math.PI * radius * radius;
	alert("Circle surface equals " + area);
	return area
	}	
```
```
	object.onclick = alert(area);
```
### 3. Writing A Function with Parameters
* Create two global variables `a` and `b`, define them with `3` and `2`
* Create a `tripple` function that multiplies argument `x` with 3 and returns the outcome
* Create a `display` function that alerts the value returned by function `tripple` with arguments a and b.
```
	var a = 3;
	var b = 2;
```
```
	function tripple(x){
		return (x*3);
	}
```
```
	function display(){
		alert(tripple(a) + " and " + tripple(b));
	}
```
### 4. Using an Array
* Create an array `tab` with elements `-2`  `1` `4`
* Create a function `add`  with argument `x` that returns `x + 2`
* Create a `display`  function that alerts the value returned by function `add` given the first two values of `tab` (using the `lenght` property)
	
```
	var tab = [-1, 2, 4];
```
```
	function add(x){
		return x+2;
	}
```
```
	function display(){
	alert(add(tab[0]));
	temp = tab.length-1;
	alert(add(tab[temp]));
	}
```
### 5. Mathemathical Operators 
#### What are the outcomes of following operations ? Respecting `b = 2`
* `a = b++;` 		Result  `a = 2` 	`b = 3` 	`a = b | b = ( b + 1 )`
* `a = ++b;`		Result  `a = 3` 	`b = 3` 	`a =  ( b + 1 ) | b = ( b + 1 )`
* `a = b--;`		Result  `a = 2` 	`b = 1` 	`a = b | b = ( b - 1 )`
* `a = --b;`		Result  `a = 1` 	`b = 1` 	`a = b - 1 | b = b - 1`
* `a += b++;`		Result  `a = 2` 	`b = 3` 	`a = a + b  | b = ( b + 1 )`
* `a = 1;  a += ++b;`	Result  `a = 4` 	`b = 3` 	`a = a + (b + 1 ) | b = ( b + 1 )`
* `a = 1;  a -= b++;`	Result  `a = -1` 	`b = 3` 	`a = a - b | b = ( b + 1 )`
* `a = 1;  a -= ++b;`	Result  `a = -2` 	`b = 3` 	`a = a - ( b + 1 ) | b = ( b + 1 )`	
* `a = 1;  a += b--;`	Result  `a = 3` 	`b = 1` 	`a = a + b  | b = ( b - 1 )`	
* `a = 1;  a += --b;`	Result  `a = 2` 	`b = 1` 	`a = a + ( b - 1 )| b = ( b - 1 )`		
### 6. Calling a function that returns a Value
* Create an array `tab` with elements `-2`  `1` `4`
* Create a function `substract`  with argument `x` that substracts `x` with the first number of the input Array. Alert if the number is positive or negative.
* Create a `display`  function that alerts the value returned by function `substract` given the first and last values of `tab` (using the `lenght` property)
```
function subtract(x){
x = x-tab[0];
 if (x< 0){
  	alert("negatief getal!");
 } else if (x >= 0){
  		alert("Getal positief.");
	}
 	return x;
}
```
```
function display3(){
	alert(subtract(tab[0]));
	temp = (tab.length-1);
	alert(subtract(tab[temp]));
}
```
### 7. Make use of `switch`
* Create an button that triggers a function `makeChoice()`
* This function prompts the user to choose an option
```
1. 	Thank You
2. 	Hello
3. 	Good Bye
```
```
function makeChoice(){
num = prompt("1, 2 or 3?);
switch(num) {
case "1":
alert("1. Thank you");
break;
case "2":
alert("2. Hello");
break;
case "3":
alert("3. Good bye");
break;
default:
alert( "Make a Choice?");
}
}
```
### 8. Make use of `switch` and a `date object`
* Create an button that triggers a `weekday()` function and convert its value to day names with a `switch`
```
function weekday() {
	switch (new Date().getDay()) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
	}
	alert("Today is " + day);
}
```
### 9. Make use of a `while`  loop
* Create an button that triggers a function `testWhile()` 
* This function repeatedly asks the user to input a string, until one is received and displayed
```
function testWhile() {
	pmepls = prompt("gimme a string! gimme a string with a 'p'!");
	var i;
	while (pmepls.includes('p') == false) {
		pmepls = prompt("Try again! Gimme a string with a 'p'!");
		i++;
		if (i == 4) {
			alert("Are you dizzy?");
		}
	}
	alert("yeah \"" + pmepls + "\" indeed, my friend!");
}
```
### 10. Make use of a `for`  loop
* Create an button that triggers a function `sum`  that prompts the user three times to input a number and alerts the sum 
```
function sum() {
	var som = 0;
	for (var i = 0; i < 3; i++) {
		som += parseInt(prompt("Gimme the " + (i + 1) + "st one!"));
	}
	alert("And the sum is...");
	alert(som + "!");

}
```
### 11. Make use of `loops`
* Create an button that triggers a function `calcAverage()`  that prompts the user to input whole numbers >= 0
* Alert the user if the input numbers are faulty, and prompt again
* Display the average of all numbers inputted so far, and the amount of numbers
```
function calcAverage() {
	var nums = [];
	while (true) {
		var temp = prompt("please enter a positive integer.");
		temp = parseFloat(temp);
		var avr = 0;
		if (temp % 1 == 0 && temp >= 0) {
			nums.push(temp);
			console.log(nums);
			var tempAvr = 0;
			for (var i = 0; i < nums.length; i++) {
				tempAvr += nums[i];
				console.log(tempAvr);
			}
			avr = tempAvr / nums.length;
			console.log(avr);
			alert("Current numbers are: " + nums + ", with a current average of " + avr + ".");
		} else {
			alert("Try again.");
		}
		if (confirm("add another number?") == false) {
			break;
		}
	}
	alert("The final numbers are: " + nums + ", with an average of " + avr + ".");
}
```
### 12. Celsius, Fahrenheit and Kelvin Conversion App
* Create an button that triggers a function `TemperatureConversion`  that prompts the user to input a number that selects an option.
```
0.	End of the program
1.	Celsius to Fahrenheit
2.	Celsius to Kelvin
3.	Fahrenheit to Celsius
4.	Fahrenheit to Kelvin
5.	Kelvin to Celsius
6.	Kelvin to Fahrenheit
```
* Prompt the user to input the initial temperature to be converted with following formulas
```
[°F] = ([°C] x 9/5) + 32
[K] = [°C] + 273,15
[°C] = ([°F] - 32) / (9/5)
[K] = (([°F] - 32) x (5/9)) + 273,15
[°C] = [K] - 273,15
[°F] = ([K] x 9/5) - 459,67

where [K] Represents the temperature in degrees Kelvin
where [°F] Represents the temperature in degrees Fahrenheit
where [°C] Represents the temperature in degrees Celsius
```
```
function temperatureConversion() {
	cont = true;
	while (cont == true) {
		var how = prompt("What type of conversion would you like to do?\n0. end the program\n1. for Celcius to Fahrenheit.\n2. Celcius to Kelvin.\n3. Fahrenheit to Celcius.\n4. Fahrenheit to Kelvin.\n5. Kelvin to Celcius.\n6. Kelvin to Fahrenheit.");
		if (how == 0) {
			break;
		} else if (how == 1) {
			var c = prompt("which temperature in degrees Celcius would you like to convert to Fahrenheit?");
			c = parseInt(c);
			var f = (c * 9 / 5) + 32;
			cont = confirm("you have converted " + c + "°C to " + f + "°f.\nWould you like to do another conversion?");
		} else if (how == 2) {
			var c = prompt("which temperature in degrees Celcius would you like to convert to Kelvin?");
			c = parseInt(c);
			var k = c + 273.15;
			cont = confirm("you have converted " + c + "°C to " + k + "°K.\nWould you like to do another conversion?");
		} else if (how == 3) {
			var f = prompt("which temperature in degrees Fahrenheit would you like to convert to Celcius?");
			f = parseInt(f);
			var c = ([f] - 32) / (9 / 5);
			cont = confirm("you have converted " + f + "°f to " + c + "°C.\nWould you like to do another conversion?");
		} else if (how == 4) {
			var f = prompt("which temperature in degrees Fahrenheit would you like to convert to Kelvin?");
			f = parseInt(f);
			var k = ((f - 32) * (5 / 9)) + 273.15;
			cont = confirm("you have converted " + f + "°f to " + k + "°K.\nWould you like to do another conversion?");
		} else if (how == 5) {
			var k = prompt("which temperature in degrees Kelvin would you like to convert to Celcius?");
			k = parseInt(k);
			var c = [k] - 273.15;
			cont = confirm("you have converted " + k + "°K to " + c + "°C.\nWould you like to do another conversion?");
		} else if (how == 6) {
			var k = prompt("which temperature in degrees Kelvin would you like to convert to Fahrenheit?");
			k = parseInt(k);
			var f = ([k] * 9 / 5) - 459.67;
			cont = confirm("you have converted " + k + "°K to " + f + "°f.\nWould you like to do another conversion?");
		} else {
			alert("from 0 to 6 dude it's not supposed to be that hard.");
		}
	}
}
```
### 13. BMI Calculation App
* Create an button that triggers a function `calcBMI`  that prompts the user to input their height and weight to calculate and alert their BMI
```
function calcBMI() {
	var height = prompt("how tall are you, please?");
	height = parseFloat(height);
	var weight = prompt("how much do you weigh, please.");
	weight = parseFloat(weight);
	var bmi = weight / (height * height);
	bmi = Number(bmi).toFixed(2);
	alert("your have a bmi of: " + bmi);
	if (bmi < 16.5) {
		alert("your weightclass is: underfed");
	} else if (bmi < 18.5) {
		alert("your weightclass is: underweight");
	} else if (bmi < 25) {
		alert("your weightclass is: normal weight");
	} else if (bmi < 30) {
		alert("your weightclass is: Overweight");
	} else if (bmi < 35) {
		alert("your weightclass is: class I obesity");
	} else if (bmi < 40) {
		alert("your weightclass is: class II obesity");
	} else {
		alert("your weightclass is: morbidly obese");
	}
}
```
