$(document).foundation();


$(document).ready(function(){
  $(".button-more").click(function(){
    $(".box").fadeIn();
    $('.chatt').fadeOut()
  });
});

$(document).ready(function(){
  $(".close-box").click(function(){
    $(".box").fadeOut();
    $('.chatt').fadeIn()
  });
});
  $('.search-rest[type="text"]').on('keydown, keyup', function () {
    $('.woman-restaurant, .fa-search').hide(function(){
      $('.eraser').fadeIn()
    })
  
  });
  
  
  $('.eraser').click( function(){
    $('.search-rest').val('');
    $('.eraser').hide()
    $('.woman-restaurant, .fa-search').show()
  })
  




 // chatting
$('.open-button').click(function(){
  if($('.open-button').hasClass('coll')){
    $('.open-button').removeClass('coll');
    $('.conversation').animate({
      height:'8rem',
    });
    $(".form-container").fadeOut();

  }else{
    $('.open-button').addClass('coll');
      $('.conversation').animate({
        height:'60rem',
      });
      $(".form-container").fadeIn();

  }
})




$(".list-online-right-side ").click(function () {

$('.open-button').removeClass('coll');
$('.conversation').animate({
  height:'7rem',
});
$(".form-container, .conversation-open-img , .convesation-with-restaurant, .convesation-open").fadeOut();

});

$('.online-profile').on('click', function(){
$('.conversation-open-img').css('display' , 'flex')
$(' .convesation-with-restaurant, .convesation-open').fadeIn()
$('.form-container').addClass('open-form');

})


  $('.chatt').mouseleave(function(){
       if($(".form-container").hasClass('open-form')){
        $('.conversation').addClass('conversation-hover')
      } else{
          return false
      }
  });

  $('.chatt').mouseenter(function(){
    if($(".form-container").hasClass('open-form')){
     $('.conversation').removeClass('conversation-hover')
   } else{
       return false
   }
});





$('.close').on('click', function(){
$('.form-container, .conversation-open-img , .convesation-with-restaurant, .convesation-open').fadeOut()
$('.open-button').removeClass('coll');
$('.conversation').animate({
  height:'7rem',
});
$('.form-container').removeClass('open-form');
})

// end-function-chat



$(".arrow-right").click(function () {
  $(".orbit-next").click();
});


$(".arrow-left").click(function () {
  $(".orbit-previous").click();
});



$('.cancel-order').on('click', function(){
  $('.alerte-annulation-commande').css('display', 'flex');
  $('.chatt').hide();
})


  $('.confirmer, .annuler').on('click', function(){
    $('.alerte-annulation-commande').hide();
    $('.chatt').show()
  })
