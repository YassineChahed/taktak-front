$(document).foundation();

$('.eat-switch').click(function(){
    if($(".refuse").is(":visible") ){
        $('.refuse').fadeOut(function(){
            $('.number-of-place').fadeIn()
        })
    }else{
        $('.number-of-place').fadeOut(function(){
            $('.refuse').fadeIn()
        })
    }
    
    
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

$("#close-navigation-menu-items").click(function () {
  $("#navigation-menu").foundation("close");
});



$(".setting").on('click',function () {
  $(".show").fadeIn();
});

$("#close-navigation-autour-de-moi-items").on('click',function () {
  $("#navigation-autour-de-moi").hide();
});

$('.question-icon').mouseenter(function(){
    $('.Foodists-on-site').css('border', '1px solid #ff6900');
    $('.Foodists-on-site-people').fadeOut();
    $('.Foodists-on-site-title').css('display', 'none');
    $('.meaning-symbols').fadeIn()
    $('.foodists-on-site-body-hover').fadeIn()
})

$('.question-icon').mouseleave(function(){
  $('.Foodists-on-site').css('border', '1px solid #e8e8e8');
  $('.Foodists-on-site-people').fadeIn()
  $('.meaning-symbols').css('display', 'none');
  $('.Foodists-on-site-title').show()
  $('.foodists-on-site-body-hover').fadeOut()
})



$('.add-social').click(function(){
    $(this).toggleClass('added')
})

$('.card-restaurant').hover(function(){
    if($(this).hasClass('active')){
        $('.card-restaurant .bottom').slideUp(function(){
            $('.card-restaurant').removeClass('active');
        });
    }else{
        $('.card-restaurant').addClass('active');
        $('.card-restaurant .bottom').stop().slideDown()
    }
})


// function openForm() {
//     document.getElementById("myForm").style.display = "block";
//   }
  
//   function closeForm() {
//     document.getElementById("myForm").style.display = "none";
//   }


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
