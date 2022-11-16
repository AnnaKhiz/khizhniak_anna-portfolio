$(document).ready(function () {
    $("#callModal").on('click', function (e) {
        $('#modal').toggleClass('show');
        e.preventDefault();
    });

    $("#closeModal").on('click', function (e) {
        $('#modal').toggleClass('show');
        e.preventDefault();
    });

});


