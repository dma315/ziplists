get '/lists/:list_id/places/new/?' do
  @list = List.find_by(id: params[:list_id])
  erb :'places/new'
end

post '/lists/:list_id/places/?' do
  list = List.find_by(id: params[:list_id])
  place = Place.create(params[:place])
  list.places << place
  redirect "/lists/#{list.id}/places/new"
end