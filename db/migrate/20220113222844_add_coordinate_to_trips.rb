class AddCoordinateToTrips < ActiveRecord::Migration[6.1]
  def change
    add_column :trips, :from_latitude, :float
    add_column :trips, :from_longitude, :float
    add_column :trips, :to_latitude, :float
    add_column :trips, :to_longitude, :float
  end
end
