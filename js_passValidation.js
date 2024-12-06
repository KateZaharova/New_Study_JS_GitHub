const submitBtn = document.getElementById('submit-btn');
const password = document.getElementById("password");
const passwordConf = document.getElementById("password-confirm");

submitBtn.addEventListener("click", () => {
	validatePassword(password);
});


function validatePassword(password) {

    let hasErrors = false;
    let errorMsg = '';

	if (!validateAtLeastSymbols(password.value, 12)) {
		errorMsg += 'Password should contain at least 12 symbols!\n';
		hasErrors = true;
	}

	if (!validateAtLeastOneLowerCaseSymbol(password.value)) {
		errorMsg += 'Password should contain at least 1 lower case symbol!\n';
		hasErrors = true;
	}

	if (!validateAtLeastOneUpperCaseSymbol(password.value)) {
		errorMsg += 'Password should contain at least 1 upper case symbol!\n';
		hasErrors = true;
	}

	if (!validateAtLeastOneNonAlphaNumericSymbol(password.value)) {
		errorMsg += 'Password should contain at least 1 non alpha numeric symbol!';
		hasErrors = true;
	}

    console.log('validation: ' + (hasErrors ? 'FAILED' : 'SUCCEED'));
	password.setCustomValidity(errorMsg);
    return !hasErrors;
    
};


function validateAtLeastSymbols(password, length) {
	return password.length >= length;
};

function validateAtLeastOneLowerCaseSymbol(password) {
	const regex = new RegExp('[a-z]');

	return regex.test(password);
}
function validateAtLeastOneUpperCaseSymbol(password) {
	const regex = new RegExp('[A-Z]');

	return regex.test(password);
}
function validateAtLeastOneNonAlphaNumericSymbol(password) {
	const regex = new RegExp('[^a-zA-Z\\d\\s]');

	return regex.test(password);
}
function showError(error) {
    passwordInput.setCustomValidity(error); 
	console.log(error);
}

