$(document).ready(function(){

  const mql = window.matchMedia("(min-width:769px)");

  //START site name return to top
  $('.return-to-top').click(function(){
    $('html,body').scrollTop(0)
  })
  //END site name return to top

  //START burger menu JS
  $('.flipBurger').click(function(){
    $('.flipBurger').toggleClass('active')
  })
  //END burger menu JS

  //START burger menu drop down
  $('.flipBurger-container, .main-nav li').click(function(){
    if (!mql.matches) {
    $('.main-nav').toggleClass('dropped')
    }
  })
  //END burger menu drop down

  })
