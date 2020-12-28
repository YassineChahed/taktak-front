
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


 
  

$('.add').on('click', function(){
  $(this).fadeOut(function(){
    $(this).parent(".add-remove").find(".remove").show()
    $(this).parent(".add-remove").find('.food-done').fadeIn()
  })
})

$('.remove').on('click', function(){
  $(this).fadeOut(function(){
    $(this).parent(".add-remove").find(".add").show()
    $(this).parent(".add-remove").find('.food-done').fadeOut()
  })
})

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




$( function() {
    $('.remove').click( function() {
      $('this').find('.list-item').remove()
    });
  } );


$( function() {
    $('.picker-item').click( function() {
      $(this).toggleClass('picker-item-clicked')
    });
  } );



  $(".setting").on('click',function () {
    $(".show").fadeIn();
  });
  
  $("#close-navigation-autour-de-moi-items").on('click',function () {
    $("#navigation-autour-de-moi").hide();
  });
  

  $(".confirmation").click(function(){
      $('.gestion-de-residus-Restaurant-content-feed').fadeOut(function(){
          $('.gestion-de-residus-Foodlist-content-feed').fadeIn()
      })
  })

  $(".donation").click(function(){
    $('.faire-don-page').show(function(){
      $('.chatt').hide()
    })
})

$('.cercle, .cancel').click(function(){
    $('.faire-don-page').hide("slow")
    $('.chatt').show()
})




$( function() {
    $('.association').click( function() {
      $(this).toggleClass('association-has-choosen', function(){
          $('.ONG-done').fadeIn()
      })
    });
  } );

  
  // $(".tab-one").click(function () {
  //   if ($(this).hasClass("collapsed")) {
  //     $(this).removeClass("collapsed");
  //     $(this).animate({
  //       height: 400,
  //     });
  //     $(".tab-one .tab-one-body").fadeIn();
  //   } else {
  //     $(".tab-one .tab-one-body").fadeOut();
  //     $(this).animate(
  //       {
  //         height: 80,
  //       },
  //       function () {
  //         $(this).addClass("collapsed");
  //       }
  //     );
  //   }
  // });


  $('button').click(function () {
    toogle();
  });
  
  
  
  function toogle() {
    $('ul').toggleClass('on');
    $('button').toggleClass('on');
  }

  $('.discussion').click(function () {
  
    $(this).animate({
      height: 400,
    });
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



// $('.gestion-de-residus-content').hover(function(){
//   $('.short-list-online').fadeIn(function(){
//     $('.conversation').fadeOut()
//   })
// })