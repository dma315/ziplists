class AlterPlacesTable < ActiveRecord::Migration
  def change
    add_column :places, :neighborhood, :string
    add_column :places, :phone_number, :string
    add_column :places, :website, :string
    remove_column :places, :notes
  end
end
