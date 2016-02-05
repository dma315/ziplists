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
    
    $togglers.removeClass('glyphicon-chevron-up')
    if ($thisIcon.hasClass('glyphicon-chevron-down')) {
      $togglers.addClass('glyphicon-chevron-down')
      $thisIcon.removeClass()
      $thisIcon.addClass('glyphicon glyphicon-chevron-up')
    } else {
      $thisIcon.toggleClass('glyphicon-chevron-up glyphicon-chevron-down') 
    }
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
      $(response).hide().appendTo(".panel-group").fadeIn();
      $this_form[0].reset();
    })
  });

  // Remove item from list
  $('.panel-group').on('click', '.delete-item', function(event) {
    event.preventDefault();
    $thisItem = $(this).closest('.panel')
    $.ajax({
      method: "GET",
      url: $(this).attr('href')
    })
    .done(function(response) {
      $thisItem.fadeOut(400, function() {
        $(this).remove();
      })
    });
  });

  // Complete item from list
  $('.panel-group').on('click', '.complete-item', function(event) {
    event.preventDefault();
    $thisItem = $(this).closest('.panel')
    $.ajax({
      method: "GET",
      url: $(this).attr('href')
    })
    .done(function(response) {
      $thisItem.removeClass("panel-default")
      $thisItem.addClass("panel-success")
      $thisItem.hide().appendTo('.panel-group').fadeIn();
    });
  })

});
