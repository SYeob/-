$(document).ready(function () {
  $('nav ul li').on({
    'mouseover': function () {
      $('.submenu').stop().slideDown();
    },
    'mouseout': function () {
      $('.submenu').stop().slideUp();
    }
  })


  var currentIndex = 0;
  setInterval(() => {
    if (currentIndex < 2) {
      currentIndex++
    } else {
      currentIndex = 0;
    }

    var move = currentIndex * -1200 + "px";
    $('.w3600').css({ 'transform': 'translateX(' + move + ')' })

  }, 3000);
  $('.gallery').hide();

  $('.notice h3:nth-child(1)').on('click', function () {
    $(this).addClass('on');
    $('.notice h3:nth-child(2)').removeClass('on');
    $('.notice ul').show();
    $('.gallery').hide();
  })
  $('.notice h3:nth-child(2)').on('click', function () {
    $(this).addClass('on');
    $('.notice h3:nth-child(1)').removeClass('on'); 
    $('.gallery').show();

  })

  $('.openModal').on('click',function(){
    $('.modal').show();
  })

  $('.close').on('click',function(){
    $('.modal').hide();
  })


})