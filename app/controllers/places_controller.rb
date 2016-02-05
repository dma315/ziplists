get '/lists/:list_id/places/new/?' do
  @list = List.find_by(id: params[:list_id])
  erb :'places/new'
end

post '/lists/:list_id/places/?' do
  list = List.find_by(id: params[:list_id])
  place = Place.find_by(google_id: params[:place][:google_id])
  if !place
    place = Place.create(params[:place])
  end
  list.places << place
  list.lists_places.find_by(id: place.id).update_attributes(params[:lists_place])
  redirect "/lists/#{list.id}/places/new"
end