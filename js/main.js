$(document).ready(function () {

    let $btns = $('.project-btn button');

    $btns.click(function (e) {
        $('.project-btn button').removeClasss('active');
        e.target.classList.add('active');

        let selector = $('e.target').attr('data-filter');
        $('project-btn .grid').isotope({
            filter: selector
        });
        return false;

    });
    $('.project-btn #btn1').trigger('click');
});