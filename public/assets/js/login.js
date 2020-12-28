$(document).foundation();

$("#login-tabs").on("change.zf.tabs", function () {
  $(window).resize();
});

$("#orbit").on("slidechange.zf.orbit", function () {
  $(window).resize();
});

$("#country-dropdown").on("show.zf.dropdown	", function () {
  const newHeight = $(".orbit-container").height() + 200 + "px";
  $(".orbit-container").css("height", newHeight);
});

$("#country-dropdown").on("hide.zf.dropdown", function () {
  const newHeight = $(".orbit-container").height() - 200 + "px";
  $(".orbit-container").css("height", newHeight);
});

$('.options').on('click', function(){
  $('.dropdown-filter').fadeIn()
})

$('.dropdown-search').on('click', function(){
  $('.dropdown-filter').fadeOut()
})

$(".prev-btn").click(function () {
  $(".orbit-previous").click();
});


$("#validate-number").on('click', function(){
  $(".orbit-next").click();
  $(".phone-number").animate(
    {
      opacity: 0,
    },
    1000,
    function () {
      $(this).css("display", "none");
      $(".resend-code").fadeIn();
      $(".code-verif").fadeIn();
    }
  );
  $(".loading-line").animate({  width: "100%",}, 4000 );
})

$(".go-next").click(function () {
  $(".orbit-next").click();
});




$('.toggle-wrapper-one').on('click', function(){
  $('.toggle-wrapper-one').toggleClass('toggle-wrapper-clicked')
})
$('.toggle-wrapper-two').on('click', function(){
  $('.toggle-wrapper-two').toggleClass('toggle-wrapper-t-clicked')
})

// $('.selector-two').on('click', function(){
//   $('.toggle-wrapper2').toggleClass('toggle-wrapper-clicked')
// })