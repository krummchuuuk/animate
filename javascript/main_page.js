/*Slider*/
function main(){
    const slides = document.querySelectorAll('.slide'),
      points = document.querySelectorAll('.point'),
      slides_wrapper = document.querySelectorAll('.slide-wrapper');

    let index=0;
    const active_slide = counter => {
        for(slide of slides) {
            slide.classList.remove('active');
        }
        slides[counter].classList.add('active');
    }

    const active_point = counter => {
        for(point of points) {
            point.classList.remove('active');
        }
        points[counter].classList.add('active');
    } 

    const change_slide = counter => {
        active_slide(counter);
        active_point(counter);
    }

    points.forEach((item, index_point) => {
        item.addEventListener('click',()=> {
            index = index_point;
            change_slide(index_point);
        })
    })

    const next_slide = () => {
        if (index == slides.length-1) {
            index = 0;
            change_slide(index);
        }
        else {
            index++;
            change_slide(index);
        }
    }

    const auto = setInterval(next_slide, 6500);
}
if (document.readyState == 'loading')
{
    document.addEventListener("DOMContentLoaded", main);
}
else
{
    main();
}

/*Buttons*/
function to_main() {
    window.location.href = '../html/index.html'
}
function to_news() {
    window.location.href = '../html/news_page/news_page.html'
}
function to_history() {
    window.location.href = '../html/history_page/history_page.html'
}
function to_studio() {
    window.location.href = '../html/studio_page/studio_page.html'
}
function to_person() {
    window.location.href = '../html/person_page/person_page.html'
}


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
