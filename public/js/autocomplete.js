function initService() {

  var input = document.getElementById('autocomplete')
  autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', getPlaceDetails)


};

function getPlaceDetails() {
  var place = autocomplete.getPlace()
  var clean_place_object = compileCleanAddressObject(place)
  generatePlacePreview(clean_place_object);
  $('.place-preview').show()
  console.log(place)
  console.log(clean_place_object)
};

function compileCleanAddressObject(google_place_object) {

  var clean_object = {}
  var place = google_place_object

  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0]
    clean_object[addressType] = place.address_components[i].short_name
  }
  clean_object['google_id'] = place.place_id
  clean_object['phone_number'] = place.formatted_phone_number || ''
  clean_object['name'] = place.name || ''
  clean_object['maps_url'] = place.url || ''
  clean_object['website'] = place.website || ''

  return clean_object
}

function generatePlacePreview(clean_place_object) {
  var place = clean_place_object || {}
  $('input[name="place[name]"]').val(place.name)

  var address = place.street_number + " " + place.route
  $('input[name="place[address]"]').val(address)
  $('input[name="place[city]"]').val(place.locality)
  $('input[name="place[state]"]').val(place.administrative_area_level_1)
  $('input[name="place[zip]"]').val(place.postal_code)
  $('input[name="place[neighborhood]"]').val(place.neighborhood)
  $('input[name="place[phone_number]"]').val(place.phone_number)
  $('input[name="place[website]"]').val(place.website)
  $('input[name="place[google_id]"]').val(place.google_id)
  $('input[name="place[google_maps_url]"]').val(place.maps_url)
}

// // Maurice's example on callbacks

// var array = [1,2,3,4,5]

// var times2 = function (num) { 
//   return num * 2;
// }

// array.map(times2)

// Array.prototype.map(func) {
//   for (var index = 0; index < this.length; index++) {
//     var element = this[index];
//     func.call(null, element);
//   }
// }