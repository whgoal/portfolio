// 상단바
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function(event){
didScroll = true;
});
setInterval(function() {
if (didScroll) {
    hasScrolled();
    didScroll = false;
}
}, 250);
function hasScrolled() {
var st = $(this).scrollTop();
if(Math.abs(lastScrollTop - st) <= delta)
    return;
if (st > lastScrollTop && st > navbarHeight){
    $('header').removeClass('nav-down').addClass('nav-up');
} else {
    if(st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
    }
}
lastScrollTop = st;
}
$(".scroll_move").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500,'swing');
});

// 랜덤 색상 변경
function change() {
    $(".text").css({
      color: "black",
      transition: "color 5s"
    });
  }
  
  function defaultColor() {
    setTimeout(change, 5000), clearTimeout(change);
  }
  
  $(".text").hover(function() {
    $(this).css({
      color: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
      transition: "color 0.1s"
    });
    defaultColor();
  });



