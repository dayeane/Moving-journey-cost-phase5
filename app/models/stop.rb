class Stop < ActiveRecord::Base
  has_one :cost, as: :costtable, dependent: :destroy
  belongs_to :trip

  accepts_nested_attributes_for :cost

  def stop_json
    to_json(include: :cost)
  end

  scope :stop_json, lambda {
    to_json(include: :cost)
  }
end
