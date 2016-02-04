get '/users/new/?' do
  erb :'users/new'
end

post '/users/?' do
  user = User.new(params[:user])
  user.password = params[:password] 
  if user.save
    session[:user_id] = user.id
    redirect '/'
  else
    @errors = user.errors.full_messages
    erb :'users/new'
  end
end

get '/login/?' do
  erb :'users/login'
end

post '/login/?' do
  user = User.find_by(email: params[:user][:email])
  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect '/'
  else
    @errors = ["Sorry, we could not log you in, please try again"]
    erb :'users/login'
  end
end

get '/logout/?' do
  session.delete(:user_id)
  redirect '/login'
end

get '/users/:id/?' do
  @user = User.find_by_id(params[:id])
  erb :'users/show'
end

# get '/users/:id/edit/?' do
#   erb :'users/edit'
# end

# put '/users/:id/?' do
#   erb :'users/update'
# end

# delete '/users/:id/?' do
#   erb :'users/destroy'
# end

