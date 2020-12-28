$(document).foundation();


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

$(".go-next").click(function () {
  $(".orbit-next").click();
});


$(".return").click(function () {
  $(".orbit-previous").click();
});

$('.confirm').on("click", function(){
  $('.paiement-page-content-first-page').fadeOut(function(){
    $('.paiement-page-content-second-page').fadeIn(function(){
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
    })
  })
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
// $('#two').on('click',function(){
//   $('#one, #step-one').css({'color': ' #7dc364',  'border-bottom' :'red'})
// })
$("#close-navigation-menu-items").click(function () {
  $("#navigation-menu").foundation("close");
});


$(".setting").on('click',function () {
  $(".show").fadeIn();
});

$("#close-navigation-autour-de-moi-items").on('click',function () {
  $("#navigation-autour-de-moi").hide();
});




var back = $(".return");
  var next = $(".go-next");
  var steps = $(".step");
  

  next.bind("click", function() {
    $.each(steps, function(i) {
      if (!$(steps[i]).hasClass('is-active') && !$(steps[i]).hasClass('done')) {
        $(steps[i]).addClass('done');
        // $(steps[i - 1]).removeClass('is-active').addClass('done');
        return false;
      }
    })
  });

  // next.bind("click", function() {
  //   $.each(steps, function(i) {
  //     if ($(steps[i]).hasClass('last-step') ) {
  //       $(next).addClass('disabled');
  //       // $(steps[i - 1]).removeClass('is-active').addClass('done');
  //       return false;
  //     }
  //   })
  // });

 


  back.bind("click", function() {
    $.each(steps, function(i) {
      if ($(steps[i]).hasClass('is-active') && $(steps[i ]).hasClass('done')) {
        $(steps[i ]).removeClass('is-active');
        $(steps[i]).removeClass('done').addClass('is-active');
        return false;
      }
    })
  });

