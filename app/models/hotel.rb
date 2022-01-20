class Hotel < ActiveRecord::Base
  has_one :cost, as: :costtable, dependent: :destroy
  belongs_to :trip

  accepts_nested_attributes_for :cost

  before_save :geocode_endpoint

  def geocode_endpoint
    return unless location_changed?

    url = "http://api.positionstack.com/v1/forward?access_key=1bc72b66b8387a97321dcaf29b1d5856&query=#{location}"
    data = JSON.parse(RestClient.get(url).body)['data'].first

    if data
      self.latitude = data['latitude']
      self.longitude = data['longitude']
    else
      self.latitude = nil
      self.longitude = nil
    end
  end
end