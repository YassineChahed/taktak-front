$(document).foundation();

$(".tab-one .icon-camera").click(function () {
  if ($('.tab-one').hasClass("collapsed")) {
    $('.tab-one').removeClass("collapsed");
    $('.tab-one').animate({
      height: '40rem',
    });
    $('.post-picture').hide();
    $('.input-post').fadeIn();
    $(".tab-one .tab-one-body").fadeIn();
  } else {
    $(".tab-one .tab-one-body").fadeOut();
    $('.post-picture').fadeIn();
    $('.input-post').hide();
    $('.tab-one').animate(
      {
        height: '8rem',
      },
      function () {
        $('.tab-one').addClass("collapsed");
      }
    );
  }
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

  $('.add-article-right').on('click', function(){
    $('.add-article, .menu-picker, .menu').fadeOut(function(){
      $('.add-category').fadeIn()
    });
  })

  $('.add-category-bottom button').on('click', function(){
    $('.add-category, .chatt').fadeOut(function(){
      $('.menu-picker, .add-article-form, .menu, .alerte-add-product').fadeIn()
      $('.alerte-add-product').css('display', 'flex')
    });
  })

  $('.close-alert-menu').on('click', function(){
    $('.alerte-add-product').hide()
    $('.chatt').show()
  } )

  $('.retour').on('click', function(){
    $('.add-category').fadeOut(function(){
      $('.add-article, .menu-picker, .menu').fadeIn()
    });
  })

  $( function() {
    $('.picker-item').click( function() {
      $(this).toggleClass('item-clicked')
    });
  } );
  $("#close-navigation-menu-items").click(function () {
    $("#navigation-menu").foundation("close");
  });

  
$(".setting").on('click',function () {
  $(".show").fadeIn();
});

$("#close-navigation-autour-de-moi-items").on('click',function () {
  $("#navigation-autour-de-moi").hide();
});



$('.btn-retour').on('click', function(){
  $('.menu-picker, .add-article-form, .menu').fadeOut(function(){
    $('.add-category').fadeIn()
  })
})

$(".tabs-photos, .tabs-photos, .tabs-menu, .tabs-evaluations, .tabs-dashboard").on('click',function () {
  $(".feed-secondary-promo").hide();
});
$(".tabs-photos, .tabs-photos,  .tabs-evaluations, .tabs-dashboard").on('click',function () {
  $(".feed-secondary-gestuin-de-residus").hide();
});

$(" .tabs-menu").on('click',function () {
  $(".feed-secondary-gestuin-de-residus").css(  'display', 'flex');
});
$(".tabs-description").on('click',function () {
  $(".feed-secondary-promo").show();
});