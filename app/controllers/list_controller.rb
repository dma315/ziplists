get '/lists/?' do
  @lists = List.all
  erb :'lists/index'
end

get '/lists/new/?' do
  erb :'lists/new'
end

post '/lists/?' do
  list = current_user.created_lists.new(params[:list])
  list.save
  redirect "/lists/#{list.id}/places/new"
end

get '/lists/:id?' do
  erb :'lists/show'
end

