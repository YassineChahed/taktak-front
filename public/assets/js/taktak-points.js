$(document).foundation();

// $(".card-plans, .card-plats-with-img").on("click", function () {
//     $(".first-page-bottom").toggle(function(){
//         $('.croix').on("click", function(){
//             $('.first-page-bottom').fadeOut()
//         })
//     })
//   });


  $(".card-plans, .card-plats-with-img").on("click", function () {
    $('.chatt').hide()
    $(".first-page-bottom").show()
  });

  $('.croix').on("click", function(){
    $('.first-page-bottom').hide();
    $('.chatt').show()
})


  $('.show-grid').on('click', function(){
      $('.taktak-points-content-first-page').fadeOut(function(){
          $('.taktak-points-content-second-page').fadeIn()
      })
  })

  $('.second-page-header-left-side').on('click', function(){
    $('.taktak-points-content-second-page').fadeOut(function(){
        $('.taktak-points-content-first-page').fadeIn()
    })
})

$('.show-dropdown').on('click', function(){
    $('.dropdown-content').fadeIn(function(){
        $('.dropdown-content').fadeOut()
    })
})



$('.card-plats-with-img').hover(function(){
    if($(this).hasClass('active')){
        $('.card-plats-with-img .bottom').slideUp(function(){
            $('.card-plats-with-img').removeClass('active');
        });
    }else{
        $('.card-plats-with-img').addClass('active');
        $('.card-plats-with-img .bottom').stop().slideDown()
    }
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
