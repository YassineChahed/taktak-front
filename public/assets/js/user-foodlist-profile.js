$(document).foundation();

$(".tab-one").click(function () {
  if ($(this).hasClass("collapsed")) {
    $(this).removeClass("collapsed");
    $(this).animate({
      height: '40rem',
    });
    $(".tab-one .tab-one-body").fadeIn();
  } else {
    $(".tab-one .tab-one-body").fadeOut();
    $(this).animate(
      {
        height: "8rem",
      },
      function () {
        $(this).addClass("collapsed");
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


$(".setting").on('click',function () {
  $(".show").fadeIn();
});

$("#close-navigation-autour-de-moi-items").on('click',function () {
  $("#navigation-autour-de-moi").hide();
});

$("#close-navigation-menu-items").click(function () {
  $("#navigation-menu").foundation("close");
});

$(".check-in-place").on("click", function () {
  $(".check-in-first").fadeOut(function(){
    $(".check-in-second").fadeIn();
  });
});

$(".retour").on("click", function () {
  $(".check-in-second").fadeOut(function(){
    $(".check-in-first").fadeIn();
  });
});


$(".my-reservation-body-info button").on("click", function () {
  $(".dashboard-first").fadeOut(function(){
    $(".dashboard-second").fadeIn();
  })
});


// $('.profile-picture-img').hover(function(){
//   $(".profile-picture-img").fadeOut(function(){
//     $(".profile-picture-img-hover").show()
//   })
// })


// $('.profile-picture-img-hover').mouseleave(function(){
//   $(".profile-picture-img-hover").fadeOut(function(){
//     $(".profile-picture-img").show()
//   })
// })

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

$('.profile-picture-img-hover').click(function(){
  $('.navbar, .profile-page-header, .user-foodlist-profile-page-content-feed').fadeOut(function(){
    $('.user-foodlist-add-profile-picture').fadeIn()
  })
})

$("#dropzone2").dropzone({
  url: "/file/post",
  uploadMultiple: true,
  createImageThumbnails: true,
  thumbnailWidth: 50,
  thumbnailHeight: 50,
  addRemoveLinks: true,
  maxThumbnailFilesize:500,
  dictDefaultMessage: "drop",
  init: function () {
    this.on("addedfile", function (file) {
      $("#dropzone .here").hide();
    });
  },
});



$('.user-change').click(function(){
  $('.user-foodlist-profile-page-content').fadeOut(function(){
    $('.profile-empty').fadeIn()
  })
})


$('.profile-picture-empty, .icon-add-picture ').click(function(){
  $('.navbar, .profile-page-header, .user-foodlist-profile-page-content-feed').fadeOut(function(){
    $('.user-foodlist-add-profile-picture').fadeIn()
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



$('.tabs-photos , .tabs-Check').on('click', function(){
  $('.restaurant-management').hide()
})
$('.tabs-photos , .tabs-Check , .tabs-evaluations').on('click', function(){
  $('.shared-location, .last-visit-restaurant').show()
})

$('.tabs-Description').on('click', function(){
  $('.restaurant-management,  .shared-location, .last-visit-restaurant').show()
})
$('.tabs-dashboard').on('click', function(){
  $('.restaurant-management, .shared-location, .last-visit-restaurant').hide()
})