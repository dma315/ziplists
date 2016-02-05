class AddCompletedAndUserIdToListsPlaces < ActiveRecord::Migration
  def change
    add_column :lists_places, :user_id, :integer
    add_column :lists_places, :complete, :boolean
  end
end
