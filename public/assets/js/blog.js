$(document).foundation();


// $(".card-blog").on("click", function () {
//   $(".card-blog").fadeOut();
//   $('.blog-header').fadeOut();
//   $('.my-post').fadeOut();
//   $(".blog-invite-friends").fadeOut(function () {
//     $(".blog-post-details").fadeIn();
//     $(".with-details").fadeIn();
//   });
// });

// $(".details-back").on("click", function () {
//   $(".with-details").fadeOut();
//   $(".blog-post-details").fadeOut(function () {
//     $(".card-blog").fadeIn();
//     $('.my-post').fadeIn()
//     $('.blog-header').fadeIn();
//     $(".blog-invite-friends").fadeIn();
//   });
// });

// $(".blog-post-details button").on("click", function () {
//   $(".blog-post-details").fadeOut(function () {
//     $(".write-post").fadeIn();
//   });
// });
// $(".header button").on("click", function () {
//   $(".card-blog").fadeOut();
//   $('.blog-header').fadeOut();
//   $('.my-post').fadeOut();
//   $(".blog-invite-friends").fadeOut(function () {
//     $(".write-post").fadeIn();
//   });
// });

// $(".write-post-header button").on("click", function () {
//   $(".write-post").fadeOut(function () {
//     $(".blog-post-details").fadeIn();
    
//   });
// });

$(".card-blog").on("click", function (){
  $('.card-blog, .my-post, .blog-invite-friends, .tabs').fadeOut()
  $('.blog-post-details').fadeIn()
})


$('.back-to-page-one').on("click", function (){
  $('.blog-post-details').fadeOut()
  $('.card-blog, .my-post, .blog-invite-friends, .tabs').fadeIn()
  
})

$('.button-new-article').on("click", function (){
  $('.eprimez-vous').fadeOut()
  $('.write-your-article').css('display' , 'flex')
  $('.card-blog, .my-post, .blog-invite-friends, .tabs').fadeOut()
  $('.write-post').fadeIn()
})

$('.back-to-page-two').on("click", function (){
  $('.eprimez-vous').fadeIn()
  $('.write-your-article').css('display' , 'none')
  $('.write-post').fadeOut()
  $('.blog-post-details').fadeIn()
  
})

// $(".input-wrapper > input").focus(function () {
//   $(".input-wrapper .woman-restaurant").animate({
//     opacity: 1,
//     right: 35,
//   });

//   $(".input-wrapper input").animate({
//     paddingLeft: 30,
//   });
//   $(".input-wrapper .search-icon").animate(
//     {
//       opacity: 0,
//     },
//     "fast",
//     function () {
//       $(".input-wrapper .search-icon").css("right", 0);
//       $(".input-wrapper .search-icon").css("left", "unset");
//       $(".input-wrapper .search-icon").animate({
//         right: 30,
//         opacity: 1,
//       });
//     }
//   );
// });

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

$("#close-navigation-menu-items").click(function () {
  $("#navigation-menu").foundation("close");
});

$(".setting").on('click',function () {
  $(".show").fadeIn();
});

$("#close-navigation-autour-de-moi-items").on('click',function () {
  $("#navigation-autour-de-moi").hide();
});


// $('.search-rest').on('click', function(){
//  $('.eraser').fadeIn()
// })

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




$('.sort-up').on('click', function(){
  $('.dropdown-categorie').hide()
})


$('.sort-down').on('click', function(){
  $('.dropdown-categorie').show()
})