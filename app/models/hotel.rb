class Hotel < ActiveRecord::Base
  has_one :cost, as: :costtable, dependent: :destroy
  belongs_to :trip

  accepts_nested_attributes_for :cost

  def hotel_json
    to_json(include: :cost)
  end

  scope :hotel_json, lambda {
    to_json(include: :cost)
  }
end