get '/lists/:list_id/places/new' do
  @list = List.find_by(id: params[:list_id])
  erb :'places/new'
end