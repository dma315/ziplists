class RemoveListIdFromPlaces < ActiveRecord::Migration
  def change
    remove_column :places, :list_id
  end
end
