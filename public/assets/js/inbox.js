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