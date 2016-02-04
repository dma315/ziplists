class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.integer :list_id, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.string :notes
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :google_id
      t.string :google_maps_url

      t.timestamps
    end

    add_index :places, :name
    add_index :places, :city
    add_index :places, :state
    add_index :places, :zip
  end
end
