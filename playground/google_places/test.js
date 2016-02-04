function initService() {

  var input = document.getElementById('autocomplete')
  var service = new google.maps.places.Autocomplete(input);

  // var displaySuggestions = function(predictions, status) {
  //   if (status != google.maps.places.PlacesServiceStatus.OK) {
  //     alert(status);
  //     return;
  //   }

  //   $('li').remove(); // I added this

  //   predictions.forEach(function(prediction) {
  //     Original JS code
  //     var li = document.createElement('li');
  //     li.appendChild(document.createTextNode(prediction.description));
  //     document.getElementById('results').appendChild(li);
  //   });
  // };

  
  // var service = new google.maps.places.AutocompleteService();
  
  // service.getQueryPredictions({ input: 'girl and the' }, displaySuggestions);

  // $(document).ready(function() {
  //   var $input = $('#autocomplete')
  //   $input.on('keyup change', function() {
  //     $thisElement = $(this)
  //     var currentText = $thisElement.val();
  //     service.getQueryPredictions({input: currentText}, displaySuggestions);
  //     service.getQueryPredictions()
  //   });
  // });

};


