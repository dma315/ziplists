get '/lists/?' do
  @lists = List.all
  erb :'lists/index'
end

get '/lists/new/?' do
  erb :'lists/new'
end


get '/lists/:id?' do
  erb :'lists/show'
end

