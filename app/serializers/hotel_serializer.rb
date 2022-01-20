class HotelSerializer < ActiveModel::Serializer
  attributes :id, :trip_id, :check_in, :check_out, :location, :latitude, :longitude, :cost
end
