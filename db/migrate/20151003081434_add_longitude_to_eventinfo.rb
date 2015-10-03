class AddLongitudeToEventinfo < ActiveRecord::Migration
  def change
    add_column :eventinfos, :longitude, :float
  end
end
