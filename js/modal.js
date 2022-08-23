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


