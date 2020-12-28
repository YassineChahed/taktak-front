$(document).foundation();

$(document).ready(function () {
  
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
  
  var rev = $(".suggest-restaurant-slider");
  rev
    .on("init", function (event, slick, currentSlide) {
      var cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        next2 = cur.next().next(),
        prev = cur.prev(),
        prev2 = cur.prev().prev();
      prev.addClass("slick-sprev");
      next.addClass("slick-snext");
      prev2.addClass("slick-sprev2");
      next2.addClass("slick-snext2");
      cur
        .removeClass("slick-snext")
        .removeClass("slick-sprev")
        .removeClass("slick-snext2")
        .removeClass("slick-sprev2");
      slick.$prev = prev;
      slick.$next = next;
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var cur = $(slick.$slides[nextSlide]);
      slick.$prev.removeClass("slick-sprev");
      slick.$next.removeClass("slick-snext");
      slick.$prev.prev().removeClass("slick-sprev2");
      slick.$next.next().removeClass("slick-snext2");
      (next = cur.next()), (prev = cur.prev());
      //prev2.prev().prev();
      //next2.next().next();
      prev.addClass("slick-sprev");
      next.addClass("slick-snext");
      prev.prev().addClass("slick-sprev2");
      next.next().addClass("slick-snext2");
      slick.$prev = prev;
      slick.$next = next;
      cur
        .removeClass("slick-next")
        .removeClass("slick-sprev")
        .removeClass("slick-next2")
        .removeClass("slick-sprev2");
    });

  rev.slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    centerMode: true,
    infinite: true,
    centerPadding: "250px",
    slidesToShow: 1,
    speed: 500,
    dots: false,
    nextArrow: $("#goPrev"),

    /*infinite: false,*/
  });

  $("#goPrev").click(function () {
    $("#slickSlide").slick('slickNext');
  });
  $("#goNext").click(function () {
    $("#slickSlide").slick('slickPrev');

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

$('.follow-button').click(function(){
  $(this).toggleClass('added')
})

$("#close-navigation-menu-items").click(function () {
  $("#navigation-menu").foundation("close");
});


$(".setting").on('click',function () {
  $(".show").fadeIn();
});

$('.params').on('click', function(){
  $('#navigation-restaurant').fadeIn()
})
$('.paramas-setting').on('click', function(){
  $('#navigation-restaurant').fadeOut()
})

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




$('.menu-close').on('click', function(){
  $('.drop-pa').hide()
})


$('.bars').on('click', function(){
  $('.drop-pa').show()
})