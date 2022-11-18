$(document).ready(function () {

    $("#callModal").on('click', (event) => {
        $('#modal').addClass('show');
        $('body').addClass('fixed');
        $('.modal__registration-block').addClass('scroll');
        event.preventDefault();
    });

    $("#closeModal").on('click', (event) => {
        $('#modal').removeClass('show');
        $('body').removeClass('fixed');
        $('.modal__registration-block').removeClass('scroll');
        event.preventDefault();
    });
});