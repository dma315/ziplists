class Place < ActiveRecord::Base
  has_many :lists_places
  has_many :lists, through: :lists_places
end
