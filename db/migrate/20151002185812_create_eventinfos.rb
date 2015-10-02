class CreateEventinfos < ActiveRecord::Migration
  def change
    create_table :eventinfos do |t|
      t.string :name
      t.string :datesofevent
      t.string :location

      t.timestamps null: false
    end
  end
end
