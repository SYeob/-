$(document).ready(function () {
  $('nav ul li').on({
    'mouseover': function () {
      $(this).find('.submenu').stop().slideDown(300);
    },
    'mouseleave': function () {
      $(this).find('.submenu').stop().slideUp(200);
    },
  })

  var currentIndex = 0;
  $(".slideImg:gt(0)").css('display', 'none')

  setInterval(() => {
    if (currentIndex < 2) {
      currentIndex++
    } else {
      currentIndex = 0;
    }
    console.log(currentIndex);
    $(".slideImg").fadeOut();
    $('.slideImg:nth-child(' + (currentIndex + 1) + ')').fadeIn();


  }, 2900);


  $(".gallery-wrap h3").on('click', function () {
    $(this).css('background', 'red');
    $(".notice-wrap h3").css('background', 'grey');
    $(".gallery-wrap ul li").css('display','block');
    $(".notice-wrap ul li").css('display','none');


  })
  $(".notice-wrap h3").on('click', function () {
    $(this).css('background', 'red');
    $(".gallery-wrap h3").css('background', 'grey');
    $(".notice-wrap ul li").css('display','block');
    $(".gallery-wrap ul li").css('display','none');

  })

  $('.modal-inner h5').on('click',function(){
    $('.modal-bg').css('display','none');
  })
  $('.modal').on('click',function(){
    $('.modal-bg').css('display','block');
  })





})