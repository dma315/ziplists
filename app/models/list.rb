class List < ActiveRecord::Base
  
  validates :title, :description, :creator, presence: true

  belongs_to :creator, class_name: "User"
  has_many :lists_places
  has_many :places, through: :lists_places

  before_destroy { |record| ListsPlace.destroy_all "list_id = #{record.id}" }

end
