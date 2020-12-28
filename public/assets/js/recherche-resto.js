console.log("recherche resto");
// $(".input-wrapper > input").focus(function () {
//     $(".input-wrapper .woman-restaurant").animate({
//       opacity: 1,
//       right: 35,
//     });
  
//     $(".input-wrapper input").animate({
//       paddingLeft: 30,
//     });
//     $(".input-wrapper .icon-search").animate(
//       {
//         opacity: 0,
//       },
//       "fast",
//       function () {
//         $(".input-wrapper .icon-search").css("right", 0);
//         $(".input-wrapper .icon-search").css("left", "unset");
//         $(".input-wrapper .icon-search").animate({
//           right: 30,
//           opacity: 1,
//         });
//       }
//     );
//   });

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

  $('.content-title').on('click',function(){
    $(this).toggleClass('clicked')
  })
  $('.follow-button').click(function(){
    $(this).toggleClass('added')
  })
  
  $('.to-do-item').click(function(){
    $(this).toggleClass('to-do-item-clicked')
  })
  $("#close-navigation-menu-items").click(function () {
    $("#navigation-menu").foundation("close");
  });

  
$(".setting").on('click',function () {
  $(".show").fadeIn();
});

$("#close-navigation-autour-de-moi-items").on('click',function () {
  $("#navigation-autour-de-moi").hide();
});


$("#country-dropdown").on("show.zf.dropdown	", function () {
  const newHeight = $(".orbit-container").height() + 200 + "px";
  $(".orbit-container").css("height", newHeight);
});

$("#country-dropdown").on("hide.zf.dropdown", function () {
  const newHeight = $(".orbit-container").height() - 200 + "px";
  $(".orbit-container").css("height", newHeight);
});

$('.menu-close').on('click', function(){
  $('.drop-pa').hide()
})


$('.bars').on('click', function(){
  $('.drop-pa').show()
})
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



$('.fa-sort-down, .filter span').on('click', function(){
  $('.filter-pane').fadeIn()
})

$('.fa-sort-up , .filter-header').on('click', function(){
  $('.filter-pane').fadeOut()
})