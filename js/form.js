
let imageCircle = document.getElementById('loading');
let hid = document.getElementById('hidden');


imageCircle.getAttribute('class');
let buttonText = document.getElementById('btnDefault');
buttonText.getAttribute('class');

let form = document.getElementById('form');
let formInputName = document.getElementById('name');
let formInputTel = document.getElementById('tel');
let formInputEmail = document.getElementById('email');


formInputName.addEventListener('keyup', function () {
	console.log(document.getElementById('name').value);
	const regexName = new RegExp('^[A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ_\-\\s]{2,10}$');
	const regexTwo = new RegExp('^([A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ]{2,10})+\\s+([A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ]{2,10})$');
	if ((document.getElementById('name').value.length) > 1) {
		if ((regexName.test(document.getElementById('name').value)) || (regexTwo.test(document.getElementById('name').value))) {
			console.log('введено имя');
		} else {
			console.log('введены запрещенные символы');
			alert('Имя должно содержить только буквы!');
			document.getElementById('name').value = document.getElementById('name').value.replace(/[^A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ_\-\s]/gm, '');
		}
	}
});


formInputTel.addEventListener('keyup', function () {
	console.log(document.getElementById('tel').value);
	const regexTel = new RegExp('^[0-9]{0,12}$');
	if ((document.getElementById('tel').value.length) > 1) {
		if (regexTel.test(document.getElementById('tel').value)) {
			console.log('введен номер телефона');
		} else {
			console.log('введены запрещенные символы - тел');
			alert('Номер телефона должен содержить только цифры!');
			document.getElementById('tel').value = document.getElementById('tel').value.replace(/[^\d]/gm, '');
		}
	}
});


formInputEmail.addEventListener('keyup', function () {
	console.log(document.getElementById('email').value);
	const regex = new RegExp('^[A-Za-z0-9_\-]+@+[A-Za-z0-9]+\\.+[A-Za-z]{2,6}$');
	if ((document.getElementById('email').value.length) > 1) {
		if (regex.test(document.getElementById('email').value)) {
			console.log('введен email');
		} else {
			console.log('введены запрещенные символы - email');
		}
	}
});

buttonText.addEventListener('click', function checkEmail() {
	setTimeout(function () {
		timeoutDelay();
	}, 7000);
	timeoutDelay();

});

function timeoutDelay() {
	hid.removeAttribute('class');
	buttonText.setAttribute('class', 'hidden');
	document.getElementById('btn').style.backgroundColor = '#EDEDF7';
	document.getElementById('btn').style.boxShadow = 'none';
}






