class ListsPlace < ActiveRecord::Base
  belongs_to :list
  belongs_to :place
end
