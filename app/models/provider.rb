class Provider < ActiveRecord::Base
  has_one :cost, as: :costtable, dependent: :destroy
  belongs_to :trip

  accepts_nested_attributes_for :cost
end