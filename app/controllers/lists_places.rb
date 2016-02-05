get '/lists_places/delete/:id' do
  lists_place = ListsPlace.find_by(id: params[:id])
  lists_place.destroy  
  redirect "/lists/#{lists_place.list_id}" if !request.xhr?
end

get '/lists_places/complete/:id' do
  lists_place = ListsPlace.find_by(id: params[:id])
  lists_place.complete = true
  lists_place.save
  redirect "/lists/#{lists_place.list_id}" if !request.xhr?
end