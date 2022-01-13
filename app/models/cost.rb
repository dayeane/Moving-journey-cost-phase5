class Cost < ActiveRecord::Base
  belongs_to :costtable, polymorphic: true
  belongs_to :trip

  before_validation :set_trip

  def set_trip
    self.trip_id = costtable.trip_id if trip_id.nil?
  end
end