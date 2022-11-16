
let imageCircle = document.getElementById('loading');
let hid = document.getElementById('hidden');
const buttonSend = document.getElementById('btn');

imageCircle.getAttribute('class');
let buttonText = document.getElementById('btnDefault');
buttonText.getAttribute('class');

const form = document.getElementById('form');
const formInputName = document.getElementById('name');
const formInputTel = document.getElementById('tel');
const formInputEmail = document.getElementById('email');
const messageWritten = document.getElementById('message');


formInputName.addEventListener('keyup', function () {
	const regexName = new RegExp('^[A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ_\-\\s]{2,10}$');
	const regexTwo = new RegExp('^([A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ]{2,10})+\\s+([A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ]{2,10})$');
	if (formInputName.value.length > 1) {
		if (!((regexName.test(formInputName.value)) || (regexTwo.test(formInputName.value)))) {
			alert('Имя должно содержить только буквы!');
			formInputName.value = formInputName.value.replace(/[^A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ_\-\s]/gm, '');
		}
	}
});


formInputTel.addEventListener('keyup', function () {
	const regexTel = new RegExp('^[0-9]{0,12}$');
	if (formInputTel.value.length > 1) {
		if (!regexTel.test(formInputTel.value)) {
			alert('Номер телефона должен содержить только цифры!');
			formInputTel.value = formInputTel.value.replace(/[^\d]/gm, '');
		}
	}
});


formInputEmail.addEventListener('keyup', function () {
	//const regex = new RegExp('^[A-Za-z0-9_\-]+@+[A-Za-z0-9]+\\.+[A-Za-z]{2,6}$');
	//const regex = new RegExp('^[A-Za-z0-9\.\_\-]+@[A-Za-z]+\.[A-Za-z]+\.[A-Za-z]+$');
	const regex = new RegExp('^[A-Za-z0-9\\.\\_\\-]+@[a-z\\.]+$');
	if (formInputEmail.value.length > 1) {
		if (!regex.test(formInputEmail.value)) {
			console.error('email - entered forbidden symbols');
		}
	}
});

form.addEventListener('submit', (e) => {
	e.preventDefault()
	setTimeout(function () {
		timeoutDelay();
		setTimeout(() => {
			hid.setAttribute('class', 'hidden');
			buttonText.removeAttribute('class', 'hidden');
			buttonText.innerText = 'Successfully sent';
			buttonSend.style.backgroundColor = '#0085FF';
			buttonSend.style.boxShadow = '0px 0px 20px rgb(36 163 255 / 50%)';
			formInputEmail.value = '';
			formInputTel.value = '';
			formInputName.value = '';
			messageWritten.value = '';
			setTimeout(() => {
				buttonText.innerText = 'Send message';
			}, 1700)
		}, 1500);
	}, 1000);
});


function timeoutDelay() {
	hid.removeAttribute('class');
	buttonText.setAttribute('class', 'hidden');
	buttonSend.style.backgroundColor = '#EDEDF7';
	buttonSend.style.boxShadow = 'none';
}






