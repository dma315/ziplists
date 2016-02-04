$(document).ready(function() {


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

  $('.list-container').on('click', '#add-new-place', function(event) {
    event.preventDefault();
    $thisButton = $(this)
    $thisButton.hide()
    $('#new-place-form-container').show();
  });

});
