class List < ActiveRecord::Base
  
  validates :title, :description, :creator, presence: true

  belongs_to :creator, class_name: "User"
  has_many :lists_places
  has_many :places, through: :lists_places

end
