require 'bcrypt'

class User < ActiveRecord::Base
  
  include BCrypt
  
  validates :email, uniqueness: true
  validate :password_cannot_be_blank

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @plain_text_password = new_password
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def password_cannot_be_blank
    errors.add(:password, "can't be blank") if @plain_text_password.length < 1
  end

  def authenticate(entered_password)
    self.password == entered_password
  end
end
