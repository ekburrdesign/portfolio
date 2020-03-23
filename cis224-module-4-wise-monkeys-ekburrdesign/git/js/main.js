//Document ready function of jQuery object
$(function () {
    let $monkeyDiv = $('#wiseMonkey1');

    $('#b1').on('click', function () {
        let $class = $('#b1').find('img').attr('alt');
        $monkeyDiv.addClass($class);
    });
});
