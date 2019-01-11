# jQuery 
## 4. 
### 4.1. Rock Paper Scissor
#### ● Make a `Rock` `Paper` `Scissor` game
* The user presses a button to start the game, after which a quick choice needs to be made in a countdown like fashion
* use your creativity with stockphoto images so it looks like the actual game
```
        Create a Project Folder with the HTML CSS JAVASCR and resources
```
### 4.2. Bonus Calculator
#### ● Make a page with forms in which the Employee enters its `Income`, `Gender`, and amount of `children` to care for.
#### ● Calculate these deductions on the `Income`
* Expenses `18%`
* Insurance `7%`
* Taxes `5%`
#### ● Calculate these tax reductions on the `Income`
* If the Employee is Female `-2%`
* If the Employee cares for more than 3 children `-1%`
* If the Employee cares for more than 3 children `-2%`
```
        $(document).ready(function(){
            $(bereken).click(function(){
               var Pay=$('#Pay').val();        
               let Uitgaven = (Pay/100) * 18;
               let Verzekering = (Pay/100) * 7;
               let Bijdrage = (Pay/100) * 5; 
               let Inkomen = Pay - Uitgaven - Verzekering - Bijdrage;
               var Sex=$('#Sex').val();
               if (Sex="F"){
                  Inkomen = Inkomen - ((Inkomen/100)*2);
               }
               var Kids=$('#Kids').val();
               if (Kids='3'){
               Inkomen = Inkomen - ((Inkomen/100)*1);
               }   
               else if (Kids>=4){
               Inkomen = Inkomen - ((Inkomen/100)*2);
               }
               console.log(Inkomen);
            });

        });
```
### 4.3. Contact Form
#### ● Make a page with forms in which the user enters its, `Name`, `Surname`, `Email`, `Phone number`.
#### ● Use RegEx to validate the inputs `Email` and ´Phone number`
```
        $(document).ready(function() {
          namePattern = /[^a-z_-]/i;
          numPattern = /[\D]/;
          mailPattern = /[\w.]+@[\w.]+\.[\w]{2,4}$/i;

          function validate() {
            $validated = $('#validated');

            $validated.html("");

            var naam = $('#naam').val();
            var correctNaam = validateName(naam);
            if (!correctNaam) {
              $validated.append("Please don't use any special characters in your name. </br>");
            }
            var voornaam = $('#voornaam').val();
            var correctVoornaam = validateName(voornaam);
            if (!correctVoornaam) {
              $validated.append("Please don't use any special characters in your first name. </br>");
            }
            var email = $('#email').val();
            var correctEmail = validateEmail(email);
            if (!correctEmail) {
              $validated.append("Please enter a valid email.</br>");
            }
            var telefoon = $('#telefoon').val();
            var correctTelefoon = validateNumber(telefoon);
            if (!correctTelefoon) {
              $validated.append("Please enter a valid Number.</br>");
            }
            if (correctNaam == true && correctVoornaam == true && correctEmail == true && correctTelefoon == true) {
              $validated.html("Thanks.");
            }
          }

          function validateName(naam) {

            var validate = namePattern.test(naam);
            validate = !validate;
            return validate;
          }

          function validateEmail(email) {
            var validate = mailPattern.test(email);
            console.log(validate);
            return validate;
          }

          function validateNumber(num) {
            var validate = numPattern.test(num);
            validate = !validate;
            return validate;
          }
          $('#register').click(validate);
        });
```
### 4.4. Personal Form
#### ● Make a page with forms in which the user enters, `Name`, `Surname`, `BirthDate`, `BirthPlace`, `employment`, `employment location`.
#### ● Make a Button that generates a short presentational sentence including this information.
* Example inputs: Lesley Forn, 11/11/1987, Amsterdam, Coach, Genk
* Example Output: Lesley Forn, Born on 11/11/1987 in Amsterdam, Currently employed as Coach in Genk.
```
        $(document).ready(function() {
          function generate() {
            $biography = $('#biography');
            naam = $('#naam').val();
            voornaam = $('#voornaam').val();
            datum = $('#birthDate').val();
            plaats = $('#birthPlace').val();
            werk = $('#work').val();

            //    biography = ('%s %s, Geboren op %s in %s, momenteel een %s.', naam, voornaam, datum, plaats, werk);

            $biography.html(naam + " " + voornaam + ", Geboren op " + datum + " in " + plaats + ", momenteel een " + werk + ".");
          }
          $('#generate').click(generate);
        });
```
