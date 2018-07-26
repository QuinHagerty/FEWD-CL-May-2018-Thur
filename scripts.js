$(document).ready(function(){

  const mql = window.matchMedia("(min-width:769px)");

  //START site name return to top
  $('.return-to-top').click(function(){
    $('html,body').scrollTop(0)
  })
  //END site name return to top

  //START burger menu JS
  $('.flipBurger, .main-nav li').click(function(){
    if (!mql.matches) {
      $('.flipBurger').toggleClass('active');
      $('.main-nav').toggleClass('dropped');
    }
  })
})
