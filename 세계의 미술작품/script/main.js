$(document).ready(function(){
  $('nav ul li').on({
    'mouseover' : function(){
      $(this).find('.submenu').stop().slideDown();
    },
    'mouseleave' : function(){
      $(this).find('.submenu').stop().slideUp();
    }
  })

  var currentIndex = 0;

  setInterval(() => {
    if(currentIndex < 2){
      currentIndex++
    }else {
      currentIndex = 0
    }
    console.log(currentIndex);

    var move = -currentIndex * 303+'px';
    console.log(move);
  $('.slideh900').css('transform', 'translateY('+move+')');

  }, 2900);

})