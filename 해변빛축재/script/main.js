$(document).ready(function(){
    $('nav ul li').on({
        'mouseover': function(){
            $(this).find('.submenu').stop().slideDown();
        },
        'mouseleave': function(){
            $(this).find('.submenu').stop().slideUp();
        }
    })
    $('.slideImg h2:gt(0)').hide();

    var currentIndex = 0;
    setInterval(() => {
        if(currentIndex < 2) {
            currentIndex++
        }else {
            currentIndex = 0
        }
        console.log(currentIndex)

        var move = currentIndex * -800+'px';
        $('.slideImgWrap').css('transform', 'translateX('+move+')');
        $('.slideImg h2').eq(currentIndex).show();
    }, 3000);

    $('.gallery').hide();
    $('#notice-gallery h3:nth-child(1)').css('background', 'red');
    $('#notice-gallery h3:nth-child(1)').on('click',function(){
        $(this).css('background', 'red');
        $('#notice-gallery h3:nth-child(2)').css('background', 'grey');
        $('.gallery').hide();
        $('.notice').show();
    })
    $('#notice-gallery h3:nth-child(2)').on('click',function(){
        $(this).css('background', 'red');
        $('#notice-gallery h3:nth-child(1)').css('background', 'grey');
        $('.gallery').show();
        $('.notice').hide();
    })

    $('.modalBtn').on('click',function(){
        $('.modal').show();
    })

    $('.closeBtn').on('click',function(){
        $('.modal').hide();
    })


})