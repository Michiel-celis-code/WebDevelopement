# jQuery 
## 3. 
### 3.1.
#### ● Build a page with a button and a textfield that displays the amount of buttonclicks
```
	clicks = 0;
	$('button').click(function() {
		clicks += 1;
		$('.text span').html(clicks);
	});
```
### 3.2.
#### ● Build a page with two buttons `+` and `-` and a textfield that displays a number which gets raised and lowered by the buttons
```
	clicks = 0;
	$('#plus').click(function() {
		clicks += 1;
		$('.text span').html(clicks);
	});
	$('#min').click(function() {
		clicks -= 1;
		$('.text span').html(clicks);
	});
```
### 3.3.
#### ● Build a page with a button and a textfield in which the user enters a number
#### ● When the number is > 100 alert `less` | the number < 0 alert `more`| else alert `correct`
#### ● If the answer is correct, alert the amount of guesses the user has made.
```
	target = Math.ceil(Math.random() * 100);
	console.log(target);

	function check() {
		guess = parseInt($('#guess').val());

		if (guess == target) {
			$('.output').html('juist!');
		} else if (guess < target) {
			$('.output').html('meer');
		} else {
			$('.output').html('minder');
		}
	}

	$('#go').click(check);
```
### 3.4.
#### ● Build a page with Five buttons and a rectangle, each button performs an action on this rectangle.
* `Button 1` changes the `height` property by adding 10px, if it exeeds 100px, the property is reset to 10px.
* `Button 2` changes the `background-color` property to `green`
* `Button 3` changes the `background-color` property to its original
* `Button 4` `hide`s the rectangle
* `Button 5` `show`s the rectangle
```
	box = $('.square');
	up = $('#up');
	green = $('#green');
	reset = $('#colorReset');
	hide = $('#hide');
	show = $('#show');

	pos = box.position().top;


	up.click(function() {
		console.log(pos);
		if (box.position().top > 0) {
			pos -= 10;
		} else {
			pos = 100;
		}
		box.css('top', pos);
	});

	green.click(function() {
		box.css('background-color', 'green');
	});

	reset.click(function() {
		box.css('background-color', 'red');
	});

	hide.click(function() {
		box.hide();
	});

	show.click(function() {
		box.show();
	});
```
### 3.5.
#### ● Build a page with a rectangle
#### ● Make it move in 10px steps with the arrow buttons 
#### ● When it moves under the edge, it re-appears on the other side of the screen
```
	var box = $('.square');
	var area = $('.squareSpace');
	var html = $('html');

	var posy = box.position().top;
	var posx = box.position().left;
	var xmax = area.width() - box.width();
	var ymax = area.height() - box.height();

	html.keydown(function(event) {
		if (event.which == 37) {
			//left
			if (posx > 0) {
				posx -= 10;
			} else {
				posx = xmax;
			}
		} else if (event.which == 38) {
			//up
			if (posy > 0) {
				posy -= 10;
			} else {
				posy = ymax;
			}
		} else if (event.which == 39) {
			//right
			if (posx < xmax) {
				posx += 10;
			} else {
				posx = 0;
			}
		} else if (event.which == 40) {
			//down
			if (posy < ymax) {
				posy += 10;
			} else {
				posy = 0;
			}
		}

		box.css('left', posx);
		box.css('top', posy);
	});
```
