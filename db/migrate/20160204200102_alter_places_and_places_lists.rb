class AlterPlacesAndPlacesLists < ActiveRecord::Migration
  def change
    remove_column :places, :description
    add_column :lists_places, :description, :string
    add_index :places, :google_id
  end
end
