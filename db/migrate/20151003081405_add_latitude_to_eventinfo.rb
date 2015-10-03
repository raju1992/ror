class AddLatitudeToEventinfo < ActiveRecord::Migration
  def change
    add_column :eventinfos, :latitude, :float
  end
end
