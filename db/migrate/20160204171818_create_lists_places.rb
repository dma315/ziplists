class CreateListsPlaces < ActiveRecord::Migration
  def change
    create_table :lists_places do |t|
      t.integer :list_id, null: false
      t.integer :place_id, null: false
    end
  end
end
