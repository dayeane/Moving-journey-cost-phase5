class CostSerializer < ActiveModel::Serializer
  attributes :id, :amount, :trip_id
end
