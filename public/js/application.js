$(document).ready(function() {

  var backgroundLinks = [
    "../imgs/macaroons.jpg",
    "../imgs/pizza.jpg",
    "../imgs/gastronomy.jpg",
    "../imgs/choco-chip.jpg",
    "../imgs/bruschetta.jpg",
    "../imgs/pasta.jpg"
  ]

  var randomIndex = Math.floor(Math.random() * backgroundLinks.length)
  var background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("' + backgroundLinks[randomIndex] + '")'

  console.log(background)
  $('body').css({
    'background': background,
    'background-size': 'cover'
  });


  // Toggle + / - on accordion
  $('.panel-group').on('click', '.btn-sm', function(event) {
    $thisIcon = $(this).find('.glyphicon')
    if ($thisIcon.attr('class') == "glyphicon glyphicon-plus") {
      $('.glyphicon').removeClass("glyphicon-minus")
      $('.glyphicon').addClass("glyphicon-plus")
      $thisIcon.addClass("glyphicon-minus")  
    } else {
      $thisIcon.removeClass("glyphicon-minus")
      $thisIcon.addClass("glyphicon-plus")
    }
  });


});
