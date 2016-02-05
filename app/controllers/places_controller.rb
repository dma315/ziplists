# get '/lists/:list_id/places/new/?' do
#   @list = List.find_by(id: params[:list_id])
#   erb :'places/new'
# end

post '/lists/:list_id/places/?' do
  list = List.find_by(id: params[:list_id])
  place = Place.find_by(google_id: params[:place][:google_id])
  if !place
    place = Place.create(params[:place])
  end
  list.places << place
  lists_place = ListsPlace.find_by(place_id: place.id, list_id: params[:list_id])
  lists_place.update_attributes(params[:lists_place])
  
  
  if request.xhr?
    erb :'places/_place_template', locals: {lists_place: lists_place, list: list, place: place}, layout: false
  else
    redirect "/lists/#{list.id}"
  end 
end