$(function () {
    $('.switch-btn').click(function () {
        $(this).toggleClass('switch-on');
        if ($(this).hasClass('switch-on')) {

            $("#switcher-label-1").removeClass('red-text');
            $("#switcher-label-2").addClass('red-text');


            $(this).trigger('on.switch');
        } else {
            $(this).trigger('off.switch');
            $("#switcher-label-1").addClass('red-text');
            $("#switcher-label-2").removeClass('red-text');
            //$("#header-bg").css("background-image", 'url("./img/bg-grad.png")');

        }
    });
    $('.switch-btn').on('on.switch', function () {
        $($(this).attr('data-id')).removeClass('bl-hide');
    });
    $('.switch-btn').on('off.switch', function () {
        $($(this).attr('data-id')).addClass('bl-hide');
    });
});