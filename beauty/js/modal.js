$(document).ready(function () {
    $("#callModal").on('click', function () {
        $('#modal').toggleClass('show');
        event.preventDefault();
    });

    $("#closeModal").on('click', function () {
        $('#modal').toggleClass('show');
        event.preventDefault();
    });

});


function sayThanks() {
    let nameFirst = document.getElementById('name').value;
    let mailEntered = document.getElementById('email').value;
    console.log(`name ${nameFirst}`);
    console.log(`email ${mailEntered}`);

    if ((nameFirst === '') || (mailEntered === '')) {
        alert('Заполните все поля!');
    } else {
        alert(`Ваше имя - ${nameFirst}, 
	Ваш email - ${mailEntered}. 
	Спасибо за подписку!`);

    }
    document.getElementById('formSub').reset();

}