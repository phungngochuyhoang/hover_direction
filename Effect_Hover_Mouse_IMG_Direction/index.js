$(document).ready(function() {
    $('.card').on('mouseenter', function(e) {
        let x = e.pageX - $(this).offset().left
        let y = e.pageY - $(this).offset().top
        $(this).find('span').css({
            top: y,
            left: x
        })
    })
    $('.card').on('mouseover', function(e) {
        let x = e.pageX - $(this).offset().left
        let y = e.pageY - $(this).offset().top
        $(this).find('span').css({
            top: y,
            left: x
        })
    })
})