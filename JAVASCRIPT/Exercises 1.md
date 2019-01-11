# Javascript
## 1 : Prompt and Alert
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Repetitive` ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `Sequence fault`![#15f0c5](https://placehold.it/15/15f015/000000?text=+) `proper format`
### 1. Defining a Variable
* Define a Variable and show it in an Alert
```
	var variable 	= 99;
	alert(variable);
```
### 2. Defining an Object
* Define Three Objects: name, firstname and city.
```
	let xname 	= {word:"Name 		: ", value:"Doe" };
	let xfirstname 	= {word:"Firstame 	: ", value:"John"};
	let xcity 	= {word:"City 		: ", value:"Genk"};
```
* And Show them in an Alert, each fitting one line.
```
 	 alert(
		xname.word + xname.value + '\n' +
		xfirstname.word + xfirstname.value + '\n' +
		xcity.word + xcity.value + '\n'
  	);
```
### 3. Defining a Variable by prompting
* Prompt input for the users name, Then Alert "Hello, " followed by the name.
```
	var name	= prompt("name :");
	alert("Hello " + name + "!");
```
### 4. Defining objects by prompting
* Repeat 3. , but also ask for firstname and city.
```
	var xinit 		= {word:"Init 		: ", value:"null" };
	var xname 		= {word:"Νame 	: ", value:"Doe" };
	var xfirstname 		= {word:"Firstame 	: ", value:"John"};
	var xcity 		= {word:"City 		: ", value:"Genk"};

	var name 		= prompt("name : ");
	var firstname 		= prompt("firstname : ");
	var city 			= prompt("city : ");

	xname.value		= name;
	xfirstname.value	= firstname;
	xcity.value		= city;
```
```
 	 alert(
		xname.word + xname.value + '\n' +
		xfirstname.word + xfirstname.value + '\n' +
		xcity.word + xcity.value + '\n'
  	);
```

### 5. Defining Variables by prompting 
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Repetitive`
* Prompt the user to input two numbers, multiply them and Alert.
```
	var numberOne 	= prompt("First Number : ");
	var numberTwo 	= prompt("Second Number : ");
	alert( numberOne * numberTwo)
```
### 6. Linking a file in HTML , Defining Variables by prompting, Applying some math on them 
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Repetitive` ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `Sequence fault`
* In your html link a file
* In which you create a function that alerts the modulo of two numbers.
```
  	<script src="myscripts.js"></script>
```
```
  	var numberOne	= prompt("First Number : ");
  	var numberTwo	= prompt("Second Number : ");
  	alert("The Modulo of " + numberOne + " and " + sn + " is: " + (numberOne%numberTwo));
```
### 7. Defining Variables by prompting, Applying some math on them
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Repetitive`
* Prompt the users Lenght and BirthYear, and perform following calculations on them.
* (((( Lenght * 2 ) + 5 ) * 50 ) - Birthyear ) + 1766
```
	var lenght 		= prompt("Your Lenght in cm :");
	var birthyear 		= prompt("Your BirthYear :");
	var strangenumber	= (((( lenght * 2 ) + 5 ) * 50 ) - birthyear ) + 1766 ;
	alert(strangenumber);
```
### 8. Defining Variables by prompting, Applying some math on them
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Repetitive`
* Prompt the user for their birthyear, and conclude if they are an adult.
```
	var birthyear 	= prompt("Your BirthYear : ")
	var today 	= new Date();
	var age 	= today.getFullYear() - birthyear;

	if (age > 18){	alert("u are an adult");	}
	else {	alert("u are a minor");	}
```
## SUMMARY
### Defining variables | objects, Prompting their Values
```
  	var xname 	= {word:"NAME	: ", value:"null" };
	var NAMEvalue	= prompt("name : ");
	xname.value	= NAMEvalue;
```
### Alerting on multiple lines with \n Newline character
```
 	 alert(
		xname.word + xname.value + '\n' +
		xfirstname.word + xfirstname.value + '\n' +
  	);
```
