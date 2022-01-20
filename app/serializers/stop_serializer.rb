class StopSerializer < ActiveModel::Serializer
  attributes :id, :stop_reason, :note, :cost
end
