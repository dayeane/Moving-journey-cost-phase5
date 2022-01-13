class Trip < ActiveRecord::Base
  has_many :hotels
  has_many :stops
  has_many :costs
  has_many :providers

  def trip_json
    to_json(include: { hotels: { include: { cost: {} }},
                                 providers: { include: {cost: {} }},
                                 costs: {}})
  end
end