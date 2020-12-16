$(document).ready(function(){
if (location.pathname.match('studio_page')) {
    console.log('iwe');
    $('.menu.studioss').css({
        'color':'#ff4d4d'
    });
}
})
$(document).ready(function(){
    $('.menu_icon').click(function()
    {
        if ($('.full').css("display") == "block") {
            $('.full').css("display", "none");
            $('.not_full').css("display", "block")
        }
        else {
            $('.full').css("display", "block");
            $('.not_full').css("display", "none")
        }

    })
    $(window).resize(function()
    {
        console.log(document.documentElement.clientWidth)
        if (document.documentElement.clientWidth > 884)
        {
            $('.full').css("display", "block")
        }
    })
})
function to_post_1() {
    window.location.href = '../studio_page/post_1.html'
}
function to_post_2() {
    window.location.href = '../studio_page/post_2.html'
}