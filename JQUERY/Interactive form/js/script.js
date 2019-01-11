$(document).ready(function() {
	$('#Pseudo').keyup(checkPseudo);
	$('#Password, #ConfirmPassword').keyup(checkPasswordMatch);
	$('#Email').keyup(checkEmail);
	$('body').hover(checkValids);
});
var validEmail;
var validPseudo;
var validPassword;


function checkPseudo() {
	var pseudoRegex = new RegExp('^[a-zA-Z0-9_-]{5,18}$');
	var pseudo = $('#Pseudo').val();

	if ($('#Pseudo').val().length < 5) {
		$('#PseudoStatus').html('Pseudo Too short');
		$('#Pseudo').css('background-color', '#f8c0ce');
		validPseudo = 0;
	} else {
		$('#Pseudo').css('background-color', '#f0e5bb');
		if (pseudoRegex.test(pseudo)) {
			$('#PseudoStatus').html('Pseudo Valid');
			$('#Pseudo').css('background-color', '#a2f3b5');
			validPseudo = 9;
		} else {
			$('#PseudoStatus').html('Pseudo has Invalid Characters');
			$('#Pseudo').css('background-color', '#f8c0ce');
			validPseudo = 0;
		}
	}
};

function checkPasswordMatch() {
	var passwordRegex = new RegExp('^[a-zA-Z0-9_-]{5,18}$');
	var passwordRegexsmall = new RegExp('^[a-zA-Z0-9_-]{0,5}$');
	var password = $('#Password').val();
	var confirmPassword = $('#ConfirmPassword').val();

	if ( !passwordRegex.test(password) ) {
		if ( passwordRegexsmall.test(password) ) {
			$('#PasswordStatus').html('Password Too short');
		} else {
			$('#PasswordStatus').html('Password Contains Invalid Characters');
		}
		$('#Password').css('background-color', '#f8c0ce');
		validPassword = 0;
	} else {
		$('#Password').css('background-color', '#f0e5bb');
		$('#PasswordStatus').html('Password is Good');
		if (password != confirmPassword) {
			if (!$('#ConfirmPassword').val()) {
				$('#ConfirmationStatus').html('Confirmation is Empty');
				$('#ConfirmPassword').css('background-color', 'white');
				validPassword = 0;
			} else {
				$('#ConfirmationStatus').html('Passwords do not match!');
				$('#ConfirmPassword').css('background-color', '#f8c0ce');
				validPassword = 0;
			}
		} else {
			$('#PasswordStatus').html('Passwords match.');
			$('#ConfirmationStatus').html('Passwords match.');
			$('#Password').css('background-color', '#a2f3b5');
			$('#ConfirmPassword').css('background-color', '#a2f3b5');
			validPassword = 9;
		}
	}
}

function checkEmail() {
	var emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');
	var email = $('#Email').val();

	if ( !emailRegex.test(email) ) {
		$('#EmailStatus').html('Email Invalid');
		$('#Email').css('background-color', '#f8c0ce');
		validEmail = 0;
	} else {
		$('#EmailStatus').html('Email Valid');
		$('#Email').css('background-color', '#a2f3b5');
		validEmail = 9;
	}
}

function checkValids() {
	var checkSum = validPseudo + validPassword + validEmail;
	checkSum = isNaN( checkSum ) ? 0 : checkSum;
	console.log(checkSum)
	if ( checkSum > 0 ){
		$(':input[type="submit"]').prop('disabled', false);
	} else {
		$(':input[type="submit"]').prop('disabled', true);
	}
}
