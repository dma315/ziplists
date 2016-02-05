get '/lists_places/delete/:id' do
  lists_place = ListsPlace.find_by(id: params[:id])
  list_id = lists_place.list_id
  lists_place.destroy
  redirect "/lists/#{list_id}"
end