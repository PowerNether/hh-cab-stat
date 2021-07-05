(function($) {

    $('.form-input__reset').on('click', function () {
        $(this).parent().find('input, textarea').val('');
    });
    $('select').formSelect();
    $('.newObjectForm-select').on('click', function () {
        $(this).parent().find('.newObjectForm-list').addClass('newObjectForm-list__active');
    });
    $('.newObjectForm-item').on('click', function () {
        $(this).parent('.newObjectForm-list').children().removeClass('newObjectForm-item__active');
        let item = $(this).text();
        $(this).parents('.form-input').find('input').val(item);
        $(this).addClass('newObjectForm-item__active');
        $('.newObjectForm-select').parent().find('.newObjectForm-list').removeClass('newObjectForm-list__active');
    });
    $(document).on('click', function (e) {
        let target = e.target.getAttribute('class');
        if (target != $('.newObjectForm-select').attr('class') && target != $('.newObjectForm-title').attr('class')) {
            $('.newObjectForm-list').removeClass('newObjectForm-list__active');
        }
    });
    $('.header-burger').on('click', function () {
        $('.header-burger').toggleClass('active')
        if ($('.header .menu').hasClass('active')) {
            $('.header .menu').addClass('close')
            setTimeout(function () {
                $('.header .menu').removeClass('active')
            }, 300)
        } else {
            $('.header .menu').removeClass('close')
            $('.header .menu').addClass('active')
        }
    });
    $('.siderbar-toggle').on('click', function () {
        $('.siderbar-toggle').toggleClass('active')
        if ($('.sidebar').hasClass('active')) {
            $('.sidebar').addClass('close')
            setTimeout(function () {
                $('.sidebar').removeClass('active')
            }, 300)
        } else {
            $('.sidebar').removeClass('close')
            $('.sidebar').addClass('active')
        }
    });
});

jQuery(document).ready(function() {

    jQuery('div.apply-datepicker>input').datepicker();
    jQuery('div.apply-datepicker>button.ok').click(function() {
        jQuery(this).closest('form').submit();
    });
    jQuery('div.apply-datepicker>button.clear').click(function() {
        let jinp = jQuery(this).parent().children('input');
        jinp.datepicker('hide');
        jinp.datepicker('setDate','');
    });
});