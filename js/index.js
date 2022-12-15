// 배경 랜덤 색상 변경
window.setInterval(function(){

    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    
    $('body').css({
      'background-color' : randomColor,
    });

  }, 2000);

// 호버 시 콘텐츠 보임
$(document).ready(function(){

    $('.about02_title01').hover(function(){
    
        $('.show1').toggleClass('active');
    });
    $('.about02_title02').hover(function(){
    
    $('.show2').toggleClass('active');
    });
    $('.about02_title03').hover(function(){
    
    $('.show3').toggleClass('active');
    });
    
    });
