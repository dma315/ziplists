class SetListsPlaceCompleteDefaultFalse < ActiveRecord::Migration
  def change
    change_column_default :lists_places, :complete, :false
  end
end
