$(document).foundation();


$(function(){
  $(".menu-right-side").mouseenter(function(){
      $('.add-article').hide();
  });
  $(".menu-right-side").mouseleave(function(){
      $('.add-article').show( );
  });
});


$("#close-navigation-menu-items").click(function () {
  $("#navigation-menu").foundation("close");
});


$(".setting").on('click',function () {
  $(".show").fadeIn();
});

$("#close-navigation-autour-de-moi-items").on('click',function () {
  $("#navigation-autour-de-moi").hide();
});

$(".add-article").on("click", function () {
    $(".First-panel3").fadeOut(function(){
      $(".seconde-panel3").fadeIn();
      $('.menu-customization-header').hide()
    })
  });
  $(".details-menu-personalize button").on("click", function () {
    $(".seconde-panel3").fadeOut(function(){
      $(".third-panel3").fadeIn();
    })
  });
  $(".arrow-left-iconS3").on("click", function () {
    $(".seconde-panel3").fadeOut(function(){
      $(".First-panel3 ").fadeIn();
      $('.menu-customization-header').show()
    })
  });
  $(".arrow-left-iconTh3").on("click", function () {
    $(".third-panel3").fadeOut(function(){
      $(".seconde-panel3 ").fadeIn();
    })
  });

  $(".confirm").on("click", function () {
    $(".third-panel3").fadeOut(function(){
      $(".fourth-panel3 ").fadeIn();
    })
  });
 
  $('.show-plus').on('click', function(){
    $(this).hide()
    $(this).parent('.confirmation-bottom-content').find('.close-ing').show()
    $(this).parent('.confirmation-bottom-content').find('.numbers-of-ingr').show()
      $(this).parent('.confirmation-bottom-content').find(".menu-customization-confirmation-ingredients").fadeIn()
    
  }); 
  
  $('.close-ing').on('click', function(){
    $(this).hide()
    $(this).parent('.confirmation-bottom-content').find('.show-plus').show()
    $(this).parent('.confirmation-bottom-content').find('.numbers-of-ingr').hide()
      $(this).parent('.confirmation-bottom-content').find(".menu-customization-confirmation-ingredients").fadeOut()
    
  })


$('.f4-plus').on('click', function(){
  $(this).hide()
  $(this).parent('.confirmation-bottom-content').find('.f4-minus').show()
    $(this).parent('.confirmation-bottom-content').find(".menu-customization-confirmation-ingredients").fadeIn()
  
}); 

$('.f4-minus').on('click', function(){
  $(this).hide()
  $('.f4-plus').show()
    $(this).parent('.confirmation-bottom-content').find(".menu-customization-confirmation-ingredients").fadeOut()
  
})




$( function() {
  $('.size').click( function() {
    $(this).toggleClass('size-click')
  });
} );



$(function(){
  $(".commander").mouseenter(function(){
      $('.fourth-p3-header-right-side').hide();
  });
  $(".commander").mouseleave(function(){
      $('.fourth-p3-header-right-side').show();
  });
});




$( function() {
  $('.picker-item').click( function() {
    $(this).toggleClass('item-clicked')
  });
} );





$( function() {
  $('.ingredients').click( function() {
    $(this).toggleClass('ingredients-clicked')
  });
} );




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



