class TripSerializer < ActiveModel::Serializer
 attributes :id, :from, :to, :depart_date, :budget, :from_latitude, :from_longitude, :to_latitude, :to_longitude
 has_many :hotels
 has_many :stops
 has_many :costs
 has_many :providers
end
