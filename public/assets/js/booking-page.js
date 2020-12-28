$(document).foundation();

$('.step-two-body button').on('click', function(){
  $('.step-two-body').fadeOut();
  $('.step-two-options, orbit-wrapper').fadeIn()
  // $('.orbit-wrapper').css('display', 'block');
  $('slider-footer').fadeOut();
})

$(function () {
  $("#slider").slider({
    max: 24,
    min: 8,
    step: 1,
    animate: true,
    change: function (event, ui) {
      $(".handler-text").text(ui.value + ":00");
    },
  });
});

$("#slider").on("slidecreate", function (event, ui) {
  const span = document.createElement("SPAN");
  span.classList.add("handler-text");
  span.innerText = "08:00";
  $(".ui-slider-handle").append(span);
});


$( document ).ready(function() {
  $("#circle")
    .circleProgress({
      thickness: 14,
      lineCap: "round",
      value: 1,
      size: 370,
      fill: "#FD6A00",
      emptyFill: "#FFD2B2",
      animationStartValue: 0,
      animation: {
        duration: 3000,
      },
    })
    .on("circle-animation-end", function () {

    });
});


$(".next-btn").click(function () {
  $(".orbit-next").click();
});
$('.next-btn-note').click(function(){
  $('.orbit-next').click(function(){
    $('.orbit-bullets').hide();
  })
})


 if($('.loading-slide').hasClass(".is-active")){
   $('.slider-footer').fadeOut()
 }

 $("#close-navigation-menu-items").click(function () {
  $("#navigation-menu").foundation("close");
});


$(".prev-btn").click(function () {
  $(".orbit-previous").click();
});
// $(".input-wrapper > input").focus(function () {
//   $(".input-wrapper .woman-restaurant").animate({
//     opacity: 1,
//     right: 35,
//   });

//   $(".input-wrapper input").animate({
//     paddingLeft: 30,
//   });
//   $(".input-wrapper .icon-search").animate(
//     {
//       opacity: 0,
//     },
//     "fast",
//     function () {
//       $(".input-wrapper .icon-search").css("right", 0);
//       $(".input-wrapper .icon-search").css("left", "unset");
//       $(".input-wrapper .icon-search").animate({
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

$('.menu-item').on('click', function(){
  $('.reservation-Process').css('display', 'flex');
  $('.booking-page-content').css('overflow', 'hidden')
  $('.chatt').hide()
})


$(".setting").on('click',function () {
  $(".show").fadeIn();
});

$("#close-navigation-autour-de-moi-items").on('click',function () {
  $("#navigation-autour-de-moi").hide();
});

$('.close').on('click', function(){
  $('.reservation-Process').fadeOut();
  $('.booking-page-content').css('overflow-y', 'scroll')
  $('.chatt').show()
})


$('.number-person ').on('click', function(){
  $(this).toggleClass('number-person-clicked')
})
$('.fixed-date ').on('click', function(){
  $(this).toggleClass('fixed-date-active ')
})

$('.promo').on('click', function(){
  $(this).toggleClass('active')
})

$('.payment-choice').on('click', function(){
  $(this).toggleClass('payment-choice-active')
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





  $( function() {
    $( "#datepicker" ).datepicker();
  } );


  