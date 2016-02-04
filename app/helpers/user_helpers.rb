helpers do
  
  def current_user
    return @current_user = User.find_by(id: session[:user_id]) if session[:user_id]
    false
  end

  def login_if_not_authenticated
    redirect '/login' if !current_user
  end

end