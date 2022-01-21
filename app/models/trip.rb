class Trip < ActiveRecord::Base
  has_many :hotels
  has_many :stops
  has_many :costs
  has_many :providers

  belongs_to :user

  before_save :geocode_endpoints

  def geocode_endpoints
    if from_changed?
      url = "http://api.positionstack.com/v1/forward?access_key=1bc72b66b8387a97321dcaf29b1d5856&query=#{from}"
      data = JSON.parse(RestClient.get(url).body)['data'].first

      if data
        self.from_latitude = data['latitude']
        self.from_longitude = data['longitude']
      else
        self.from_latitude = nil
        self.from_longitude = nil
      end
    end

    if to_changed?
      url = "http://api.positionstack.com/v1/forward?access_key=1bc72b66b8387a97321dcaf29b1d5856&query=#{to}"
      data = JSON.parse(RestClient.get(url).body)['data'].first

      if data
        self.to_latitude = data['latitude']
        self.to_longitude = data['longitude']
      else
        self.to_latitude = nil
        self.to_longitude = nil
      end
    end
  end

end