$(document).ready(function() {
    $('.likes').click(function() {
        if(this.src.match('like1')) {
            this.src = this.src.replace('like1', 'like2');
            const temp = document.querySelector('.dislikes');
                if (temp.src.match('dislike2')) {
                    temp.src = temp.src.replace('dislike2', 'dislike1');
                }
        }
        else {
            this.src = this.src.replace('like2', 'like1');
        }
    })
    $('.dislikes').click(function() {
        if(this.src.match('dislike1')) {
            const temp = document.querySelector('.likes');
                if (temp.src.match('like2')) {
                    temp.src = temp.src.replace('like2', 'like1');
                }
            this.src = this.src.replace('dislike1', 'dislike2');
        }
        else if (this.src.match('dislike2')){
            this.src = this.src.replace('dislike2', 'dislike1');
        }
    })
})
$(document).ready(function(){
    if (location.pathname.match('news_page')) {
        console.log('iwe');
        $('.menu.newss').css({
            'color':'#ff4d4d'
        });
    }
    if (location.pathname.match('studio_page')) {
        console.log('iwe');
        $('.menu.studioss').css({
            'color':'#ff4d4d'
        });
    }
    if (location.pathname.match('person_page')) {
        console.log('iwe');
        $('.menu.personss').css({
            'color':'#ff4d4d'
        });
    }
    if (location.pathname.match('history_page')) {
        $('.menu.historyy').css({
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