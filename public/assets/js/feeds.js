$(document).foundation();

$("#close-navigation-menu-items").click(function () {
  $("#navigation-menu").foundation("close");
});




$('.search-rest[type="text"]').on('keydown, keyup', function () {
  $('.woman-restaurant, .fa-search').hide(function(){
    $('.eraser').fadeIn()
  })

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

$('.eraser').click( function(){
  $('.search-rest').val('');
  $('.eraser').hide()
  $('.woman-restaurant, .fa-search').show()
})


$(".user-widget-settings").mouseenter(function () {
  $(".user-name").fadeOut();
});
$(".user-widget-settings").mouseleave(function () {
  $(".user-name").fadeIn();
});

$(".tab-one .icon-camera").click(function () {
  if ($('.tab-one').hasClass("collapsed")) {
    $('.tab-one').removeClass("collapsed");
    $('.tab-one').animate({height: "40rem"});
    $('.post-picture').hide();
    $('.input-post').fadeIn();
    $(".tab-one .tab-one-body").fadeIn();
  } else {
    $(".tab-one .tab-one-body").fadeOut();
    $('.post-picture').fadeIn();
    $('.input-post').hide();
    $('.tab-one').animate(
      {height: "8rem"},
      function () {
        $('.tab-one').addClass("collapsed");
      }
    );
  }
});



$(".tab-one-panel2").click(function () {
  if ($(this).hasClass("collapsed")) {
    $(this).removeClass("collapsed");
    $(this).animate({
      height:'47rem',
    });
    $(".tab-one-panel2 .tab-one-body").fadeIn();
  } else {
    $(".tab-one-panel2 .tab-one-body").fadeOut();
    $(this).animate(
      {
        height: '8rem',
      },
      function () {
        $(this).addClass("collapsed");
      }
    );
  }
});



$(".tab-one-panel3").click(function () {
  if ($(this).hasClass("collapsed")) {
    $(this).removeClass("collapsed");
    $(this).animate({
      height:'47rem',
    });
    $(".tab-one-panel3 .tab-one-body").fadeIn();
  } else {
    $(".tab-one-panel3 .tab-one-body").fadeOut();
    $(this).animate(
      {
        height: '8rem',
      },
      function () {
        $(this).addClass("collapsed");
      }
    );
  }
});


$("#dropzone").dropzone({
  url: "/file/post",
  uploadMultiple: true,
  createImageThumbnails: true,
  thumbnailWidth: 80,
  thumbnailHeight: 80,
  addRemoveLinks: true,
  dictDefaultMessage: "drop",
  init: function () {
    this.on("addedfile", function (file) {
      $("#dropzone .here").hide();
    });
  },
});

$("#dropzone6").dropzone({
  url: "/file/post",
  uploadMultiple: true,
  createImageThumbnails: true,
  thumbnailWidth: 80,
  thumbnailHeight: 80,
  addRemoveLinks: true,
  dictDefaultMessage: "drop",
  init: function () {
    this.on("addedfile", function (file) {
      $("#dropzone6 .here").hide();
    });
  },
});
$("#dropzone7").dropzone({
  url: "/file/post",
  uploadMultiple: true,
  createImageThumbnails: true,
  thumbnailWidth: 80,
  thumbnailHeight: 80,
  addRemoveLinks: true,
  dictDefaultMessage: "drop",
  init: function () {
    this.on("addedfile", function (file) {
      $("#dropzone7 .here").hide();
    });
  },
});

var myElement = document.getElementById("feeds-page");
var mc = new Hammer(myElement);


mc.on("panright", function (ev) {
  $("#sidemenu").animate({
    left: "0",
  });
});

mc.on("panleft", function (ev) {
  $("#sidemenu").animate({
    left: "-100vw",
  });
});



$(".next").click(function () {
  $(".orbit-next").click();
});

$(".prev").click(function () {
  $(".orbit-previous").click();
});
// 

$('.restaurant-owner').click(function(){
  $('.feeds-page-content-feed, .navbar').fadeOut(function(){
    $('.create-profile-restaurant').fadeIn()
  })
})



$("#dropzone3").dropzone({
  url: "/file/post",
  uploadMultiple: true,
  createImageThumbnails: true,
  thumbnailWidth: 80,
  thumbnailHeight: 80,
  addRemoveLinks: true,
  dictDefaultMessage: "drop",
  init: function () {
    this.on("addedfile", function (file) {
      $(" .here3").hide();
    });
  },
});


$("#dropzone4").dropzone({
  url: "/file/post",
  uploadMultiple: true,
  createImageThumbnails: true,
  thumbnailWidth: 80,
  thumbnailHeight: 80,
  addRemoveLinks: true,
  dictDefaultMessage: "drop",
  init: function () {
    this.on("addedfile", function (file) {
      $(".here").hide();
    });
  },
});




$('.story').click(function(){
     $('.show-story').fadeIn();
     $('.feeds-page-content').css('overflow', 'hidden')
})


$('.close').click(function(){
  $('.show-story').fadeOut();
  $('.feeds-page-content').css('overflow-y', 'scroll')


})






$('.service-item').click(function(){
  $(this).toggleClass('clicked')
})

$('.follow-button').on('click', function(){
  $(this).toggleClass('added')
})

$('.to-do-item').click(function(){
  $(this).toggleClass('to-do-item-clicked')
})


$("#close-navigation-autour-de-moi-items").on('click',function () {
  $("#navigation-autour-de-moi").hide();
});

$(".setting").on('click',function () {
  $(".show").fadeIn();
});

$("#close-navigation-autour-de-moi-items").on('click',function () {
  $("#navigation-autour-de-moi").hide();
});




// element argument can be a selector string
//   for an individual element
// var flkty = new Flickity( '.main-carousel', {
//   // options
// });



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











$('.proposer-moi').on('click', function(){
  $(this).addClass('active')
})




$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 3,
  dots:true,
  centerMode: true,
    // autoplay:true
  });
});

$(document).ready(function(){
  $('.carousel-story').slick({
  slidesToShow: 10,
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