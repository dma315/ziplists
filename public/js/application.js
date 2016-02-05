$(document).ready(function() {

  var backgroundLinks = [
    "/imgs/macaroons.jpg",
    "/imgs/pizza.jpg",
    "/imgs/gastronomy.jpg",
    "/imgs/choco-chip.jpg",
    "/imgs/bruschetta.jpg",
    "/imgs/pasta.jpg"
  ]

  var randomIndex = Math.floor(Math.random() * backgroundLinks.length)
  var background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("' + backgroundLinks[randomIndex] + '")'

  $('body').css({
    'background': background,
    'background-size': 'cover'
  });


  // Toggle + / - on accordion
  $('.panel-group').on('click', '.plus-minus-toggler', function(event) {
    var $togglers = $('.plus-minus-toggler').find('span')
    var $thisIcon = $(this).find('span')

    // Case 1:  If not collapsed (open), toggle class between the two, nothing else changes
    // Case 2:  If collapsed (closed), set all others to down, set current to up

    // if ($thisIcon.hasClass('glyphicon-chevron-down')) {
    //   $togglers.removeClass()
    //   $togglers.addClass('glyphicon glyphicon-chevron-down')
    //   $thisIcon.addClass('glyphicon-chevron-up')
    // }
    
    $togglers.removeClass('glyphicon-chevron-up')
    if ($thisIcon.hasClass('glyphicon-chevron-down')) {
      $togglers.addClass('glyphicon-chevron-down')
      $thisIcon.removeClass()
      $thisIcon.addClass('glyphicon glyphicon-chevron-up')
    } else {
      $thisIcon.toggleClass('glyphicon-chevron-up glyphicon-chevron-down') 
    }

    // if ($thisIcon.attr('class') == "glyphicon glyphicon-chevron-down") {
      // $('.plus-minus-toggler').find('.glyphicon').removeClass("glyphicon-chevron-down")
      // $('.plus-minus-toggler').find('.glyphicon').addClass("glyphicon-chevron-down")
      // $thisIcon.removeClass("glyphicon-chevron-down")
      // $thisIcon.addClass("glyphicon-chevron-up")
    // } else {
      // $thisIcon.removeClass("glyphicon-chevron-up")
      // $thisIcon.addClass("glyphicon-chevron-down")
    // }
  });

  $('#add-place-form').on('submit', function(event) {
    event.preventDefault();
    $this_form = $(this)
    details = $(this).serialize();
    console.log("button works!")
    $.ajax({
      method: $(this).attr('method'),
      url: $(this).attr('action'),
      data: details
    })
    .done(function(response) {
      $('#accordion').append(response);
      $this_form[0].reset();
    })
  });


});
