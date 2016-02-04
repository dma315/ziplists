class List < ActiveRecord::Base
  
  validates :title, :description, :creator, presence: true

  belongs_to :creator, class_name: "User"

end
