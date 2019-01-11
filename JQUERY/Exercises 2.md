# JQuery
## 2. Calling Various Actions
### 2.1.
#### ● By clicking the button `#click-me`, an `alert` dialog appears.
```
	$('#click-me').click(function() {
		alert('\'Message');
	});
```
### 2.2.
#### ● By double-clicking the `#image`, change its property `width` to 500px
```
	$('#image').dblclick(function() {
		$('#image').css('width', '500px');
	});
```
### 2.3.
#### ● By clicking the links `#show` and `#hide`, `show` and `hide` the text respectively
```
	$('#show').click(function() {
		$('#text').show();
	});

	$('#hide').click(function() {
		$('#text').hide();
	});
```
### 2.4.
#### ● By clicking the color buttons `#red``#green``#blue`, change the text `color` of the div  respectively
```
	var text = $('#text');

	function changeColorRed() {
		text.css('color', 'red');
	}
	function changeColorGreen() {
		text.css('color', 'green');
	}
	function changeColorBlue() {
		text.css('color', 'blue');
	}
	$('#red').click(changeColorRed);
	$('#green').click(changeColorGreen);
	$('#blue').click(changeColorBlue);
```
### 2.5.
#### ● On focusing the div's `#firts_name` | `#name`, change its border property to `1px solid green`
#### ● On focusout the div's, change each's border property to `1px solid red`
```
	$('#first_name').focus(function() {
		$(this).css({
			'border': '1px solid green',
			'box-shadow': 'none'
		});
	});
	$('#name').focus(function() {
		$(this).css('border', '1px solid green');
	});
	$('#first_name').blur(function() {
		$(this).css('border', '1px solid red');
	});
	$('#name').blur(function() {
		$(this).css('border', '1px solid red');
	});
```
### 2.6.
#### ● When hovering the colored buttons`#red``#green``#blue`, change the property color of `#text` respectively
#### ● when leaving the colored buttons`#red``#green``#blue`, change the property color of `#text` back to black
```
	var text = $('#text');

	function changeColorGreen() {
		text.css('color', 'green');
	}
	function changeColorRed() {
		text.css('color', 'red');
	}
	function changeColorBlue() {
		text.css('color', 'blue');
	}
	function changeColorBlack() {
		text.css('color', 'black');
	}
	$('#green').hover(changeColorGreen);
	$('#red').hover(changeColorRed);
	$('#blue').hover(changeColorBlue);
	$('.color').mouseleave(changeColorBlack);
```
### 2.7. Summary ?
#### ● View the HTML file and perform the actions described within
```
	$(document).ready(function() {
		/* On click: Enlarge the font (120%) */
		$(this).click(function() {
			$('body').css('font-size', '1.2em');
		});

		/* On click: Decrease the font size (80%) */
		$(this).click(function() {
			$('body').css('font-size', '0.8em');
		});

		/* On click: Bold or normalize the green words */
		$('.green').click(function() {
			$('.green').toggleClass('bold');
			$('.green').css('font-weight', '400');
			$('.bold').css('font-weight', 'bold');
		});

		/* On click: Bold or normalize the green words */
		//???

		/* On click: Replace the logo with another image */
		$('#content img').click(function() {
			if ($(this).attr('src') == "images/jquery-logo.png") {
				$(this).attr('src', "images/koala.jpg");
			} else {
				$(this).attr('src', "images/jquery-logo.png");
			}
		});

		/* On hover: Display the URL of links in a tooltip when hovering over links */
		$(document).tooltip();

		/* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */

	});
```
