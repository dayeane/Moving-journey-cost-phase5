class Trip < ActiveRecord::Base
  has_many :hotels
  has_many :stops
  has_many :costs
  has_many :providers

  before_save :geocode_endpoints

  def trip_json
    to_json(include: { hotels: { include: { cost: {} }},
                                 providers: { include: {cost: {} }},
                                 costs: {}})
  end

  def geocode_endpoints

    if from_changed?
      geocoded = Geocoder.search(from).first
      if geocoded
        self.from_latitude = geocoded.latitude
        self.from_longitude = geocoded.longitude
      end
    end
    
    if to_changed?
      geocoded = Geocoder.search(to).first
      if geocoded
        self.to_latitude = geocoded.latitude
        self.to_longitude = geocoded.longitude
      end
    end
  end

end