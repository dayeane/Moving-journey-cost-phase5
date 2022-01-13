class Hotel < ActiveRecord::Base
  has_one :cost, as: :costtable, dependent: :destroy
  belongs_to :trip

  accepts_nested_attributes_for :cost

  geocoded_by :location

  after_validation :geocode, if: :location_changed?

  def hotel_json
    to_json(include: :cost)
  end

  scope :hotel_json, lambda {
    to_json(include: :cost)
  }
end