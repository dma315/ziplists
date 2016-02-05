get '/lists/?' do
  @lists = List.all
  erb :'lists/index'
end

get '/lists/new/?' do
  @list = List.new
  erb :'lists/new'
end

post '/lists/?' do
  list = current_user.created_lists.new(params[:list])
  list.save
  redirect "/lists/#{list.id}"
end

# before '/lists/*' do
#   @list = List.find_by(id: params[:id]) if params[:id]
# end

get '/lists/:id/?' do
  @list = List.find_by(id: params[:id])
  @lists_places = []
  @list.lists_places.each do |lists_place|
    @lists_places << lists_place
  end
  @lists_places.sort_by!{ |lists_place| [lists_place.complete.to_s, lists_place.place.name] }
  erb :'lists/show'
end


get '/lists/:id/edit/?' do
  @list = List.find_by(id: params[:id])
  erb :'lists/edit'
end

put '/lists/:id/?' do
  @list = List.find_by(id: params[:id])
  @list.update_attributes(params[:list])
  @list.save
  redirect "/lists/#{@list.id}"
end

get '/lists/:id/delete/?' do
  @list = List.find_by(id: params[:id])
  @list.destroy
  redirect '/lists'
end

