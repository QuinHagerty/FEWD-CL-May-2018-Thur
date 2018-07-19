  $(document).ready(function(){
    $('.flipBurger').click(function(){
      $('.flipBurger').toggleClass('active')
    })
  })
  //burger menu javascript
  $(document).ready(function(){
    $('.return-to-top').click(function(){
      $('html,body').scrollTop(0)
    })
  })
  //site name return to top
  $(document).ready(function(){
    $('.flipBurger-container, .main-nav li').click(function(){
      $('.main-nav').toggleClass('dropped')
    })
  })
/*  $(document).ready(function(){
    $('.return-to-top').click(function(){
      $('html,body').scrollTop(0)
    })
  })
*/
