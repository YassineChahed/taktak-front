$(document).foundation();

$('.menu-close').on('click', function(){
  $('.drop-pa').hide()
})


$('.bars').on('click', function(){
  $('.drop-pa').show()
})



$(".food-category").click(function () {
  $(".content-header").fadeOut(function () {
    $(".autour-de-moi-loading").fadeIn(function () {
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
          $("#loading").fadeOut(function () {
            $(".autour-de-moi-page-content-inner-feed-and-more")
              .css("display", "flex")
              .fadeIn(function () {
                $(window).resize();
              });
          });
        });
    });
  });
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

// $('.carousel-main').owlCarousel({
// 	items: 1,
// 	loop: true,
// 	autoplay: true,
// 	autoplayTimeout: 3000,
// 	nav: true,
// 	dots: true,
// 	navText: ['<span class="fas fa-chevron-left fa-3x"></span>','<span class="fas fa-chevron-right fa-3x"></span>'],
// })

// $('.content-title').on('click',function(){
//   $(this).hide()
// })
$('.filter').on('click', function(){
  $('.filter-pane').show()
})

$(".arrow.next").click(function () {
  $(".orbit-next").click();
});

$(".arrow.prev").click(function () {
  $(".orbit-previous").click();
});

$('.content-title').on('click',function(){
  $(this).toggleClass('clicked')
})
$("#close-navigation-menu-items").click(function () {
  $("#navigation-menu").foundation("close");
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





$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 3,
  dots:true,
  centerMode: true,
    // autoplay:true
  });
});


$('.prev-btn').click(function(){
  $('.slick-prev').click()
})

$('.next-btn').click(function(){
  $('.slick-next ').click()
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

